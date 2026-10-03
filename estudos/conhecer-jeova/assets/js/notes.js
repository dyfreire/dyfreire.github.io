/* ==========================================================================
   Anotações do estudo de A Sentinela, julho de 2026,
   "Ajude outros a conhecer a Jeová" (28 de setembro a 4 de outubro de 2026).
   cat: chave | insight | hoje | jeova | pesquisa | pergunta
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que o parágrafo está realmente ensinando" },
  insight:  { label: "Insight",      desc: "O que está por trás do texto e passa batido" },
  hoje:     { label: "Hoje",         desc: "Exemplos do dia a dia, explicados" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o artigo revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Dado do artigo, da Bíblia ou do livro Seja Feliz para Sempre!" },
  pergunta: { label: "Participação", desc: "Pergunta pronta para dirigir à assistência" }
};

/* As três perguntas do §3 são as três partes do artigo. A quarta etapa é o fecho. */
window.DIRECTION = [
  { n: 1, title: "Por que conhecer bem a Jeová",
    line: "Quem conhece Jeová passa a amar, a obedecer e a tomar boas decisões, como José.",
    paras: "§1 a §7" },
  { n: 2, title: "Conhecer a personalidade dele",
    line: "Perguntas, leitura da Bíblia com a pergunta certa, e o crédito sempre para Jeová.",
    paras: "§8 a §11" },
  { n: 3, title: "Usar o que já aprendeu",
    line: "Num relato difícil, numa mágoa com um irmão, numa decisão grande: o que eu sei de Jeová?",
    paras: "§12 a §16" },
  { n: 4, title: "O mais importante de tudo",
    line: "Não bastam os fatos. Quem conhece Jeová é conhecido por ele.",
    paras: "§17 e §18" }
];

window.STEP_BY_PARA = {
  "§1": 1, "§2": 1, "§3": 1, "§4": 1, "§5": 1, "§6": 1, "§7": 1,
  "§8": 2, "Quadro": 2, "§9": 2, "§10": 2, "§11": 2,
  "§12": 3, "§13": 3, "§14": 3, "§15": 3, "§16": 3,
  "§17": 4, "§18": 4, "Revisão": 4
};

