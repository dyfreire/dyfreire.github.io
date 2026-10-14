# -*- coding: utf-8 -*-
"""Gera a página inicial em formato de calendário e uma página por semana.

Uso: python3 _calendario/build.py   (na raiz do repositório)
Para acrescentar uma semana, edite _calendario/semanas.json e rode de novo.
"""
import datetime as dt, html, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "_calendario/semanas.json").read_text(encoding="utf-8"))

MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto",
         "setembro", "outubro", "novembro", "dezembro"]
ICONE = {"discurso": "🎤", "joias": "💎", "livro": "📘", "sentinela": "📖", "parte": "🗣️",
         "leitura": "📜", "reuniao": "📅", "estudo": "🔎", "pasta": "📂"}

CSS = """
:root{--bg:#f8f9fa;--card:#fff;--text:#1a1a1a;--muted:#5f6b76;--border:#dee2e6;--link:#1d4ed8;
--meio:#1d4ed8;--meio-bg:#eff6ff;--fim:#7c3aed;--fim-bg:#f5f3ff;--atual:#b45309;--atual-bg:#fffbeb;
--shadow:0 2px 8px rgba(0,0,0,.08)}
[data-theme="dark"]{--bg:#0f172a;--card:#1e293b;--text:#f1f5f9;--muted:#a3b0c2;--border:#334155;--link:#93c5fd;
--meio:#93c5fd;--meio-bg:#172554;--fim:#c4b5fd;--fim-bg:#2e1065;--atual:#fbbf24;--atual-bg:#3a2a06;
--shadow:0 2px 8px rgba(0,0,0,.35)}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--text);line-height:1.55}
.hero{background:linear-gradient(135deg,#1e40af,#7c3aed,#be185d);color:#fff;padding:44px 16px;text-align:center}
.hero h1{font-size:2rem;font-weight:800;margin-bottom:6px}
.hero .subtitle{opacity:.95}
.hero .lema{opacity:.85;font-style:italic;font-size:.95rem;margin-top:6px}
.container{max-width:920px;margin:0 auto;padding:20px 16px 60px}
.controls{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:18px}
.btn{background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:9px 14px;font-size:.9rem;cursor:pointer;text-decoration:none}
.btn:hover{border-color:var(--meio)}
.mes{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:26px 0 10px;font-weight:700}
.semana{background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);margin-bottom:14px;overflow:hidden}
.semana.atual{border:2px solid var(--atual)}
.sem-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;padding:12px 16px;border-bottom:1px solid var(--border)}
.semana.atual .sem-head{background:var(--atual-bg)}
.sem-head h2{font-size:1.1rem}
.sem-head h2 a{color:inherit;text-decoration:none}
.sem-head .leitura{color:var(--muted);font-size:.9rem}
.sem-head .tag{margin-left:auto;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--atual);display:none}
.semana.atual .tag{display:inline}
.cols{display:grid;grid-template-columns:1fr 1fr}
.col{padding:12px 16px 14px}
.col+.col{border-left:1px solid var(--border)}
.col h3{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px}
.col.meio h3{color:var(--meio)}
.col.fim h3{color:var(--fim)}
.item{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;border-radius:10px;text-decoration:none;color:var(--text);margin-bottom:6px}
.col.meio .item{background:var(--meio-bg)}
.col.fim .item{background:var(--fim-bg)}
.item:hover{outline:2px solid var(--border)}
.item .ic{font-size:1.25rem;line-height:1.3}
.item b{display:block;font-size:.95rem;color:var(--link)}
.item small{color:var(--muted);font-size:.8rem}
.vazio{color:var(--muted);font-size:.85rem;font-style:italic;padding:6px 2px}
.outros{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px}
.outros .item{background:var(--card);border:1px solid var(--border)}
footer{color:var(--muted);text-align:center;font-size:.8rem;margin-top:30px}
@media (max-width:640px){.cols{grid-template-columns:1fr}.col+.col{border-left:0;border-top:1px solid var(--border)}.hero h1{font-size:1.6rem}}
"""

SCRIPT = """
<script>
function toggleTheme(){var b=document.body,n=b.getAttribute('data-theme')==='dark'?'light':'dark';
b.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}}
try{var s=localStorage.getItem('theme');if(s)document.body.setAttribute('data-theme',s)}catch(e){}
(function(){var hoje=new Date();hoje.setHours(12,0,0,0);
document.querySelectorAll('.semana[data-inicio]').forEach(function(el){
var i=new Date(el.dataset.inicio+'T00:00:00'),f=new Date(el.dataset.fim+'T23:59:59');
if(hoje>=i&&hoje<=f)el.classList.add('atual');});})();
</script>
"""


