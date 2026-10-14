/* ==========================================================================
   Anotações do estudo de A Sentinela, agosto de 2026,
   "Você pode vencer a luta contra Satanás e os demônios" (12 a 18 de outubro de 2026).
   Textos bíblicos do JW Library local; complementos do Guia de Pesquisa.
   cat: chave | insight | hoje | jeova | pesquisa | pergunta
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que o parágrafo está realmente ensinando" },
  insight:  { label: "Insight",      desc: "O que está por trás do texto e passa batido" },
  hoje:     { label: "Hoje",         desc: "Exemplos do dia a dia, explicados" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o artigo revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Guia de Pesquisa e publicações indicadas" },
  pergunta: { label: "Participação", desc: "Pergunta pronta para dirigir à assistência" }
};

window.DIRECTION = [
  { n: 1, title: "Uma guerra de outro tipo",
    line: "Não lutamos nas guerras do mundo, mas estamos numa luta contra espíritos malignos.",
    paras: "§1 e §2" },
  { n: 2, title: "Satanás quer nos dividir",
    line: "Ciúme, diferenças e mágoas: ele quer que lutemos uns contra os outros, e não contra ele.",
    paras: "§3 a §8" },
  { n: 3, title: "Satanás quer nos distrair",
    line: "A oposição e a injustiça podem nos tirar o foco da pregação, se tentarmos resolvê-las do nosso jeito.",
    paras: "§9 a §15" },
  { n: 4, title: "Como vencer",
    line: "Com fé em Jeová e Jesus, unidos aos irmãos e bondosos com quem se opõe.",
    paras: "§16 e §17" }
];

window.STEP_BY_PARA = {
  "§1": 1, "§2": 1,
  "§3": 2, "§4": 2, "§5": 2, "§6": 2, "§7": 2, "§8": 2,
  "§9": 3, "§10": 3, "§11": 3, "§12": 3, "§13": 3, "§14": 3, "§15": 3,
  "§16": 4, "§17": 4, "Revisão": 4
};

window.NOTES = {

  /* ------------------------------ §1 e §2 ------------------------------ */

  a1: {
    cat: "chave", para: "§1",
    quote: "uma luta contra espíritos malignos",
    title: "Não é contra pessoas",
    body: `
      <p>Efésios 6:12 diz que a luta não é “contra sangue e carne”. O inimigo não é o vizinho, o parente que se
      opõe nem o governo. São as forças espirituais malignas.</p>
      <h4>Por que isso muda tudo</h4>
      <p>Quem entende isso não trata o opositor como inimigo. O artigo inteiro vai nessa direção: amar os irmãos
      e ser bondoso até com quem nos persegue.</p>
      <p class="srcline"><span class="scr" data-ref="49:6:11-12">Efésios 6:11, 12</span></p>`
  },

  a2: {
    cat: "pesquisa", para: "§1",
    quote: "quais táticas Satanás e os demônios usam",
    title: "“Artimanhas”, do Guia de Pesquisa",
    body: `
      <p>Efésios 6:11 fala das “artimanhas do Diabo”, ou seja, planos para enganar. O Guia de Pesquisa indica para
      esse versículo, entre outros, “Oponha-se ao Diabo e às suas artimanhas” (livro <i>Continue a Amar a
      Deus</i>, cap. 16) e “Jovens, fiquem firmes contra o Diabo” (w18.05 p. 27-31).</p>`
  },

  a3: {
    cat: "insight", para: "§2",
    quote: "outras duas táticas",
    title: "O artigo é a segunda parte",
    body: `
      <p>O estudo anterior, “Não seja enganado por Satanás: Continue confiando em Jeová e Jesus”, mostrou a
      primeira tática: enfraquecer a confiança em Jeová e em Jesus. Este mostra mais duas:</p>
      <ol><li>destruir a nossa união; <em>§3 a §8</em></li>
      <li>usar a oposição para nos distrair ou assustar. <em>§9 a §15</em></li></ol>`
  },

  /* ------------------------------ §3 a §8 ------------------------------ */

  a4: {
    cat: "chave", para: "§3",
    quote: "lutemos uns contra os outros em vez de lutar contra ele",
    title: "A estratégia mais antiga: dividir",
    body: `
      <p>Um exército que briga entre si não precisa de inimigo. Satanás quer que a gente critique, desconfie e até
      odeie os irmãos, como as pessoas do mundo fazem umas com as outras.</p>
      <p class="srcline"><span class="scr" data-ref="45:16:17">Romanos 16:17</span></p>`
  },

  a5: {
    cat: "insight", para: "§4",
    quote: "Saul ficou com muito ciúme",
    title: "O que despertou o ciúme",
    body: `
      <p>Saul colocou Davi como chefe dos guerreiros, e isso agradou a todos (1 Sam. 18:5). O problema começou com
      uma música: “Saul matou milhares, e Davi dezenas de milhares.” E “daquele dia em diante Saul sempre olhava
      com desconfiança para Davi”.</p>
      <p>O ciúme começa pequeno, com uma comparação.</p>
      <p class="srcline"><span class="scr" data-ref="9:18:7-9">1 Samuel 18:7-9</span></p>`
  },

  a6: {
    cat: "jeova", para: "§4",
    quote: "Davi já tinha sido ungido",
    title: "Por que Satanás gostava daquele ciúme",
    body: `
      <p>Davi tinha sido escolhido por Jeová para ser o próximo rei. Se Saul matasse Davi, o que Jeová tinha falado
      não se cumpriria. Por trás do ciúme de um homem havia um ataque ao propósito de Jeová.</p>
      <p class="srcline"><span class="scr" data-ref="9:16:13">1 Samuel 16:13</span></p>`
  },

  a7: {
    cat: "chave", para: "§5",
    quote: "quando sentimos ciúme de alguém, é muito difícil mostrar amor",
    title: "Ciúme e amor não cabem juntos",
    body: `
      <p>Tiago chama o ciúme e a rivalidade de sabedoria “terrena, animal, demoníaca”. E diz que onde há ciúme
      “haverá também desordem e todo tipo de coisa ruim”.</p>
      <p class="srcline"><span class="scr" data-ref="59:3:14-16">Tiago 3:14-16</span></p>`
  },

  a8: {
    cat: "hoje", para: "§5",
    quote: "Ele quer que tenhamos ciúme dos irmãos",
    title: "Onde o ciúme aparece na congregação",
    body: `
      <ul>
        <li>Quando outro irmão recebe uma designação que a gente esperava receber.</li>
        <li>Quando a assistência elogia o comentário ou o discurso de alguém.</li>
        <li><b>Para quem já tem idade.</b> Quando um irmão mais jovem passa a fazer o que antes era nossa
        responsabilidade.</li>
      </ul>`
  },

  a9: {
    cat: "chave", para: "§6",
    quote: "Jonatã se tornou amigo de Davi",
    title: "Jonatã tinha mais motivo para ciúme do que Saul",
    body: `
      <p>Jonatã era o filho do rei, o herdeiro natural do trono. Mesmo assim disse a Davi: “Você será o rei de
      Israel, e eu serei o segundo depois de você.”</p>
      <p>E 1 Samuel 23:16 conta que ele ajudou Davi <b>“a encontrar forças em Jeová”</b>. Não em si mesmo, mas em
      Jeová.</p>
      <p class="srcline"><span class="scr" data-ref="9:23:16-17">1 Samuel 23:16, 17</span></p>`
  },

  a10: {
    cat: "pesquisa", para: "§6",
    quote: "Ele foi humilde, percebeu qual era a vontade de Jeová",
    title: "Do Guia de Pesquisa: “Uma grande amizade”",
    body: `
      <p>Para 1 Samuel 18:9 e 23:16, 17, o Guia de Pesquisa indica o artigo “Uma grande amizade”, da série
      <i>Imite a Sua Fé</i> (ijwia artigo 3, §§ 10 e 19-21), e “Felizes são os humildes” (w93 1/12 p. 24 § 19).</p>`
  },

  a11: {
    cat: "chave", para: "§7",
    quote: "resolva logo essa situação",
    title: "Antes de o sol se pôr",
    body: `
      <p>Efésios 4:26, 27: “não deixem que o sol se ponha enquanto ainda estiverem irados; não deem chance ao
      Diabo”.</p>
      <p>O Perspicaz (“Ira”), indicado no Guia de Pesquisa, explica: ficar irado às vezes acontece, mas nutrir a ira
      dá oportunidade a que o Diabo se aproveite. E, entre irmãos, a pessoa deve dar os passos para fazer as
      pazes.</p>
      <p class="srcline"><span class="scr" data-ref="49:4:25-27">Efésios 4:25-27</span></p>`
  },

  a12: {
    cat: "insight", para: "§7",
    quote: "assim como todas as partes do corpo são importantes",
    title: "Diferentes, mas um só corpo",
    body: `
      <p>Satanás quer que a gente ache que opiniões, personalidades e culturas diferentes impedem a união. Paulo
      usa a figura do corpo: muitos membros, um só corpo. A mão não é igual ao pé, e os dois são necessários.</p>
      <p class="srcline"><span class="scr" data-ref="46:12:12">1 Coríntios 12:12</span>;
      <span class="scr" data-ref="60:5:8-9">1 Pedro 5:8, 9</span></p>`
  },

  a13: {
    cat: "hoje", para: "§8",
    quote: "suportar e perdoar uns aos outros liberalmente",
    title: "A planta sem flor",
    body: `
      <p>Na mesma edição da Sentinela, o artigo “Um pedido feito com base no amor” (indicado no Guia de Pesquisa
      para Colossenses 3:13) dá uma comparação boa: quando uma planta está sem flor, a gente continua cuidando dela
      porque lembra como ela fica bonita florida. Do mesmo modo, quando um irmão nos decepciona, lembrar das
      qualidades dele ajuda a perdoar.</p>
      <p class="srcline"><span class="scr" data-ref="51:3:12-14">Colossenses 3:12-14</span>;
      <span class="scr" data-ref="21:7:20">Eclesiastes 7:20</span></p>`
  },

  /* ------------------------------ §9 a §15 ------------------------------ */

  a14: {
    cat: "chave", para: "§9",
    quote: "deixar de lado o trabalho mais importante",
    title: "O objetivo da perseguição é tirar o foco",
    body: `
      <p>Satanás não ganha só quando alguém deixa a verdade. Ele também ganha quando gastamos tempo e energia
      tentando corrigir injustiças, conseguir justiça ou nos vingar, e deixamos a pregação de lado.</p>
      <p class="srcline"><span class="scr" data-ref="55:3:12">2 Timóteo 3:12</span>;
      <span class="scr" data-ref="45:12:19-21">Romanos 12:19-21</span></p>`
  },

  a15: {
    cat: "insight", para: "§10",
    quote: "Pense no exemplo de Isaque",
    title: "Os nomes dos poços contam a história",
    body: `
      <p>Isaque deu nomes aos poços. Ao primeiro que os pastores de Gerar disputaram, deu o nome de <b>Eseque</b>,
      “porque haviam discutido”. Houve outra disputa no seguinte, Sitna. No terceiro ninguém brigou, e ele chamou
      de <b>Reobote</b>, dizendo: “Agora Jeová nos deu amplo espaço.”</p>
      <p>O Perspicaz (“Reobote”, indicado no Guia de Pesquisa) explica que o nome quer dizer “Lugares Amplos”: ali
      ele podia ser produtivo sem interferir ou sofrer interferência de outros.</p>
      <p class="srcline"><span class="scr" data-ref="1:26:19-22">Gênesis 26:19-22</span></p>`
  },

  a16: {
    cat: "jeova", para: "§10",
    quote: "Jeová o abençoou",
    title: "Naquela mesma noite",
    body: `
      <p>Depois que Isaque escolheu a paz, Jeová apareceu a ele naquela noite: “Não tenha medo, pois estou com
      você, e vou abençoá-lo.”</p>
      <p class="srcline"><span class="scr" data-ref="1:26:24-25">Gênesis 26:24, 25</span></p>`
  },

  a17: {
    cat: "pesquisa", para: "§11",
    quote: "alguns dos seus parentes achavam que ele tinha perdido o juízo",
    title: "Do Guia de Pesquisa: Marcos 3:21",
    body: `
      <p>A Sentinela de fevereiro de 2026 (“Como podemos ajudar nossos parentes descrentes?”) explica que Jesus
      estava tão ocupado pregando e curando que não tinha tempo nem para comer (Mar. 3:20). Os parentes talvez
      achassem que ele era fanático. Nossos parentes também podem achar que gastamos tempo demais com a religião.
      O melhor é mostrar por ações que somos equilibrados.</p>
      <p>A mesma Sentinela lembra que pelo menos dois irmãos de Jesus, Tiago e Judas, se tornaram cristãos depois.</p>
      <p class="srcline"><span class="scr" data-ref="41:3:21">Marcos 3:21</span></p>`
  },

  a18: {
    cat: "insight", para: "§11",
    quote: "curou a orelha do homem",
    title: "Curou quem vinha prendê-lo",
    body: `
      <p>Jesus disse a Pedro: “Basta!” E curou a orelha do escravo do sumo sacerdote, que estava ali para
      prendê-lo. Nem naquele momento ele aceitou a violência.</p>
      <p class="srcline"><span class="scr" data-ref="42:22:50-51">Lucas 22:50, 51</span></p>`
  },

  a19: {
    cat: "chave", para: "§12",
    quote: "devemos amar até mesmo as pessoas que nos perseguem",
    title: "Amar e orar",
    body: `
      <p>Jesus disse: “Continuem a amar os seus inimigos e a orar pelos que perseguem vocês.”</p>
      <p>A Sentinela de novembro de 2024 (“Como lidar com injustiças?”, no Guia de Pesquisa) acrescenta: quando oramos
      por quem nos maltrata, diminuímos o ressentimento e a raiva, e até mudamos o ponto de vista sobre a pessoa.
      Um irmão contou: “Eu orei várias vezes pelo irmão que tinha me ofendido. Por causa dessas orações, Jeová me
      ajudou a perdoar.”</p>
      <p class="srcline"><span class="scr" data-ref="40:5:43-44">Mateus 5:43, 44</span></p>`
  },

  a20: {
    cat: "chave", para: "§13",
    quote: "um cristão nunca faria isso!",
    title: "Protestar é o que o mundo faz",
    body: `
      <p>O artigo diz que Satanás talvez não esteja por trás de toda decisão injusta dos governos, mas gostaria que
      nós criticássemos os governos ou ficássemos contra eles. A imagem mostra um irmão de moto sendo chamado a se
      juntar a um protesto.</p>
      <p class="srcline"><span class="scr" data-ref="45:13:1-2">Romanos 13:1, 2</span>;
      <span class="scr" data-ref="20:24:21-22">Provérbios 24:21, 22</span></p>`
  },

  a21: {
    cat: "pesquisa", para: "§13",
    quote: "Porque Jeová nos pede para fazer isso",
    title: "Do Guia de Pesquisa: Romanos 13:1",
    body: `
      <p>A Sentinela de outubro de 2023 (“Você está pronto para obedecer?”) conta que, na Nigéria, soldados entraram
      num Salão do Reino procurando pessoas que protestavam contra impostos. O oficial mandou os soldados saírem e
      disse: <b>“As Testemunhas de Jeová não participam de protestos; elas sempre pagam os impostos.”</b></p>
      <p>E a irmã Joana, que achava difícil obedecer porque a família tinha sofrido injustiças, parou de ler
      postagens contra as autoridades, orou e leu sobre neutralidade. Hoje diz que se sente muito mais calma e em
      paz.</p>`
  },

  a22: {
    cat: "chave", para: "§14",
    quote: "Algumas pessoas que antes eram opositoras",
    title: "O opositor de hoje pode ser o irmão de amanhã",
    body: `
      <p>Paulo mesmo escreveu: “antes eu fosse blasfemador, perseguidor e insolente. Contudo me foi concedida
      misericórdia.”</p>
      <p class="srcline"><span class="scr" data-ref="54:1:12-13">1 Timóteo 1:12, 13</span>;
      <span class="scr" data-ref="54:2:1-2">2:1, 2</span></p>`
  },

  a23: {
    cat: "hoje", para: "§14",
    quote: "O segredo é ter paciência, paciência e mais paciência.",
    title: "Palavras de quem já foi opositora",
    body: `
      <p>Quem disse isso foi uma irmã que, por muitos anos, foi contra o marido ser Testemunha de Jeová.</p>
      <ul>
        <li>A esposa que continua bondosa com o marido que reclama do tempo dela na reunião.</li>
        <li><b>Para quem já tem idade.</b> Quem ora há décadas por um filho ou irmão que se opõe, e não desiste.</li>
      </ul>`
  },

  a24: {
    cat: "pesquisa", para: "§15",
    quote: "Tentar resolver as injustiças que existem hoje",
    title: "Do Guia de Pesquisa: Eclesiastes 1:15",
    body: `
      <p>“O que é torto não pode ser endireitado.” Os Destaques de Eclesiastes (w06 1/11 p. 14) comentam: é inútil
      gastar tempo e energia tentando corrigir a opressão e a injustiça que vemos hoje. Somente o Reino de Deus pode
      acabar com a maldade.</p>
      <p class="srcline"><span class="scr" data-ref="21:1:15">Eclesiastes 1:15</span>;
      <span class="scr" data-ref="62:3:8">1 João 3:8</span></p>`
  },

  /* ------------------------------ §16 e §17 ------------------------------ */

  a25: {
    cat: "chave", para: "§16",
    quote: "o segredo para isso é a fé",
    title: "O grande escudo",
    body: `
      <p>Efésios 6:16 compara a fé ao “grande escudo”, com o qual se apagam “todas as flechas ardentes do Maligno”.
      E Tiago 4:7 promete: “oponham-se ao Diabo, e ele fugirá de vocês”.</p>
      <p class="srcline"><span class="scr" data-ref="49:6:16">Efésios 6:16</span>;
      <span class="scr" data-ref="59:4:7">Tiago 4:7</span></p>`
  },

  a26: {
    cat: "jeova", para: "§17",
    quote: "Jeová e Jesus prometeram que vão continuar do nosso lado",
    title: "Não lutamos sozinhos",
    body: `
      <p>De um lado, Jeová e Jesus. Do outro, os irmãos lutando junto. O artigo termina mostrando que estamos
      cercados de aliados.</p>
      <p class="srcline"><span class="scr" data-ref="42:6:27-28">Lucas 6:27, 28</span></p>`
  }
};
