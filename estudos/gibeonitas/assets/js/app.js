/* ==========================================================================
   Coragem em Moriá, camada interativa.
   Depende de verses.js (window.NWT) e notes.js (window.NOTES, window.CATS).
   ========================================================================== */

(function () {
  "use strict";

  var NOTES = window.NOTES || {};
  var CATS = window.CATS || {};
  var NWT = window.NWT || { books: {}, verses: {} };

  /* ----------------------------- armazenamento ----------------------------- */

  var store = {
    get: function (key, fallback) {
      try {
        var raw = localStorage.getItem("moria." + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem("moria." + key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
    }
  };

  var done = store.get("done", {});
  var filters = store.get("filters", {});
  Object.keys(CATS).forEach(function (c) { if (!(c in filters)) filters[c] = true; });

  /* ------------------------------- utilidades ------------------------------- */

  function el(sel, root) { return (root || document).querySelector(sel); }
  function els(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var annNodes = [];   // marcações na ordem do documento
  var annIds = [];

  /* --------------------------- preparo das marcações --------------------------- */

  function setupAnnotations() {
    annNodes = els("[data-n]");
    annNodes.forEach(function (node) {
      var id = node.getAttribute("data-n");
      var note = NOTES[id];
      if (!note) {
        node.removeAttribute("data-n");
        console.warn("Anotação sem conteúdo:", id);
        return;
      }
      annIds.push(id);
      node.classList.add("ann", "cat-" + note.cat);
      node.setAttribute("role", "button");
      node.setAttribute("tabindex", "0");
      node.setAttribute("aria-label", CATS[note.cat].label + ": " + note.title);
      node.title = CATS[note.cat].label + ": " + note.title;
      if (done[id]) node.classList.add("done");
    });
    applyFilters();
    updateProgress();
  }

  /* ------------------------------ filtros/guia ------------------------------ */

  function applyFilters() {
    annNodes.forEach(function (node) {
      var note = NOTES[node.getAttribute("data-n")];
      if (!note) return;
      node.classList.toggle("off", !filters[note.cat]);
    });
    els(".legend").forEach(function (b) {
      b.setAttribute("aria-pressed", filters[b.getAttribute("data-cat")] ? "true" : "false");
    });
    store.set("filters", filters);
  }

  function buildGuide() {
    var grid = el("#guideGrid");
    var counts = {};
    annIds.forEach(function (id) {
      var c = NOTES[id].cat;
      counts[c] = (counts[c] || 0) + 1;
    });
    Object.keys(CATS).forEach(function (cat) {
      var b = document.createElement("button");
      b.className = "legend";
      b.type = "button";
      b.setAttribute("data-cat", cat);
      b.style.setProperty("--sw", "var(--c-" + cat + ")");
      b.innerHTML =
        '<span class="swatch" aria-hidden="true"></span>' +
        '<span><span class="lb">' + CATS[cat].label + "</span>" +
        '<span class="ld">' + CATS[cat].desc + "</span></span>" +
        '<span class="ct">' + (counts[cat] || 0) + "</span>";
      b.addEventListener("click", function () {
        filters[cat] = !filters[cat];
        applyFilters();
      });
      grid.appendChild(b);
    });
  }

  /* ------------------------------- progresso ------------------------------- */

  function updateProgress() {
    var total = annIds.length;
    var n = annIds.filter(function (id) { return done[id]; }).length;
    el("#progress").innerHTML = "<b>" + n + "</b> / " + total + " vistos";
  }

  /* --------------------------- direção do estudo --------------------------- */

  var DIRECTION = window.DIRECTION || [];
  var STEPS = window.STEP_BY_PARA || {};

  function stepOf(note) { return STEPS[note.para] || null; }

  function buildDirection() {
    var list = el("#stepsList");
    if (!list) return;
    DIRECTION.forEach(function (d) {
      var li = document.createElement("li");
      li.setAttribute("data-step", d.n);
      li.innerHTML = "<b>" + d.title + "</b> " + d.line +
                     ' <em>' + d.paras + "</em>";
      list.appendChild(li);
    });
  }

  function markParagraphSteps() {
    els(".para .pnum").forEach(function (n) {
      var key = n.textContent.trim();
      var step = STEPS[key];
      if (!step) return;
      var tag = document.createElement("span");
      tag.className = "pstep";
      tag.setAttribute("data-step", step);
      tag.textContent = "E" + step;
      tag.title = "Etapa " + step + ": " + (DIRECTION[step - 1] ? DIRECTION[step - 1].title : "");
      n.appendChild(tag);
    });
  }

  /* -------------------------------- modal nota -------------------------------- */

  var sheet = el("#sheet");
  var sheetBox = el("#sheetBox");
  var currentId = null;

  function openNote(id) {
    var note = NOTES[id];
    if (!note) return;
    currentId = id;
    var pos = annIds.indexOf(id);
    sheetBox.style.setProperty("--sh-c", "var(--c-" + note.cat + ")");
    sheetBox.innerHTML =
      '<div class="sheet-top">' +
        '<span class="chip">' + CATS[note.cat].label + "</span>" +
        '<span class="progress">' + (note.para || "") + "</span>" +
        (stepOf(note) ? '<span class="stepchip">Etapa ' + stepOf(note) + "</span>" : "") +
        '<button class="sheet-close" type="button" data-act="close" aria-label="Fechar">&#10005;</button>' +
      "</div>" +
      "<h3>" + note.title + "</h3>" +
      (note.quote ? '<p class="quoted">“' + note.quote + '”</p>' : "") +
      note.body +
      '<div class="sheet-nav">' +
        '<button class="btn" type="button" data-act="prev">&#8592; Anterior</button>' +
        '<button class="btn" type="button" data-act="next">Próximo &#8594;</button>' +
        '<button class="btn" type="button" data-act="done" aria-pressed="' + (done[id] ? "true" : "false") + '">' +
          (done[id] ? "Visto" : "Marcar como visto") +
        "</button>" +
        '<span class="pos">' + (pos + 1) + " de " + annIds.length + "</span>" +
      "</div>";
    if (!sheet.open) sheet.showModal();
    sheetBox.scrollTop = 0;
  }

  var backToNote = null;

  function openVerse(ref) {
    var parsed = parseRef(ref);
    if (!parsed) return;
    backToNote = currentId;
    currentId = null;
    sheetBox.style.setProperty("--sh-c", "var(--c-scr)");
    sheetBox.innerHTML =
      '<div class="sheet-top">' +
        '<span class="chip">Bíblia</span>' +
        '<button class="sheet-close" type="button" data-act="close" aria-label="Fechar">&#10005;</button>' +
      "</div>" +
      '<p class="verse-ref">' + parsed.label + "</p>" +
      '<div class="verse-body">' + parsed.html + "</div>" +
      '<p class="verse-src">Tradução do Novo Mundo da Bíblia Sagrada (Edição de Estudo), jw.org</p>' +
      (backToNote
        ? '<div class="sheet-nav"><button class="btn" type="button" data-act="back">&#8592; Voltar para a anotação</button></div>'
        : "");
    if (!sheet.open) sheet.showModal();
    sheetBox.scrollTop = 0;
  }

  function parseRef(ref) {
    var m = /^(\d+):(\d+):(.+)$/.exec(ref);
    if (!m) return null;
    var book = m[1], chap = m[2], spec = m[3];
    var wanted = [];
    spec.split(",").forEach(function (chunk) {
      chunk = chunk.trim();
      var range = /^(\d+)\s*-\s*(\d+)$/.exec(chunk);
      if (range) {
        for (var v = +range[1]; v <= +range[2]; v++) wanted.push(v);
      } else if (/^\d+$/.test(chunk)) {
        wanted.push(+chunk);
      }
    });
    var html = "";
    var prev = null;
    var missing = [];
    wanted.forEach(function (v) {
      var text = NWT.verses[book + ":" + chap + ":" + v];
      if (!text) { missing.push(v); return; }
      if (prev !== null && v !== prev + 1) html += "</p><p>";
      html += '<span class="vn">' + v + "</span>" + text + " ";
      prev = v;
    });
    if (!html) return null;
    if (missing.length) {
      html += '</p><p class="verse-src">Versículos não incluídos nesta cópia offline: ' + missing.join(", ") + ".";
    }
    return {
      label: (NWT.books[book] || "?") + " " + chap + ":" + spec.replace(/,\s*/g, ", "),
      html: "<p>" + html + "</p>"
    };
  }

  function goto(delta) {
    if (currentId === null) return;
    var i = annIds.indexOf(currentId) + delta;
    if (i < 0) i = annIds.length - 1;
    if (i >= annIds.length) i = 0;
    var id = annIds[i];
    openNote(id);
    scrollToAnn(id, false);
  }

  function scrollToAnn(id, flash) {
    var node = annNodes.filter(function (n) { return n.getAttribute("data-n") === id; })[0];
    if (!node) return;
    var r = node.getBoundingClientRect();
    if (r.top < 90 || r.bottom > window.innerHeight - 60) {
      var y = window.scrollY + r.top - Math.min(160, window.innerHeight * 0.28);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (flash) {
      node.classList.remove("flash");
      void node.offsetWidth;
      node.classList.add("flash");
    }
  }

  function toggleDone() {
    if (!currentId) return;
    done[currentId] = !done[currentId];
    if (!done[currentId]) delete done[currentId];
    store.set("done", done);
    annNodes.forEach(function (n) {
      var id = n.getAttribute("data-n");
      n.classList.toggle("done", !!done[id]);
    });
    updateProgress();
    buildDrawer();
    openNote(currentId);
  }

  /* -------------------------------- roteiro -------------------------------- */

  var drawer = el("#drawer");

  function buildDrawer() {
    var box = el("#drawerList");
    box.innerHTML = "";
    Object.keys(CATS).forEach(function (cat) {
      var ids = annIds.filter(function (id) { return NOTES[id].cat === cat; });
      if (!ids.length) return;
      var g = document.createElement("div");
      g.className = "drawer-group";
      g.style.setProperty("--dg-c", "var(--c-" + cat + ")");
      g.innerHTML = "<h4>" + CATS[cat].label + " (" + ids.length + ")</h4>";
      ids.forEach(function (id) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "drawer-item" + (done[id] ? " done" : "");
        b.innerHTML = '<span class="pref">' + (NOTES[id].para || "") + "</span>" + NOTES[id].title;
        b.addEventListener("click", function () {
          drawer.close();
          openNote(id);
          scrollToAnn(id, true);
        });
        g.appendChild(b);
      });
      box.appendChild(g);
    });
  }

  /* ------------------------------- respostas ------------------------------- */

  function setupAnswers() {
    var saved = store.get("ans", {});
    els("textarea.answer").forEach(function (t) {
      var key = t.getAttribute("data-a");
      if (saved[key]) t.value = saved[key];
      t.addEventListener("input", function () {
        saved[key] = t.value;
        store.set("ans", saved);
      });
    });
  }

  /* ------------------- pontos de resposta esperados ------------------- */

  function setupExpected() {
    var btn = el("#ansBtn");
    var blocks = els("details.expected, details.followup");
    var open = store.get("ansOpen", false);

    function paint() {
      blocks.forEach(function (d) { d.open = open; });
      btn.setAttribute("aria-pressed", open ? "true" : "false");
      btn.textContent = open ? "Fechar respostas" : "Respostas";
    }
    paint();

    btn.addEventListener("click", function () {
      open = !open;
      store.set("ansOpen", open);
      paint();
    });
  }

  /* --------------------------------- tema --------------------------------- */

  function setupTheme() {
    var btn = el("#themeBtn");
    var saved = store.get("theme", null);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    function label() {
      var cur = document.documentElement.getAttribute("data-theme");
      btn.textContent = cur === "dark" ? "Tema claro" : cur === "light" ? "Tema escuro" : "Tema";
    }
    label();
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = cur ? (cur === "dark" ? "light" : "dark") : (dark ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", next);
      store.set("theme", next);
      label();
    });
  }

  /* -------------------------------- eventos -------------------------------- */

  function onActivate(e) {
    var ann = e.target.closest("[data-n]");
    if (ann) {
      var id = ann.getAttribute("data-n");
      if (NOTES[id]) { openNote(id); return; }
    }
    var scr = e.target.closest("[data-ref]");
    if (scr) openVerse(scr.getAttribute("data-ref"));
  }

  document.addEventListener("click", onActivate);

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var t = e.target;
    if (t && (t.hasAttribute("data-n") || t.hasAttribute("data-ref"))) {
      e.preventDefault();
      onActivate({ target: t });
    }
  });

  sheetBox.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (!b) return;
    var act = b.getAttribute("data-act");
    if (act === "close") sheet.close();
    if (act === "next") goto(1);
    if (act === "prev") goto(-1);
    if (act === "done") toggleDone();
    if (act === "back" && backToNote) openNote(backToNote);
  });

  sheet.addEventListener("click", function (e) {
    if (e.target === sheet) sheet.close();   // clique no backdrop
  });
  drawer.addEventListener("click", function (e) {
    if (e.target === drawer) drawer.close();
  });

  document.addEventListener("keydown", function (e) {
    if (!sheet.open || currentId === null) return;
    if (e.key === "ArrowRight") { e.preventDefault(); goto(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goto(-1); }
  });

  el("#guideBtn").addEventListener("click", function () {
    var g = el("#guide");
    var open = !g.hidden;
    g.hidden = open;
    this.setAttribute("aria-pressed", open ? "false" : "true");
    store.set("guideOpen", !open);
  });

  el("#routeBtn").addEventListener("click", function () {
    buildDrawer();
    drawer.showModal();
  });

  el("#drawerClose").addEventListener("click", function () { drawer.close(); });

  el("#resetBtn").addEventListener("click", function () {
    if (!confirm("Limpar as marcas de visto? Suas respostas escritas continuam salvas.")) return;
    done = {};
    store.set("done", done);
    annNodes.forEach(function (n) { n.classList.remove("done"); });
    updateProgress();
    buildDrawer();
  });

  /* --------------------------------- início --------------------------------- */

  setupAnnotations();
  buildDirection();
  markParagraphSteps();
  buildGuide();
  buildDrawer();
  setupAnswers();
  setupExpected();
  setupTheme();

  var guideOpen = store.get("guideOpen", true);
  el("#guide").hidden = !guideOpen;
  el("#guideBtn").setAttribute("aria-pressed", guideOpen ? "true" : "false");
})();