window.NOTES = {

  /* ------------------------------ §1 a §3 ------------------------------ */

  a1: {
    cat: "hoje", para: "§1",
    quote: "vai pela primeira vez numa reunião",
    title: "Os quatro passos que o artigo cita",
    body: `
      <p>O artigo lista o caminho que todo instrutor reconhece: a <b>primeira reunião</b>, o
      <b>primeiro comentário</b>, <b>falar para outros</b> sobre a fé e, com o tempo, o
      <b>batismo</b>.</p>
      <h4>Ideia de comentário pessoal</h4>
      <p>Quem já dirigiu estudo pode contar, em uma frase, o dia em que viu o estudante levantar a
      mão pela primeira vez. Quem nunca dirigiu pode falar de quem ajudou a si mesmo a conhecer a
      verdade.</p>`
  },

  a2: {
    cat: "jeova", para: "§1",
    quote: "Jeová merece todo crédito e louvor",
    title: "Quem faz crescer é Jeová",
    body: `
      <p>Paulo explica com uma cena de lavoura: um planta, outro rega, mas quem faz a planta crescer é
      Deus. O instrutor faz a parte dele, mas o crescimento não é obra dele.</p>
      <p class="srcline"><span class="scr" data-ref="46:3:6-7">1 Coríntios 3:6, 7</span>;
      <span class="scr" data-ref="64:1:4">3 João 4</span></p>`
  },

  a3: {
    cat: "chave", para: "§2",
    quote: "conhecimento exato",
    title: "Exato não é decorado",
    body: `
      <p>O artigo explica que, na língua original, a palavra não se refere só a um conjunto de fatos.
      Um estudioso diz que é um conhecimento <b>“que causa um efeito profundo em uma pessoa”</b>.</p>
      <h4>Como explicar com uma cena</h4>
      <p>Saber o endereço de alguém é uma coisa. Ter ido à casa dele, sentado à mesa e conversado é
      outra. O conhecimento exato é o segundo tipo: ele muda a pessoa.</p>`
  },

  a4: {
    cat: "pesquisa", para: "§2",
    quote: "o máximo possível sobre ele",
    title: "O que Jeová quer que saibam sobre ele",
    body: `
      <p>Jeremias 9:24 mostra do que vale a pena se orgulhar: de conhecer a Jeová, que demonstra
      <b>amor leal, justiça e retidão</b>, “pois são essas coisas que me agradam”.</p>
      <p>O próprio Jeová já dá a lista do que ele quer que as pessoas conheçam dele.</p>
      <p class="srcline"><span class="scr" data-ref="24:9:24">Jeremias 9:24</span></p>`
  },

  a5: {
    cat: "insight", para: "§3",
    quote: "três perguntas",
    title: "O mapa do artigo está neste parágrafo",
    body: `
      <ol>
        <li>Por que os estudantes precisam conhecer bem a Jeová? <em>§4 a §7</em></li>
        <li>Como ajudá-los a conhecer a personalidade dele? <em>§8 a §11</em></li>
        <li>Como ensiná-los a usar o que já aprenderam? <em>§12 a §16</em></li>
      </ol>
      <p>Vale ler as três em voz alta. A assistência acompanha melhor quando sabe para onde vai.</p>`
  },

  /* ------------------------------ §4 a §7 ------------------------------ */

  a6: {
    cat: "chave", para: "§4",
    quote: "não a nós, nem a um conjunto de ensinos ou a uma organização, mas a Jeová",
    title: "A frase mais forte do bloco",
    body: `
      <p>O estudante não se dedica ao instrutor, nem a uma lista de doutrinas, nem a uma organização.
      Ele se dedica a Jeová.</p>
      <h4>Por que isso protege o estudante</h4>
      <p>Se a fé dele depende do instrutor, ela balança quando o instrutor se muda de cidade ou erra.
      Se depende de Jeová, ela fica de pé.</p>`
  },

  a7: {
    cat: "hoje", para: "§4",
    quote: "o nosso principal objetivo",
    title: "Na prática, durante o estudo",
    body: `
      <ul>
        <li>Depois de explicar uma doutrina, perguntar: “O que isso mostra sobre como Jeová é?”</li>
        <li>Quando o estudante aprende sobre o resgate, parar e perguntar o que ele sente por um Deus
        que deu o próprio Filho.</li>
        <li><b>Para quem já tem idade e estuda por telefone.</b> A mesma pergunta funciona: “Depois
        do que lemos hoje, como você descreveria Jeová?”</li>
      </ul>`
  },

  a8: {
    cat: "chave", para: "§5",
    quote: "Existe uma relação entre amar e obedecer",
    title: "Primeiro o amor, depois a obediência",
    body: `
      <p>Jesus obedecia “para que o mundo saiba que eu amo o Pai”. A obediência dele era a prova do
      amor.</p>
      <p>E 1 João 5:3 completa: os mandamentos de Deus <b>não são pesados</b> para quem ama. A regra
      pesa quando falta amor.</p>
      <p class="srcline"><span class="scr" data-ref="43:14:31">João 14:31</span>;
      <span class="scr" data-ref="62:5:3">1 João 5:3</span></p>`
  },

  a9: {
    cat: "hoje", para: "§5",
    quote: "vai querer obedecer e continuar leal a ele",
    title: "Quando a obediência vem do amor",
    body: `
      <ul>
        <li>O estudante que deixa de fumar não porque “a regra manda”, mas porque não quer mais
        magoar Jeová.</li>
        <li>A estudante que começa a ir às reuniões mesmo cansada depois do serviço, porque quer
        estar onde Jeová está sendo adorado.</li>
      </ul>`
  },

  a10: {
    cat: "insight", para: "§6",
    quote: "Pense, por exemplo, num piloto de avião",
    title: "O exemplo do piloto, em palavras simples",
    body: `
      <p>Para pilotar não basta decorar as regras e passar na prova. O piloto precisa de <b>horas de
      voo</b>, porque só a prática ensina a decidir em situações diferentes.</p>
      <p>Com o estudante é igual. Ele conhece a Jeová estudando, e também <b>vendo o resultado</b>
      quando decide com base na Bíblia e percebe a bênção de Jeová.</p>
      <h4>Cena para comentar</h4>
      <p>O estudante que, pela primeira vez, devolve um troco errado no mercado. Ele sente a paz de
      ter agradado a Jeová. Essa é uma “hora de voo”.</p>`
  },

  a11: {
    cat: "chave", para: "§7",
    quote: "Como eu poderia cometer essa grande maldade e realmente pecar contra Deus?",
    title: "José pensou em Deus, não na regra",
    body: `
      <p>José não respondeu “é contra a regra”. Ele respondeu “é pecar contra Deus”. O que o segurou
      foi saber o que magoaria Jeová.</p>
      <h4>De onde veio isso</h4>
      <p>O artigo diz que, desde criança, José aprendeu as histórias de Adão e Eva e de Abraão e
      Sara. Por elas, entendeu como Jeová vê o casamento.</p>
      <p class="srcline"><span class="scr" data-ref="1:39:7-9">Gênesis 39:7-9</span>;
      <span class="scr" data-ref="1:2:24">2:24</span></p>`
  },

  a12: {
    cat: "insight", para: "§7",
    quote: "Ele sabia o que poderia deixar Jeová magoado",
    title: "Conhecer alguém é saber o que o magoa",
    body: `
      <p>Um filho que conhece bem o pai não precisa de uma lista de proibições. Ele sabe o que deixa
      o pai triste. É esse tipo de conhecimento que o artigo quer que o estudante tenha de Jeová.</p>`
  },

  /* ------------------------------ §8 a §11 ------------------------------ */

  a13: {
    cat: "jeova", para: "§8",
    quote: "bem mais de 50!",
    title: "Jeová ensinou Jó com perguntas",
    body: `
      <p>Do capítulo 38 ao 41 de Jó, Jeová faz mais de 50 perguntas. Ele não deu uma palestra: fez Jó
      pensar.</p>
      <h4>O ponto para o instrutor</h4>
      <p>Pergunta faz o estudante chegar sozinho à conclusão, e o que ele conclui sozinho ele não
      esquece.</p>
      <p class="srcline"><span class="scr" data-ref="18:38:1-7">Jó 38:1-7</span></p>`
  },

  a14: {
    cat: "pesquisa", para: "Quadro",
    quote: "Perguntas que nos ajudam a ensinar",
    title: "As seis perguntas do quadro",
    body: `
      <p>Todas tiradas do livro <i>Seja Feliz para Sempre!</i>. Repare que nenhuma pergunta é “o que
      a Bíblia diz”. Todas são <b>“como Jeová se sente”</b> ou <b>“como Jeová é”</b>.</p>
      <ul>
        <li>Lição 21: o que Jeová sente por quem prega.</li>
        <li>Lição 33: por que o julgamento no Armagedom vai ser justo.</li>
        <li>Lição 34: como ele se sente quando obedecemos.</li>
        <li>Lição 42: como se sentiria com um casamento com quem não o ama.</li>
        <li>Lição 56: até onde vai o perdão dele.</li>
        <li>Lição 57: como lidar com pecadores mostra que ele é razoável e misericordioso.</li>
      </ul>`
  },

  a15: {
    cat: "chave", para: "§9",
    quote: "Por que Jeová incluiu esse relato em sua Palavra?",
    title: "Duas perguntas para cada leitura",
    body: `
      <ol>
        <li>Por que Jeová incluiu esse relato na Bíblia?</li>
        <li>Que qualidades de Jeová eu consigo aprender?</li>
      </ol>
      <p>Tiago fez isso com Jó. Não falou só da perseverança de Jó: mostrou que Jeová tem
      <b>grande compaixão e é misericordioso</b>.</p>
      <p class="srcline"><span class="scr" data-ref="59:5:11">Tiago 5:11</span></p>`
  },

  a16: {
    cat: "pesquisa", para: "§9",
    quote: "ler a Bíblia todos os dias",
    title: "O alvo da lição 5",
    body: `
      <p>A nota do artigo lembra que, na lição 5 do <i>Seja Feliz para Sempre!</i>, no quadro “Tente o
      Seguinte”, o alvo é: “Começar a ler a Bíblia todos os dias usando o quadro ‘Comece sua leitura
      da Bíblia’.”</p>`
  },

  a17: {
    cat: "hoje", para: "§10",
    quote: "a história de Daniel na cova dos leões",
    title: "O exemplo de Daniel, passo a passo",
    body: `
      <ul>
        <li><b>O que agrada a Jeová:</b> Daniel continuou orando mesmo proibido, e foi achado
        inocente. <em>Dan. 6:10, 22</em></li>
        <li><b>O que desagrada:</b> os homens que procuraram um motivo para acusá-lo, e só acharam a lei do Deus dele, acabaram na cova.
        <em>Dan. 6:4, 5, 24</em></li>
        <li><b>Qualidades de Jeová:</b> o próprio rei reconheceu que ele é o Deus vivente, que livra e
        salva. <em>Dan. 6:26, 27</em></li>
      </ul>
      <p class="srcline"><span class="scr" data-ref="27:6:10">Daniel 6:10</span>;
      <span class="scr" data-ref="27:6:22">6:22</span>;
      <span class="scr" data-ref="27:6:26-27">6:26, 27</span></p>`
  },

  a18: {
    cat: "chave", para: "§11",
    quote: "o Grandioso Instrutor",
    title: "O professor de verdade é Jeová",
    body: `
      <p>Isaías 30:20, 21 chama Jeová de “Grandioso Instrutor”, e diz que o povo ouviria uma palavra
      atrás dele: “Este é o caminho. Andem nele.”</p>
      <p class="srcline"><span class="scr" data-ref="23:30:20-21">Isaías 30:20, 21</span></p>`
  },

  a19: {
    cat: "hoje", para: "§11",
    quote: "nos elogie pela forma como ensinamos",
    title: "Quando o estudante agradece a você",
    body: `
      <p>O artigo diz que receber elogio não é errado. O cuidado é devolver o crédito.</p>
      <h4>Frases simples para responder</h4>
      <ul>
        <li>“Que bom que está ajudando. Mas quem está ensinando você é Jeová, eu só abro a Bíblia.”</li>
        <li>“Foi Jeová que preparou isso. Vamos agradecer a ele na oração?”</li>
      </ul>`
  },

  /* ------------------------------ §12 a §16 ------------------------------ */

  a20: {
    cat: "pergunta", para: "§12",
    quote: "Por que Jeová destruiu algumas pessoas, mas deixou outras viver?",
    title: "Uma dúvida comum de estudante",
    body: `
      <p><b>Pergunte à assistência:</b> “Que relato da Bíblia já pareceu difícil de entender para
      vocês ou para um estudante?”</p>
      <p><b>O que se quer ouvir:</b> o Dilúvio, Sodoma, a conquista de Canaã. E em seguida: o que nos
      ajudou foi lembrar do que já sabemos sobre Jeová.</p>`
  },

  a21: {
    cat: "jeova", para: "§13",
    quote: "Nós conhecemos nosso Deus",
    title: "Quatro perguntas que respondem a dúvida",
    body: `
      <ol>
        <li>Qual o ponto de vista dele sobre a vida? Ele não deseja que ninguém seja destruído.
        <em>2 Ped. 3:9</em></li>
        <li>Até onde ele foi para nos salvar? Ele é rico em misericórdia. <em>Efé. 2:4, 5</em></li>
        <li>Ele pune pessoas justas?</li>
        <li>Ele deixa de punir quem merece? Ele é misericordioso, mas não deixa impune o culpado.
        <em>Êxo. 34:6, 7</em></li>
      </ol>
      <p>A Bíblia nem sempre dá todos os detalhes. O artigo diz: <b>não precisamos desses detalhes</b>.</p>`
  },

  a22: {
    cat: "insight", para: "§13",
    quote: "não precisamos desses detalhes",
    title: "Confiar em quem a gente conhece",
    body: `
      <p>Quando um amigo de muitos anos faz algo que você não entende, você não acha logo que ele
      agiu mal. Você pensa: “Eu conheço ele, deve ter um motivo.” É essa confiança que o estudante
      desenvolve quando conhece Jeová.</p>
      <h4>Para quem já tem idade</h4>
      <p>Os irmãos mais velhos têm décadas de experiência com Jeová. Um comentário curto deles sobre
      isso vale muito para os mais novos.</p>`
  },

  a23: {
    cat: "hoje", para: "§14",
    quote: "magoado com algo que um irmão ou irmã tenha feito",
    title: "Três perguntas para o estudante magoado",
    body: `
      <ul>
        <li>Que sacrifício Jeová fez para mostrar amor por esse irmão? <em>João 3:16</em></li>
        <li>Que importância Jeová dá à união? <em>Sal. 133:1</em></li>
        <li>O que ele sente quando buscamos a paz? <em>2 Cor. 13:11</em></li>
      </ul>
      <h4>Cena</h4>
      <p>A estudante que cumprimentou uma irmã no Salão e não foi respondida. Ela pode pensar: Jeová
      deu o Filho por aquela irmã também. E talvez ela simplesmente não tenha ouvido.</p>
      <p class="srcline"><span class="scr" data-ref="19:133:1">Salmo 133:1</span>;
      <span class="scr" data-ref="47:13:11">2 Coríntios 13:11</span></p>`
  },

  a24: {
    cat: "chave", para: "§15",
    quote: "Faço sempre o que agrada ao meu Pai",
    title: "A pergunta que resolve a dúvida",
    body: `
      <p>Quando o estudante já orou e pesquisou mas continua confuso, o artigo sugere uma pergunta:
      <b>“Com base no que eu pesquisei e no que aprendi sobre Jeová, que decisão agradaria a ele?”</b></p>
      <p>E fecha com uma frase curta para citar: qualquer decisão que deixa Jeová feliz é uma boa
      decisão.</p>
      <p class="srcline"><span class="scr" data-ref="43:8:29">João 8:29</span></p>`
  },

  a25: {
    cat: "pesquisa", para: "§15",
    quote: "lição 35",
    title: "Lição 35 do Seja Feliz para Sempre!",
    body: `
      <p>O título é “Como podemos tomar boas decisões?”. O artigo sugere mostrar essa lição quando o
      estudante tem uma decisão importante pela frente.</p>`
  },

  a26: {
    cat: "insight", para: "§16",
    quote: "em vez de dizer para a estudante o que fazer",
    title: "O que Marianne não fez",
    body: `
      <p>Ela não disse “recuse o emprego”. Fez três coisas:</p>
      <ol>
        <li>Perguntou como Jeová ia se sentir: feliz ou triste?</li>
        <li>Incentivou a orar e prestar atenção na resposta de Jeová.</li>
        <li>Deixou a decisão com a estudante.</li>
      </ol>
      <p>Por isso a decisão foi dela, e a fé que saiu dali também foi dela.</p>`
  },

  a27: {
    cat: "jeova", para: "§16",
    quote: "Jeová cuida de nós",
    title: "Jeová cuidou",
    body: `
      <p>A estudante sofria pressão da família e recusou um emprego que pagava muito bem. Pouco depois
      achou outro que não atrapalhava as reuniões. A lição que ela tirou: quando colocamos as coisas
      espirituais em primeiro lugar, Jeová cuida de nós.</p>
      <h4>Para quem já tem idade</h4>
      <p>Muitos irmãos idosos podem contar uma decisão parecida de quando eram jovens, e como Jeová
      cuidou deles desde então.</p>`
  },

  /* ------------------------------ §17 e §18 ------------------------------ */

  a28: {
    cat: "chave", para: "§17",
    quote: "não basta que os estudantes aprendam fatos",
    title: "O resumo do artigo em uma frase",
    body: `
      <p>Doutrinas, reuniões, anciãos, Corpo Governante: tudo isso é importante, e o artigo cita cada
      um. Mas o mais importante é que o estudante conheça bem a Jeová.</p>`
  },

  a29: {
    cat: "jeova", para: "§18",
    quote: "“conhecido por ele”",
    title: "A maior bênção",
    body: `
      <p>O artigo termina virando a direção. Começamos falando de conhecer a Jeová. Termina dizendo
      que quem ama a Deus <b>é conhecido por ele</b>. O Deus Todo-Poderoso presta atenção em nós e
      nos vê como amigos.</p>
      <p class="srcline"><span class="scr" data-ref="46:8:3">1 Coríntios 8:3</span>;
      <span class="scr" data-ref="19:25:14">Salmo 25:14</span></p>`
  }
};
