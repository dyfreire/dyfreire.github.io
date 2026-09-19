/* ==========================================================================
   Anotações do estudo de A Sentinela, "Encontre consolo no livro de Isaías"
   (edição de estudo de julho de 2026, semana de 14-20 de setembro de 2026).
   cat: chave | insight | hoje | jeova | pesquisa | pergunta
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que o parágrafo está realmente ensinando" },
  insight:  { label: "Insight",      desc: "O que está por trás do texto e passa batido" },
  hoje:     { label: "Hoje",         desc: "Exemplos do dia a dia, explicados" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o artigo revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Dado do artigo, da Bíblia ou das experiências" },
  pergunta: { label: "Participação", desc: "Pergunta pronta para dirigir à assistência" }
};

/* O artigo tem uma base e três situações. A quinta etapa é o que fazer com isso. */
window.DIRECTION = [
  { n: 1, title: "Jeová consola como mãe",
    line: "A Bíblia é o meio que ele usa para nos consolar, e o amor dele é maior que o de qualquer mãe.",
    paras: "§1 a §3" },
  { n: 2, title: "Quando a vida muda de repente",
    line: "Ele não tira o caminho difícil, ele pega na nossa mão e guia dentro dele.",
    paras: "§4 a §6" },
  { n: 3, title: "Quando a culpa esmaga",
    line: "Quando Jeová perdoa, a mancha sai por completo e ele não usa mais aquilo contra nós.",
    paras: "§7 a §11" },
  { n: 4, title: "Quando perdemos alguém",
    line: "A morte vai acabar, e quem morreu está guardado na memória dele até ser acordado.",
    paras: "§12 a §15" },
  { n: 5, title: "Escolha o seu texto e guarde",
    line: "Ter um versículo à mão antes da dificuldade chegar é o que o artigo pede no fim.",
    paras: "§16" }
];

window.STEP_BY_PARA = {
  "§1": 1, "§2": 1, "§3": 1,
  "§4": 2, "§5": 2, "§6": 2,
  "§7": 3, "§8": 3, "§9": 3, "§10": 3, "§11": 3,
  "§12": 4, "§13": 4, "§14": 4, "§15": 4,
  "§16": 5
};