def d(s):
    return dt.date.fromisoformat(s)


def faixa(ini, fim):
    a, b = d(ini), d(fim)
    if a.month == b.month:
        return f"{a.day} a {b.day} de {MESES[b.month - 1]}"
    return f"{a.day} de {MESES[a.month - 1]} a {b.day} de {MESES[b.month - 1]}"


def item(it, prefixo):
    e = html.escape
    return (f'<a class="item" href="{prefixo}{e(it["href"])}"><span class="ic">{ICONE.get(it["tipo"], "📄")}</span>'
            f'<span><b>{e(it["titulo"])}</b><small>{e(it["detalhe"])}</small></span></a>')


def coluna(classe, titulo, itens, prefixo):
    corpo = "".join(item(i, prefixo) for i in itens) or '<p class="vazio">Ainda não preparado</p>'
    return f'<div class="col {classe}"><h3>{titulo}</h3>{corpo}</div>'


def semana(s, prefixo, link=True):
    titulo = faixa(s["inicio"], s["fim"])
    h2 = f'<a href="{prefixo}semanas/{s["inicio"]}/">{titulo}</a>' if link else titulo
    leitura = f'<span class="leitura">· {html.escape(s["leitura"])}</span>' if s["leitura"] else ""
    return (f'<section class="semana" data-inicio="{s["inicio"]}" data-fim="{s["fim"]}">'
            f'<div class="sem-head"><h2>{h2}</h2>{leitura}<span class="tag">Esta semana</span></div>'
            f'<div class="cols">{coluna("meio", "Meio de semana · Vida e Ministério", s["meio"], prefixo)}'
            f'{coluna("fim", "Fim de semana · A Sentinela", s["fim_semana"], prefixo)}</div></section>')


def pagina(titulo, corpo, sub):
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{titulo}</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%85%3C/text%3E%3C/svg%3E">
<style>{CSS}</style>
</head>
<body>
<div class="hero">
  <h1>📖 Estudos Bíblicos Interativos</h1>
  <div class="subtitle">{sub}</div>
  <div class="lema">“Lâmpada para os meus pés é a tua palavra” · Salmo 119:105</div>
</div>
<div class="container">
{corpo}
<footer><p>Notas de preparação pessoal a partir do jw.org e do JW Library. As publicações e o texto da Bíblia são
propriedade da Watch Tower Bible and Tract Society.</p></footer>
</div>
{SCRIPT}
</body>
</html>
"""


# Página inicial: semanas agrupadas por mês, da mais nova para a mais antiga.
semanas = sorted(DATA["semanas"], key=lambda s: s["inicio"], reverse=True)
partes, mes_atual = [], None
for s in semanas:
    m = d(s["fim"])
    rotulo = f"{MESES[m.month - 1]} de {m.year}"
    if rotulo != mes_atual:
        partes.append(f'<p class="mes">{rotulo}</p>')
        mes_atual = rotulo
    partes.append(semana(s, ""))
outros = "".join(item(i, "") for i in DATA["outros"])
corpo = ('<div class="controls"><button class="btn" onclick="toggleTheme()">🌓 Tema</button></div>'
         + "".join(partes)
         + f'<p class="mes">Outros materiais</p><div class="outros">{outros}</div>')
(ROOT / "index.html").write_text(pagina("Estudos Bíblicos · Calendário", corpo,
                                        "Calendário das reuniões · meio de semana e fim de semana"), encoding="utf-8")

# Uma página por semana, para mandar um link só.
for s in semanas:
    pasta = ROOT / "semanas" / s["inicio"]
    pasta.mkdir(parents=True, exist_ok=True)
    corpo = ('<div class="controls"><a class="btn" href="../../">← Calendário</a>'
             '<button class="btn" onclick="toggleTheme()">🌓 Tema</button></div>' + semana(s, "../../", link=False))
    (pasta / "index.html").write_text(
        pagina(f"Semana de {faixa(s['inicio'], s['fim'])}", corpo, f"Semana de {faixa(s['inicio'], s['fim'])}"),
        encoding="utf-8")

print(len(semanas), "semanas,", len(DATA["outros"]), "outros")