window.NOTES = {

  /* ------------------------------ §1 e §2 ------------------------------ */

  a1: {
    cat: "chave", para: "§1",
    quote: "o que uma mãe amorosa faz",
    title: "A comparação que abre o estudo",
    body: `
      <p>O artigo começa com uma cena de criança chorando, e pergunta o que uma mãe faz. A resposta
      tem três partes: ela abraça, ela escuta com atenção, e ela garante que ama.</p>
      <h4>Por que isso importa</h4>
      <p>Essas três coisas são o que Jeová faz com a gente. Vale ler devagar, porque o resto do
      estudo é a explicação dessa cena.</p>`
  },

  a2: {
    cat: "jeova", para: "§2",
    quote: "maior do que o amor que qualquer pai ou mãe pode ter",
    title: "Ele mesmo escolheu essa comparação",
    body: `
      <p>Não somos nós que comparamos Jeová a uma mãe. É ele que se descreve assim
      (<span class="scr" data-ref="23:66:13">Isaías 66:13</span>).</p>
      <p>E <span class="scr" data-ref="23:49:15">Isaías 49:15</span> vai além: uma mãe pode até
      esquecer o filho, mas ele não esquece.</p>
      <h4>Para dizer à assistência</h4>
      <p>Quem já foi consolado por uma mãe sabe o que é. Jeová usou justamente a imagem mais forte de
      consolo que existe entre pessoas, e disse que a dele é maior.</p>`
  },

  a3: {
    cat: "pesquisa", para: "§2",
    quote: "Por meio de sua Palavra, a Bíblia",
    title: "O meio que ele usa",
    body: `
      <p><span class="scr" data-ref="45:15:4">Romanos 15:4</span> diz que as coisas escritas antes
      foram escritas para nosso ensino, para que tivéssemos consolo e esperança.</p>
      <p>Ou seja, o consolo de Jeová não é um sentimento vago. Ele está escrito, e a gente pode abrir
      e ler quando precisar.</p>`
  },

  /* ------------------------------ §3 ------------------------------ */

  a4: {
    cat: "chave", para: "§3",
    quote: "vamos ver alguns versículos do livro de Isaías",
    title: "As três situações do estudo",
    body: `
      <p>O artigo avisa desde o começo quais são: <b>(1)</b> mudanças inesperadas, <b>(2)</b> o peso
      da culpa, <b>(3)</b> a perda de alguém que amamos.</p>
      <p>Guarde essas três. Elas organizam tudo o que vem depois, e servem para você saber em qual
      parte cada irmão da assistência vai se reconhecer.</p>`
  },

  a5: {
    cat: "insight", para: "§3",
    quote: "para consolar seu povo em Judá",
    title: "Isaías foi escrito para gente em apuro",
    body: `
      <p>O livro não foi escrito em tempo de calmaria. Jeová mandou escrevê-lo para consolar o povo
      dele num período bem difícil (<span class="scr" data-ref="23:40:1">Isaías 40:1</span>).</p>
      <p>E o artigo liga isso com hoje: vivemos em “tempos críticos, difíceis de suportar”
      (<span class="scr" data-ref="55:3:1">2 Timóteo 3:1</span>). O consolo foi escrito para uma
      situação parecida com a nossa.</p>`
  },

  /* ------------------------------ §4 ------------------------------ */

  a6: {
    cat: "chave", para: "§4",
    quote: "Nossa vida pode mudar de repente",
    title: "Mudança inesperada é assunto de todo mundo",
    body: `
      <p>O artigo lista: saúde, dinheiro, conflito no país, mudança de designação. E diz o efeito:
      ansiedade e confusão, com a pergunta “o que eu vou fazer agora?”</p>
      <p>A base bíblica é <span class="scr" data-ref="21:9:11">Eclesiastes 9:11</span>: tempo e
      imprevisto acontecem com todos.</p>`
  },

  a7: {
    cat: "hoje", para: "§4",
    quote: "Essas coisas podem nos deixar ansiosos e confusos",
    title: "Como a mudança inesperada chega hoje",
    body: `
      <ul>
        <li><b>O resultado de um exame.</b> A pessoa entra no consultório com uma vida e sai com
        outra, e ainda tem que contar para a família.</li>
        <li><b>A demissão de uma hora para outra.</b> As contas do mês continuam iguais.</li>
        <li><b>Para quem já tem idade:</b> parar de dirigir, precisar morar com um filho, ou mudar de
        congregação por causa da saúde. Tudo isso desmonta a rotina de anos.</li>
        <li><b>Uma mudança na designação</b>, como aconteceu com o irmão do artigo, que saiu de Betel
        depois de 17 anos.</li>
      </ul>
      <h4>Ao conduzir</h4>
      <p>Não precisa de exemplo dramático. O da vida real já basta, e a assistência se reconhece mais
      nele.</p>`
  },

  a8: {
    cat: "pesquisa", para: "§4",
    quote: "Eu me senti perdido",
    title: "A experiência do irmão que saiu de Betel",
    body: `
      <p>Ele passou cerca de 17 anos em Betel e foi designado para servir como pioneiro. Nas palavras
      dele: sentiu-se perdido, achou um desafio muito grande começar vida nova, e não sabia nem por
      onde começar.</p>
      <h4>Por que essa frase ajuda</h4>
      <p>É um irmão fiel, com anos de serviço de tempo integral, dizendo que se sentiu perdido. Quem
      está desanimado na assistência entende que não é falta de fé se sentir assim.</p>`
  },

  /* ------------------------------ §5 ------------------------------ */

  a9: {
    cat: "chave", para: "§5",
    quote: "guiar aqueles que estão andando como cegos",
    title: "As quatro expressões de Isaías 42:16",
    body: `
      <p>O artigo destaca quatro: <b>cegos</b>, <b>caminho que não conhecem</b>, <b>escuridão</b> e
      <b>terreno acidentado</b> (<span class="scr" data-ref="23:42:16">Isaías 42:16</span>).</p>
      <p>Cada uma descreve um jeito de a gente ver o futuro quando a vida vira de cabeça para baixo:
      sem enxergar, sem conhecer o caminho, sem luz e sem chão firme.</p>`
  },

  a10: {
    cat: "insight", para: "§5",
    quote: "vai pegar na nossa mão e nos guiar",
    title: "Ele não promete tirar o caminho, promete andar nele com você",
    body: `
      <p>Repare no que o versículo promete: guiar, iluminar onde a gente pisa, aplainar o caminho. E
      repare no que ele não promete: que o caminho vai deixar de existir.</p>
      <h4>Por que isso consola de verdade</h4>
      <p>Quem espera que a dificuldade suma acaba achando que Jeová falhou. Quem entende a promessa
      do jeito que ela está escrita enxerga a ajuda dele acontecendo no meio da dificuldade.</p>`
  },

  a11: {
    cat: "hoje", para: "§5",
    quote: "sem saber o que vem pela frente",
    title: "Onde essa luz aparece na prática",
    body: `
      <ul>
        <li><b>Um texto que você lê no dia certo</b>, na leitura diária, e que responde exatamente o
        que estava apertando.</li>
        <li><b>Uma parte da reunião</b> que parece ter sido feita para a sua semana.</li>
        <li><b>Um irmão que liga sem saber de nada</b> e pergunta como você está.</li>
        <li><b>Uma porta que abre</b> depois de uma decisão difícil: um trabalho, uma casa, um médico
        que aceita tratar do jeito certo.</li>
      </ul>
      <p>O jeito de Jeová guiar quase sempre é assim: um passo de cada vez, e não o mapa inteiro de
      uma vez (<span class="scr" data-ref="19:119:105">Salmo 119:105</span>;
      <span class="scr" data-ref="23:30:21">Isaías 30:21</span>).</p>`
  },

  /* ------------------------------ §6 ------------------------------ */

  a12: {
    cat: "jeova", para: "§6",
    quote: "ele nos ajudou por meio de nossos queridos irmãos",
    title: "Como o apoio dele chegou, segundo o casal",
    body: `
      <p>Eles apontam duas formas concretas: por meio dos irmãos e irmãs, e recebendo o que
      precisavam em sentido material e emocional. E dizem que ele continua fazendo isso até hoje.</p>
      <p>A garantia por trás está em <span class="scr" data-ref="23:54:10">Isaías 54:10</span>: as
      montanhas podem sair do lugar, mas a lealdade dele não sai.</p>`
  },

  a13: {
    cat: "hoje", para: "§6",
    quote: "por meio de nossos queridos irmãos e irmãs",
    title: "Alguém vai ser a resposta da oração de outro",
    body: `
      <p>Repare que o socorro veio por meio de pessoas. Isso quer dizer que, quando um irmão da
      congregação está passando por uma mudança difícil, alguém vai ser o meio que Jeová usa.</p>
      <h4>Pode ser você, fazendo coisas simples</h4>
      <ul>
        <li>Convidar para almoçar no domingo, sem precisar de ocasião.</li>
        <li>Ajudar na mudança, no transporte, numa conta que apertou.</li>
        <li>Telefonar e perguntar como está, e depois telefonar de novo na semana seguinte.</li>
      </ul>
      <p>Para quem não tem mais saúde para ajudar com esforço físico, a ligação e a hospitalidade
      continuam valendo, e às vezes valem mais.</p>`
  },

  /* ------------------------------ §7 ------------------------------ */

  a14: {
    cat: "chave", para: "§7",
    quote: "pode ser que continuemos lutando contra sentimentos de culpa",
    title: "O problema tratado aqui é depois do perdão",
    body: `
      <p>O parágrafo não fala de quem escondeu um pecado. Fala de quem já confessou, recebeu ajuda
      dos anciãos, foi perdoado por Jeová, e mesmo assim continua se sentindo culpado
      (<span class="scr" data-ref="20:28:13">Provérbios 28:13</span>;
      <span class="scr" data-ref="62:1:9">1 João 1:9</span>).</p>
      <p>O pensamento que o artigo cita é este: “é impossível Jeová ter me perdoado pelo que eu
      fiz”.</p>`
  },

  a15: {
    cat: "pesquisa", para: "§7",
    quote: "Não há paz nos meus ossos",
    title: "Davi descreveu esse peso no corpo",
    body: `
      <p><span class="scr" data-ref="19:38:3">Salmo 38:3</span> e
      <span class="scr" data-ref="19:38:8">38:8</span>: ele fala de não ter paz nos ossos, de estar
      entorpecido e completamente esmagado.</p>
      <p>É a descrição de alguém adoecido pela culpa. Serve para mostrar à assistência que esse
      sofrimento é conhecido e está na Bíblia, não é fraqueza de agora.</p>`
  },

  a16: {
    cat: "hoje", para: "§7",
    quote: "esmagados pelo peso da culpa",
    title: "Quem na congregação carrega isso",
    body: `
      <ul>
        <li><b>Quem foi readmitido</b> e ainda se sente olhado, mesmo sem ninguém estar olhando.</li>
        <li><b>Quem errou há muitos anos</b>, resolveu tudo na época, e continua evitando privilégios
        por achar que não merece.</li>
        <li><b>Um pai ou uma mãe</b> que se culpa pelo caminho que um filho tomou.</li>
        <li><b>Quem tem idade avançada</b> e fica revendo a vida inteira à noite, lembrando do que
        fez errado na juventude.</li>
      </ul>
      <p>Essas pessoas estão sentadas na reunião. O estudo é para elas.</p>`
  },

  /* ------------------------------ §8 e §9 ------------------------------ */

  a17: {
    cat: "chave", para: "§8",
    quote: "brancos como a neve",
    title: "A comparação da mancha",
    body: `
      <p><span class="scr" data-ref="23:1:18">Isaías 1:18</span>: mesmo que os pecados sejam como
      escarlate, ficarão brancos como a neve.</p>
      <p>O artigo explica por que o exemplo é forte: escarlate é um vermelho bem vivo, e é muito
      difícil tirar essa mancha de uma roupa. Ainda assim, Jeová garante que ela sai, e sai para
      sempre.</p>`
  },

  a18: {
    cat: "insight", para: "§8",
    quote: "a mancha dos nossos pecados é removida para sempre",
    title: "Não é disfarçar a mancha, é tirar",
    body: `
      <p>Há diferença entre cobrir uma mancha e removê-la. O versículo fala da roupa ficando branca,
      não da mancha ficando escondida.</p>
      <p>Quem carrega culpa costuma achar que Jeová apenas faz vista grossa, e que a mancha continua
      lá. A comparação diz o contrário.</p>`
  },

  a19: {
    cat: "pesquisa", para: "§9",
    quote: "Jeová o perdoou e depois disse que ele era um homem íntegro",
    title: "O caso de Davi, que o artigo usa como prova",
    body: `
      <p>Davi cometeu adultério e assassinato
      (<span class="scr" data-ref="10:11:3-4">2 Samuel 11:3, 4</span>,
      <span class="scr" data-ref="10:11:14-15">14, 15</span>). Foi perdoado
      (<span class="scr" data-ref="10:12:13">2 Samuel 12:13</span>).</p>
      <p>Anos depois, Jeová se referiu a ele como alguém que andou com integridade de coração
      (<span class="scr" data-ref="11:9:4-5">1 Reis 9:4, 5</span>).</p>
      <h4>O ponto</h4>
      <p>Quando Jeová pensava em Davi, ele lembrava da fidelidade dele, não dos pecados. É esse o
      argumento mais forte do bloco.</p>`
  },

  /* ------------------------------ §10 ------------------------------ */

  a20: {
    cat: "chave", para: "§10",
    quote: "lançaste todos os meus pecados atrás de ti",
    title: "A imagem de Isaías 38:17",
    body: `
      <p><span class="scr" data-ref="23:38:17">Isaías 38:17</span>. A nota da Bíblia de Estudo traz
      outra forma: “removeste todos os meus pecados da tua vista”.</p>
      <p>A cena é Jeová pegando os pecados de quem se arrependeu e jogando atrás dele, onde ele não
      vê nem pensa mais neles.</p>`
  },

  a21: {
    cat: "insight", para: "§10",
    quote: "como que se não tivessem acontecido",
    title: "A tradução que o artigo cita",
    body: `
      <p>Segundo uma obra de referência citada no artigo, o texto pode ser vertido assim: “Fizeste
      como que se [meus pecados] não tivessem acontecido.”</p>
      <p>Essa é a frase para repetir devagar na consideração. Ela responde exatamente o pensamento do
      parágrafo 7.</p>`
  },

  a22: {
    cat: "jeova", para: "§10",
    quote: "Não me lembrarei dos seus pecados",
    title: "Ele promete não usar aquilo de novo",
    body: `
      <p><span class="scr" data-ref="23:43:25">Isaías 43:25</span>. Não quer dizer que Jeová fique
      sem memória, e sim que ele decide não trazer aquilo de volta para acusar ou punir outra vez.</p>
      <h4>Diferença que vale explicar</h4>
      <p>Entre pessoas, é comum alguém perdoar e depois usar o assunto numa discussão. Jeová
      não faz isso. É esse o consolo do parágrafo.</p>`
  },

  /* ------------------------------ §11 ------------------------------ */

  a23: {
    cat: "jeova", para: "§11",
    quote: "ele não se concentra em quem fomos no passado",
    title: "Onde os olhos dele estão",
    body: `
      <p>O artigo diz que Jeová olha para quem somos hoje e para o tipo de pessoa que estamos nos
      esforçando para ser (<span class="scr" data-ref="23:55:7">Isaías 55:7</span>).</p>
      <p>E acrescenta que ele não fica ressentido para sempre
      (<span class="scr" data-ref="23:57:16">Isaías 57:16</span>), como acontece entre pessoas
      imperfeitas.</p>`
  },

  a24: {
    cat: "chave", para: "§11",
    quote: "nunca devemos permitir que os nossos erros do passado destruam a felicidade",
    title: "A frase em destaque do artigo",
    body: `
      <p>Está no quadro em destaque, então é ponto que o artigo quer que fique. A culpa antiga rouba
      duas coisas: a alegria de agora e as bênçãos que Jeová ainda quer dar.</p>
      <h4>Como usar</h4>
      <p>Leia essa frase em voz alta e deixe um instante de silêncio antes de seguir. Para alguém na
      sala ela é a razão de estar ali naquele dia.</p>`
  },

  a25: {
    cat: "hoje", para: "§11",
    quote: "nos impeçam de receber as bênçãos",
    title: "O que a culpa antiga costuma travar",
    body: `
      <ul>
        <li><b>Não se oferecer para nada</b> na congregação, achando que não tem direito.</li>
        <li><b>Não comentar nas reuniões</b>, com medo do que os outros pensam.</li>
        <li><b>Recusar uma ajuda</b> ou um convite, por achar que não merece.</li>
      </ul>
      <p>A imagem do artigo mostra exatamente a saída: o irmão que estava triste pelo erro aparece
      depois feliz, comentando na Escola do Serviço de Pioneiro.</p>`
  },

  /* ------------------------------ §12 ------------------------------ */

  a26: {
    cat: "chave", para: "§12",
    quote: "a dor que sentimos pode ser insuportável e durar um bom tempo",
    title: "O artigo não minimiza o luto",
    body: `
      <p>Ele reconhece três coisas: a dor pode ser insuportável, pode durar muito, e pode vir com a
      pergunta “por que Jeová permitiu isso?”.</p>
      <p>Isso importa. Um irmão que está de luto precisa ouvir que essa reação é compreensível antes
      de ouvir a esperança.</p>`
  },

  a27: {
    cat: "pesquisa", para: "§12",
    quote: "com raiva de Jeová",
    title: "A experiência do irmão que perdeu os pais",
    body: `
      <p>Ele perdeu o pai e a mãe num incêndio. Nas palavras dele: ficou arrasado e com raiva de
      Jeová por ele ter permitido, mesmo sabendo que Jeová não tinha causado aquilo.</p>
      <h4>Por que o artigo publica isso</h4>
      <p>Porque muita gente sente e não fala, achando que é errado sentir. Ver isso impresso numa
      Sentinela alivia.</p>`
  },

  a28: {
    cat: "hoje", para: "§12",
    quote: "Talvez você também se sinta assim",
    title: "Como falar com quem está de luto",
    body: `
      <ul>
        <li><b>Não comece explicando.</b> Comece perguntando e ouvindo, como a mãe do parágrafo 1
        faz.</li>
        <li><b>Não tenha medo de citar o nome de quem morreu.</b> Quem ficou gosta de ouvir aquele
        nome.</li>
        <li><b>Volte depois.</b> Nas primeiras semanas todo mundo aparece. A solidão costuma chegar
        no segundo e no terceiro mês.</li>
        <li><b>Leve a esperança sem pressa.</b> A ressurreição consola de verdade, mas depois que a
        pessoa se sentiu ouvida (<span class="scr" data-ref="60:5:7">1 Pedro 5:7</span>).</li>
      </ul>`
  },

  /* ------------------------------ §13 ------------------------------ */

  a29: {
    cat: "chave", para: "§13",
    quote: "acabar com a morte para sempre",
    title: "A promessa de Isaías 25:8",
    body: `
      <p><span class="scr" data-ref="23:25:8">Isaías 25:8</span>, com o complemento de
      <span class="scr" data-ref="66:21:4">Apocalipse 21:4</span>: nem luto, nem dor, nem morte.</p>
      <p>O artigo insiste num ponto: isso não é sonho, é promessa do único que pode cumprir. E
      <span class="scr" data-ref="66:21:5">Apocalipse 21:5</span> chama essas palavras de fiéis e
      verdadeiras.</p>`
  },

  a30: {
    cat: "hoje", para: "§13",
    quote: "olhar para um túmulo com o nome de alguém que você ama",
    title: "A cena que o artigo escolheu",
    body: `
      <p>Repare que o artigo não fala de morte em termos gerais. Ele fala do túmulo com um nome
      escrito, que é a imagem concreta da perda.</p>
      <h4>Para a consideração</h4>
      <p>Muita gente na assistência já esteve em pé nesse lugar. Perguntar “como vai ser não precisar
      mais visitar aquele túmulo?” costuma render comentários de coração.</p>`
  },

  /* ------------------------------ §14 ------------------------------ */

  a31: {
    cat: "chave", para: "§14",
    quote: "os meus cadáveres se levantarão",
    title: "O detalhe do pronome",
    body: `
      <p><span class="scr" data-ref="23:26:19">Isaías 26:19</span> diz “os cadáveres do meu povo se
      levantarão”, e o artigo mostra que também pode ser traduzido como “os meus cadáveres se
      levantarão”.</p>
      <h4>Por que isso muda tudo</h4>
      <p>Jeová se considera responsável por essas pessoas. Elas são dele. Não estão perdidas, estão
      guardadas.</p>`
  },

  a32: {
    cat: "insight", para: "§14",
    quote: "Assim como o orvalho da manhã faz uma planta seca reviver",
    title: "A comparação do orvalho",
    body: `
      <p>A planta parece morta, mas com o orvalho ela volta. Jeová, a Fonte da vida, vai acordar as
      pessoas que amamos do sono da morte.</p>
      <p>O artigo manda ver também <span class="scr" data-ref="41:5:42">Marcos 5:42</span>: a menina
      se levantou e começou a andar. Ressurreição não é teoria, já aconteceu diante de testemunhas.</p>`
  },

  a33: {
    cat: "jeova", para: "§14",
    quote: "Elas estão guardadas na memória dele",
    title: "Guardadas, e no tempo que ele já determinou",
    body: `
      <p>Duas garantias no mesmo trecho: a memória dele guarda a pessoa inteira, e o tempo da
      ressurreição já está marcado por ele.</p>
      <p>Para quem perdeu alguém, essas duas frases valem mais que qualquer explicação sobre por que
      a morte aconteceu.</p>`
  },

  /* ------------------------------ §15 ------------------------------ */

  a34: {
    cat: "hoje", para: "§15",
    quote: "a promessa da ressurreição não acabe com a nossa dor",
    title: "Honestidade que ajuda quem está sofrendo",
    body: `
      <p>O artigo reconhece que a esperança não apaga a dor. O que ela faz é dar força para
      continuar, porque a separação tem prazo.</p>
      <h4>O que fazer com isso na prática</h4>
      <ul>
        <li>Concentrar-se em reencontrar a pessoa, e não em revisar o que aconteceu.</li>
        <li>Ler os relatos de ressurreição quando a saudade aperta.</li>
        <li>Falar com Jeová sobre a saudade, com todas as palavras
        (<span class="scr" data-ref="19:94:19">Salmo 94:19</span>).</li>
      </ul>`
  },

  /* ------------------------------ §16 ------------------------------ */

  a35: {
    cat: "pergunta", para: "§16",
    quote: "Tem algum texto que você acha especialmente consolador",
    title: "A pergunta que fecha, e o que ela pede",
    body: `
      <h4>Como dirigir</h4>
      <p>“Qual texto já consolou você numa hora difícil?” Deixe duas ou três pessoas responderem.
      Esse é o melhor momento da parte, porque cada resposta é experiência de verdade.</p>
      <h4>A tarefa que o artigo dá</h4>
      <p>Memorizar esse texto, ou escrever num papel e deixar num lugar que se vê sempre. Vale
      sugerir: na porta da geladeira, dentro da Bíblia, ou na tela do celular.</p>
      <h4>Por que fazer isso antes</h4>
      <p>Na hora do aperto, quase ninguém consegue procurar. Quem já deixou o texto à mão só precisa
      olhar.</p>`
  }
};
