/* ==========================================================================
   Anotações do estudo de livro: Ande Corajosamente com Deus, cap. 9,
   "Pela fé, Moisés foi escondido" (Sifrá, Puá, Anrão, Joquebede e Miriã).
   cat: chave | insight | hoje | jeova | pesquisa | pergunta
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que o parágrafo está realmente ensinando" },
  insight:  { label: "Insight",      desc: "O que está por trás do texto e passa batido" },
  hoje:     { label: "Hoje",         desc: "Exemplos do dia a dia, explicados" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o relato revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Dado das publicações citadas nas perguntas" },
  pergunta: { label: "Participação", desc: "Pergunta pronta para dirigir à assistência" }
};

window.DIRECTION = [
  { n: 1, title: "O poder que mandou matar",
    line: "Um governo inteiro decidiu eliminar as crianças de um povo, e ninguém podia recorrer.",
    paras: "§1" },
  { n: 2, title: "Duas mulheres disseram não",
    line: "As parteiras temiam a Deus mais do que ao Faraó, e por isso desobedeceram.",
    paras: "§2" },
  { n: 3, title: "Uma família agiu junto",
    line: "Pai, mãe e filha, cada um com a sua parte, esconderam e salvaram o bebê.",
    paras: "§3, §4" },
  { n: 4, title: "Jeová recompensou cada um",
    line: "Deu famílias às parteiras, guardou os nomes deles na Bíblia e protegeu Moisés.",
    paras: "§5" }
];

window.STEP_BY_PARA = {
  "§1": 1, "§2": 2, "§3": 3, "§4": 3, "§5": 4,
  "Para considerar": 2,
  "Analise 1": 1, "Analise 2": 3, "Analise 3": 2, "Analise 4": 4,
  "Medite 1": 3, "Medite 2": 3, "Medite 3": 2,
  "Quadro 1": 4, "Quadro 2": 4, "Quadro 3": 4
};

window.NOTES = {

  /* ------------------------------ §1 ------------------------------ */

  a1: {
    cat: "chave", para: "§1",
    quote: "Os egípcios não se lembravam mais dele",
    title: "Mais de 60 anos depois de José, tudo mudou",
    body: `
      <p>José tinha sido usado por Jeová para salvar o Egito da fome. Passados uns 60 anos da morte
      dele, o novo Faraó não devia nada a ninguém: odiava e temia os israelitas.</p>
      <h4>O que aprendemos com isso</h4>
      <p>Favor de governo não dura. O que um rei agradeceu, o seguinte esquece. A segurança do povo
      de Jeová nunca esteve na simpatia do governo, e não está até hoje.</p>`
  },

  a2: {
    cat: "insight", para: "§1",
    quote: "Eles continuavam crescendo em número porque tinham as bênçãos de Jeová",
    title: "Quanto mais apertavam, mais o povo crescia",
    body: `
      <p>Os egípcios escravizaram os hebreus e os trataram muito mal, e mesmo assim o capítulo diz
      que eles continuavam se multiplicando.</p>
      <h4>O ponto</h4>
      <p>A perseguição não conseguiu o que queria, porque quem estava abençoando era Jeová. É o
      mesmo padrão que vemos na história do nosso povo em países onde a obra foi proibida.</p>`
  },

  a3: {
    cat: "hoje", para: "§1",
    quote: "os egípcios tornaram os hebreus seus escravos e os tratavam muito mal",
    title: "Ser tratado mal só por ser diferente",
    body: `
      <ul>
        <li><b>No trabalho.</b> A pessoa é a única que não entra em certas conversas nem em certas
        brincadeiras, e por isso sobra para ela o pior horário e a pior tarefa.</li>
        <li><b>Na escola.</b> O filho fica de fora de festas e comemorações, e a turma percebe.</li>
        <li><b>Na família.</b> Um parente faz piada em toda reunião de família por causa da sua
        religião.</li>
      </ul>
      <p>Nada disso é novo. Foi assim no Egito, e ali também não conseguiram parar o povo de
      Jeová.</p>`
  },

  /* ------------------------------ §2 ------------------------------ */

  a4: {
    cat: "chave", para: "§2",
    quote: "Faraó planejou algo muito cruel",
    title: "A ordem, e para quem ela foi dada",
    body: `
      <p>O Faraó chamou duas parteiras hebreias, Sifrá e Puá, e mandou que matassem os meninos na
      hora do parto (<span class="scr" data-ref="2:1:15-16">Êxodo 1:15, 16</span>).</p>
      <h4>Repare no detalhe</h4>
      <p>A ordem foi dada justamente a quem tinha a profissão de fazer nascer. Era pedir para elas
      fazerem o contrário do trabalho de uma vida inteira.</p>`
  },

  a5: {
    cat: "jeova", para: "§2",
    quote: "temiam o verdadeiro Deus",
    title: "O que fez a diferença nelas",
    body: `
      <p>O capítulo dá o motivo da coragem delas em quatro palavras:
      <span class="scr" data-ref="2:1:17">Êxodo 1:17</span> diz que elas temiam o verdadeiro Deus, e
      por isso não fizeram o que o rei havia ordenado.</p>
      <h4>O que é esse temor</h4>
      <p>Não é medo de Deus no sentido de terror. É respeito profundo, que pesa mais do que o medo de
      um rei que podia mandar matar as duas.</p>`
  },

  a6: {
    cat: "insight", para: "§2",
    quote: "nenhum homem, por mais poderoso que fosse, tinha o direito de obrigá-las",
    title: "Quem ensinou esse limite a elas",
    body: `
      <p>A Lei escrita ainda não existia: ela só viria no Sinai, décadas depois. Mas elas não
      aprenderam isso do nada. O conhecimento sobre Jeová corria dentro das famílias hebreias, e a
      Bíblia mostra a corrente:</p>
      <ul>
        <li><b>A geração de José tinha morrido havia pouco</b>
        (<span class="scr" data-ref="2:1:6">Êxodo 1:6</span>). Quem era idoso naquele Egito tinha
        ouvido de gente que conviveu com ele.</li>
        <li><b>José deixou uma promessa e cobrou um juramento:</b> Deus voltaria a atenção para eles
        e os levaria à terra prometida a Abraão, Isaque e Jacó
        (<span class="scr" data-ref="1:50:24-25">Gênesis 50:24, 25</span>). O povo guardou esse
        juramento por gerações, e Moisés levou os ossos de José na saída
        (<span class="scr" data-ref="2:13:19">Êxodo 13:19</span>).</li>
        <li><b>Jeová era conhecido pelo nome de família:</b> o Deus de Abraão, de Isaque e de Jacó
        (<span class="scr" data-ref="2:3:6">Êxodo 3:6</span>).</li>
      </ul>
      <p>No caso da família de Moisés isso é documentado: <b>Joquebede era filha de Levi</b>
      (<span class="scr" data-ref="4:26:59">Números 26:59</span>), e Levi, filho de Jacó, viveu 137
      anos (<span class="scr" data-ref="2:6:16">Êxodo 6:16</span>). A mãe de Moisés foi criada por um
      homem que conviveu com Jacó e viu José governar o Egito.</p>
      <p>A Bíblia não diz quem ensinou Sifrá e Puá. Mas elas vinham do mesmo povo e da mesma
      tradição, e séculos depois os apóstolos repetiriam a mesma conclusão diante do tribunal
      (<span class="scr" data-ref="44:5:29">Atos 5:29</span>).</p>`
  },

  a22: {
    cat: "hoje", para: "§5",
    quote: "Eles ensinaram Miriã e Arão a amar e obedecer a Jeová",
    title: "A corrente de ensino não parou ali",
    body: `
      <p>Junte as pontas: Levi ensinou Joquebede, Joquebede e Anrão ensinaram Miriã, Arão e Moisés, e
      Moisés escreveu o relato que estamos estudando hoje. Quatro gerações, dentro de casa, no meio
      da escravidão.</p>
      <h4>Onde essa corrente está hoje</h4>
      <ul>
        <li><b>Os avós.</b> Contar aos netos o que viram Jeová fazer, inclusive nos tempos difíceis,
        é exatamente o papel que Levi teve.</li>
        <li><b>O culto em família.</b> É onde a criança ouve pela primeira vez que existe limite para
        a autoridade humana.</li>
        <li><b>O exemplo em casa.</b> As parteiras decidiram sozinhas na frente do rei, mas o que
        pesou na decisão delas foi ensinado anos antes, por alguém.</li>
      </ul>
      <p>Quem está ensinando hoje pode não ver o resultado, como talvez Anrão e Joquebede não tenham
      visto. O resultado aparece assim mesmo.</p>`
  },

  a23: {
    cat: "pesquisa", para: "§2",
    quote: "a fazer algo errado aos olhos do Soberano do Universo",
    title: "Os exemplos que provavam isso para elas",
    body: `
      <p>O capítulo diz que elas <b>sabiam</b>. Esse saber tinha provas, e quase todas envolviam
      justamente reis, alguns deles Faraós:</p>
      <ul>
        <li><b>Um Faraó já tinha sido corrigido por Jeová.</b> No tempo de Abraão, quando Sarai foi
        levada ao palácio, Jeová infligiu pragas ao Faraó e à casa dele, e o rei teve que devolvê-la
        (<span class="scr" data-ref="1:12:17-18">Gênesis 12:17, 18</span>).</li>
        <li><b>Outro rei foi impedido por Deus num sonho.</b> Abimeleque foi avisado antes de cometer
        o erro (<span class="scr" data-ref="1:20:3">Gênesis 20:3</span>).</li>
        <li><b>O Faraó do tempo de José admitiu isso em público.</b> Depois que nenhum sábio do Egito
        conseguiu interpretar o sonho, ele perguntou aos servos se existiria outro homem como José,
        “em quem está o espírito de Deus”
        (<span class="scr" data-ref="1:41:38">Gênesis 41:38</span>). O próprio José tinha dito:
        “Quem sou eu? É Deus que falará” (<span class="scr" data-ref="1:41:16">41:16</span>).
        Isso era história recente, de uns 60 anos antes.</li>
        <li><b>A escravidão tinha prazo marcado, e não era o Faraó quem marcava.</b> Jeová avisou a
        Abraão que os descendentes dele seriam escravizados e afligidos, e que Ele julgaria a nação e
        os tiraria de lá com muitos bens
        (<span class="scr" data-ref="1:15:13-14">Gênesis 15:13, 14</span>).</li>
      </ul>
      <h4>E a prova que elas viam com os próprios olhos</h4>
      <p>Quanto mais os egípcios oprimiam, mais o povo se multiplicava, a ponto de os egípcios ficarem
      com medo (<span class="scr" data-ref="2:1:12">Êxodo 1:12</span>). E quem via isso melhor do que
      ninguém eram elas: parteira é justamente quem traz os bebês ao mundo. O plano do rei fracassava
      nas mãos delas, todo dia.</p>`
  },

  a7: {
    cat: "pesquisa", para: "§2",
    quote: "duas parteiras hebreias, Sifrá e Puá",
    title: "Por que só duas para um povo inteiro",
    body: `
      <p>O Estudo Perspicaz responde: é provável que Sifrá e Puá fossem <b>dirigentes da classe
      profissional</b>, responsáveis por transmitir as ordens do rei às outras parteiras.</p>
      <p>O verbete também explica o trabalho delas: ajudar no parto, cortar o cordão, banhar e
      enfaixar o bebê. Em partos difíceis, como o de Raquel, a parteira era quem dava a notícia à mãe
      (<span class="scr" data-ref="1:35:17">Gênesis 35:17</span>).</p>
      <p class="srcline">it, verbete “Parteira”, §§ 2-4.</p>`
  },

  a8: {
    cat: "hoje", para: "§2",
    quote: "algo que exigiu muita coragem",
    title: "Onde hoje se diz não a uma ordem errada",
    body: `
      <ul>
        <li><b>No hospital.</b> Manter a decisão sobre sangue quando o médico pressiona e a família
        chora do lado.</li>
        <li><b>No trabalho.</b> Recusar assinar um documento com informação falsa, mesmo sabendo que
        isso pode custar o emprego.</li>
        <li><b>Onde a obra é proibida.</b> Irmãos que continuam se reunindo e pregando em países onde
        isso é crime.</li>
        <li><b>Para quem já tem idade:</b> não participar de uma prática religiosa da família, mesmo
        sendo o mais velho e sendo cobrado por isso.</li>
      </ul>
      <p>Nesses casos vale o mesmo raciocínio das parteiras: nenhum ser humano tem autoridade para
      mandar alguém fazer o que Jeová condena.</p>`
  },

  a9: {
    cat: "pergunta", para: "§2",
    quote: "As parteiras “não fizeram o que o rei do Egito lhes havia ordenado”",
    title: "Pergunta para a assistência",
    body: `
      <h4>Como perguntar</h4>
      <p>“Elas podiam ter obedecido e depois dito que só estavam cumprindo ordens. O que as impediu
      de fazer isso?”</p>
      <h4>Resposta que você quer ouvir</h4>
      <p>O temor a Deus. Elas respeitavam mais a Jeová do que ao Faraó, e sabiam que a ordem de um
      rei não vale quando manda fazer o que Deus condena.</p>`
  },

  /* ------------------------------ §3 ------------------------------ */

  a10: {
    cat: "chave", para: "§3",
    quote: "todos os meninos israelitas recém-nascidos deviam ser jogados no rio Nilo",
    title: "A segunda lei, pior que a primeira",
    body: `
      <p>Quando o plano com as parteiras falhou, o Faraó fez uma lei geral: agora a ordem valia para
      todo o povo (<span class="scr" data-ref="2:1:22">Êxodo 1:22</span>).</p>
      <p>É nesse cenário que Anrão e Joquebede, que já tinham Miriã e Arão, descobrem que vem um
      terceiro filho.</p>`
  },

  a11: {
    cat: "pesquisa", para: "§3",
    quote: "eles tentaram escondê-lo o máximo que puderam",
    title: "A Bíblia diz o que eles sentiam, e o que não sentiam",
    body: `
      <p><span class="scr" data-ref="58:11:23">Hebreus 11:23</span> registra os dois lados: foi pela
      fé que os pais esconderam o menino por três meses, e eles não temeram a ordem do rei.</p>
      <p><span class="scr" data-ref="44:7:20">Atos 7:20</span> acrescenta que o menino era
      “divinamente belo”, ou seja, bonito aos olhos de Deus. A Despertai! observa que os pais podem
      ter percebido de alguma forma que aquele filho tinha o favor de Deus.</p>
      <p class="srcline">g04 8/4 p. 4 § 3.</p>`
  },

  a12: {
    cat: "insight", para: "§3",
    quote: "Joquebede pegou um cesto, o cobriu com betume e piche",
    title: "Ela preparou o cesto como se prepara um barco",
    body: `
      <p>Betume e piche eram o que se usava para impermeabilizar embarcação. Ela não improvisou: fez
      um barquinho à prova de água e escolheu o lugar entre os juncos, onde a filha do Faraó costumava
      se banhar (<span class="scr" data-ref="2:2:3-4">Êxodo 2:3, 4</span>).</p>
      <h4>O que isso mostra</h4>
      <p>Fé não é cruzar os braços esperando milagre. Ela fez tudo o que estava ao alcance dela, e
      deixou o resto com Jeová.</p>`
  },

  a13: {
    cat: "hoje", para: "§3",
    quote: "Mas não é fácil esconder um bebê",
    title: "Pais protegendo os filhos hoje",
    body: `
      <p>Aqueles pais tinham um perigo com nome e endereço. Hoje o perigo dos filhos costuma ser mais
      silencioso, e por isso é fácil demorar a agir.</p>
      <ul>
        <li><b>O celular.</b> Saber o que o filho vê e com quem ele conversa, e continuar sabendo
        depois que ele cresce.</li>
        <li><b>As amizades.</b> Conhecer quem anda com ele, e receber essas pessoas em casa.</li>
        <li><b>A escola.</b> Preparar o filho antes da festa e da comemoração, e não no dia.</li>
      </ul>
      <p>Anrão e Joquebede fizeram o que era possível, com o que tinham. É o que se pede de qualquer
      pai.</p>`
  },

  /* ------------------------------ §4 ------------------------------ */

  a14: {
    cat: "chave", para: "§4",
    quote: "Miriã, que era uma menina que pensava rápido",
    title: "A parte da irmã mais velha",
    body: `
      <p>Miriã ficou de longe vendo o que ia acontecer. Quando a princesa pegou o bebê, ela se
      aproximou e ofereceu ir buscar uma mulher para amamentá-lo
      (<span class="scr" data-ref="2:2:7-8">Êxodo 2:7, 8</span>).</p>
      <p>A mulher que ela trouxe foi a própria mãe.</p>`
  },

  a15: {
    cat: "insight", para: "§4",
    quote: "tomou coragem e foi até a filha de Faraó",
    title: "Uma menina falando com a filha do rei que mandou matar",
    body: `
      <p>Pense no tamanho disso. Uma menina hebreia, escrava, se aproximando da princesa do Egito,
      justamente no assunto que a lei do pai dela proibia.</p>
      <p>O capítulo diz que ela pensou rápido, e pensar rápido ali era arriscar a própria vida.</p>`
  },

  a16: {
    cat: "jeova", para: "§4",
    quote: "Imagine a alegria de Joquebede",
    title: "A saída que Jeová deu foi melhor do que esconder",
    body: `
      <p>Repare no resultado: a mãe voltou a criar o próprio filho, agora com a proteção do palácio,
      e ainda recebeu pagamento para isso
      (<span class="scr" data-ref="2:2:9">Êxodo 2:9</span>).</p>
      <p>Eles só queriam que o bebê sobrevivesse. Jeová resolveu de um jeito que ninguém naquela
      família teria imaginado.</p>`
  },

  a17: {
    cat: "hoje", para: "§4",
    quote: "Ela se ofereceu para trazer uma mulher para amamentar a criança",
    title: "O que crianças e jovens conseguem fazer",
    body: `
      <ul>
        <li><b>Falar quando o adulto não pode.</b> Um neto que convida a professora para a reunião,
        ou entrega um convite que o avô não conseguiria entregar.</li>
        <li><b>Cuidar de um irmão menor.</b> Ajudar nos estudos, na preparação para a reunião, na
        hora de responder uma pergunta na escola.</li>
        <li><b>Ser o exemplo que a família toda segue.</b> Muitas famílias começaram a estudar porque
        uma criança insistiu.</li>
      </ul>
      <p>Miriã não era adulta e fez a parte mais arriscada daquele dia.</p>`
  },

  /* ------------------------------ §5 ------------------------------ */

  a18: {
    cat: "chave", para: "§5",
    quote: "Será que Jeová recompensou Anrão, Joquebede e Miriã",
    title: "A recompensa que o capítulo aponta",
    body: `
      <p>O capítulo responde com três coisas concretas: eles ensinaram Miriã e Arão a amar e obedecer
      a Jeová e viram os dois se tornarem servos fiéis; viram Jeová protegendo Moisés; e Miriã e Arão
      viram o que Jeová fez por meio do irmão.</p>
      <h4>Para dizer</h4>
      <p>A maior recompensa de um pai fiel aparece nos filhos, e essa eles receberam em vida.</p>`
  },

  a19: {
    cat: "pesquisa", para: "§5",
    quote: "A Bíblia não diz",
    title: "O que o relato não conta",
    body: `
      <p>O capítulo é honesto: não sabemos se Anrão e Joquebede viveram para ver o tipo de homem que
      Moisés se tornou. A Bíblia registra a idade de Anrão, 137 anos, mas não responde essa pergunta
      (<span class="scr" data-ref="2:6:20">Êxodo 6:20</span>).</p>
      <h4>Como usar isso</h4>
      <p>Muitos pais fiéis morrem sem ver o resultado do que plantaram. Isso não significa que o
      trabalho deles não valeu.</p>`
  },

  a20: {
    cat: "jeova", para: "§5",
    quote: "os três foram grandes exemplos de fé e coragem",
    title: "Ele guardou os nomes deles",
    body: `
      <p>A Sentinela destaca isto a respeito das parteiras: Jeová foi um escudo para elas, deu a cada
      uma a sua própria família, e honrou as duas fazendo com que os nomes e os atos delas ficassem
      registrados na Palavra dele, para gerações lerem. Enquanto isso, o nome daquele Faraó foi
      esquecido (<span class="scr" data-ref="2:1:20-21">Êxodo 1:20, 21</span>;
      <span class="scr" data-ref="20:10:7">Provérbios 10:7</span>).</p>
      <p class="srcline">w03 1/11 p. 8 § 4.</p>`
  },

  a21: {
    cat: "insight", para: "§5",
    quote: "Miriã e Arão com certeza viram as coisas maravilhosas que Jeová fez",
    title: "Os dois filhos mais velhos viram o Mar Vermelho",
    body: `
      <p>Aquela menina do rio Nilo virou a mulher que conduziu o cântico depois da travessia do mar
      (<span class="scr" data-ref="2:15:20-21">Êxodo 15:20, 21</span>). Arão virou o porta-voz de
      Moisés e o sumo sacerdote.</p>
      <p>Jeová menciona os três juntos ao lembrar como tirou Israel do Egito
      (<span class="scr" data-ref="33:6:4">Miqueias 6:4</span>).</p>`
  },

  /* --------------------------- para considerar --------------------------- */

  q1: {
    cat: "pergunta", para: "Para considerar",
    quote: "De que maneiras as parteiras e a família de Moisés mostraram coragem?",
    title: "Cinco pessoas, cinco tipos de coragem",
    body: `
      <ul>
        <li><b>Sifrá e Puá.</b> Desobedeceram uma ordem direta do rei e depois ainda encararam ele
        para prestar contas.</li>
        <li><b>Anrão e Joquebede.</b> Esconderam o bebê por três meses arriscando a própria vida, e
        não temeram a ordem do rei (<span class="scr" data-ref="58:11:23">Hebreus 11:23</span>).</li>
        <li><b>Joquebede, de novo.</b> Preparou o cesto e colocou o filho no rio, que era o lugar
        onde a lei mandava jogá-lo.</li>
        <li><b>Miriã.</b> Ficou vigiando e falou com a filha do Faraó, sendo uma menina hebreia.</li>
      </ul>
      <h4>O que amarra tudo</h4>
      <p>Nenhum deles tinha poder. O que eles tinham era temor a Deus, e isso bastou para enfrentar o
      homem mais poderoso da época.</p>`
  },

  /* ------------------------ analise mais a fundo ------------------------ */

  q2: {
    cat: "pesquisa", para: "Analise 1",
    quote: "Que provas existem de que os israelitas já viveram no Egito?",
    title: "Provas indiretas, e fortes",
    body: `
      <p>A Despertai! reconhece que não foi achada evidência arqueológica direta dos anos que Israel
      passou no Egito, e então mostra o que existe de evidência indireta:</p>
      <ul>
        <li>O egiptólogo James K. Hoffmeier, no livro <i>Israel in Egypt</i>, diz que os dados
        arqueológicos mostram claramente que povos semitas entravam e se estabeleciam no Egito.</li>
        <li>A descrição bíblica da escravidão bate com o que se vê em pinturas de túmulos egípcios,
        que retratam em detalhe a fabricação de tijolos de barro por escravos.</li>
      </ul>
      <p class="srcline">g04 8/4 p. 4 § 4 a p. 5 § 1.</p>`
  },

  q3: {
    cat: "pesquisa", para: "Analise 2",
    quote: "o cesto de papiro e a ordem do Faraó de matar os bebês hebreus",
    title: "Os dois detalhes que soam verdadeiros",
    body: `
      <h4>1. O cesto de papiro</h4>
      <p>A Bíblia diz que a arca era de papiro. Segundo a obra de referência citada, o papiro era
      normalmente usado pelos egípcios para fazer barcos leves e rápidos. A imagem A do capítulo
      mostra que até hoje se fazem barcos assim.</p>
      <h4>2. A ordem de matar os bebês</h4>
      <p>Parece absurdo um governante mandar matar recém-nascidos, mas o erudito George Rawlinson
      lembra que o infanticídio era comum em várias épocas e lugares, e era tratado como assunto
      corriqueiro. A Despertai! conclui que o relato é perturbador, e é verdadeiro.</p>
      <p class="srcline">g04 8/4 p. 6 §§ 1-2.</p>`
  },

  q4: {
    cat: "pesquisa", para: "Analise 3",
    quote: "O que sabemos sobre as parteiras hebreias, e como elas foram abençoadas?",
    title: "Quem elas eram e o que receberam",
    body: `
      <h4>Quem eram</h4>
      <p>Pelo Estudo Perspicaz: parteira era quem ajudava no parto, cortava o cordão, banhava e
      enfaixava o bebê. Poucas seguiam a profissão, porque exigia conhecimento e experiência. E Sifrá
      e Puá provavelmente eram dirigentes da classe, encarregadas de repassar as ordens do rei às
      outras.</p>
      <h4>Como foram abençoadas</h4>
      <p>A Sentinela lista: Jeová foi um escudo para elas contra a ira do Faraó, deu a cada uma a sua
      própria família, e registrou os nomes e os atos delas na Bíblia, para serem lidos por gerações,
      enquanto o nome do Faraó se perdeu.</p>
      <p class="srcline">w03 1/11 p. 8 §§ 3-4; it “Parteira”.</p>`
  },

  q5: {
    cat: "pergunta", para: "Analise 4",
    quote: "Como Miriã continuou mostrando na velhice a grande fé que teve em toda a sua vida?",
    title: "O que a Bíblia registra da Miriã adulta",
    body: `
      <p>O capítulo manda pesquisar essa resposta numa publicação específica (ijwia, artigo 7,
      §§ 14-18), que não está nesta cópia offline. Vale abrir antes da reunião. O que a própria
      Bíblia mostra dá uma boa base:</p>
      <ul>
        <li>Depois da travessia do mar, já idosa, ela é chamada de profetisa e conduz as mulheres no
        cântico de vitória (<span class="scr" data-ref="2:15:20-21">Êxodo 15:20, 21</span>).</li>
        <li>Jeová a menciona ao lado de Moisés e Arão como alguém que ele enviou à frente do povo
        (<span class="scr" data-ref="33:6:4">Miqueias 6:4</span>).</li>
        <li>Ela também errou, falando contra Moisés, foi corrigida por Jeová e depois voltou a
        acompanhar o povo (<span class="scr" data-ref="4:12:1-2">Números 12:1, 2</span>,
        <span class="scr" data-ref="4:12:15">15</span>).</li>
      </ul>
      <h4>Ao dirigir</h4>
      <p>Se ninguém tiver pesquisado a fonte, puxe pelo lado bíblico: a menina corajosa do rio virou
      uma mulher usada por Jeová, e mesmo depois de um erro sério continuou com o povo dele.</p>`
  },

  /* ------------------------ medite no que aprendeu ------------------------ */

  q6: {
    cat: "hoje", para: "Medite 1",
    quote: "O que os pais podem aprender de Anrão e Joquebede?",
    title: "Quatro lições para pais",
    body: `
      <ul>
        <li><b>Fizeram o que estava ao alcance deles.</b> Esconderam por três meses, e quando não deu
        mais, prepararam o cesto e escolheram o lugar. Fé com providência prática.</li>
        <li><b>Agiram juntos.</b> O relato fala dos dois, pai e mãe, na mesma decisão.</li>
        <li><b>Ensinaram os filhos.</b> O resultado aparece em Miriã e Arão, que se tornaram servos
        fiéis.</li>
        <li><b>Aproveitaram o tempo que tiveram.</b> Joquebede teve poucos anos com Moisés em casa, e
        o que ela plantou ficou para a vida inteira dele.</li>
      </ul>
      <h4>Aplicação para hoje</h4>
      <p>O tempo com os filhos é curto e não volta. O que é ensinado nos anos calmos é o que segura na
      hora da prova (<span class="scr" data-ref="5:6:6-7">Deuteronômio 6:6, 7</span>).</p>`
  },

  q7: {
    cat: "hoje", para: "Medite 2",
    quote: "Se você tem irmãos, o que pode aprender do que Miriã fez quando era pequena?",
    title: "Para os jovens, com exemplos",
    body: `
      <ul>
        <li><b>Ficar de olho no irmão menor.</b> Miriã não saiu de perto até saber o que ia acontecer
        com o bebê.</li>
        <li><b>Falar na hora certa.</b> Ela viu a chance e se ofereceu, em vez de esperar um adulto
        resolver.</li>
        <li><b>Fazer a sua parte na família.</b> A parte dela naquele dia foi pequena de aparência e
        decisiva no resultado.</li>
      </ul>
      <h4>Hoje</h4>
      <p>Ajudar o irmão a se preparar para a reunião, defender ele na escola, avisar os pais quando
      alguma coisa está errada. A imagem C do capítulo mostra justamente duas crianças aprendendo com
      o exemplo da Miriã.</p>`
  },

  q8: {
    cat: "hoje", para: "Medite 3",
    quote: "Como você pode imitar a coragem de Sifrá e Puá na sua vida?",
    title: "Onde essa coragem é exigida de nós",
    body: `
      <ul>
        <li><b>Quando a ordem vem de cima e contraria a Bíblia.</b> Assinar algo falso, participar de
        um esquema no trabalho, mentir para cobrir o chefe.</li>
        <li><b>Quando a pressão vem da família.</b> Uma prática religiosa, uma comemoração, um
        costume que envolve espiritismo.</li>
        <li><b>Quando a lei do país proíbe pregar.</b> Milhares continuam pregando mesmo assim, e a
        Sentinela liga esse caso diretamente a Sifrá e Puá.</li>
        <li><b>No dia a dia comum.</b> Dizer que é Testemunha de Jeová antes de a conversa esquentar,
        e não depois.</li>
      </ul>
      <p>O princípio é o mesmo de <span class="scr" data-ref="44:5:29">Atos 5:29</span>: obedecer a
      Deus como governante, e não aos homens.</p>`
  },

  /* ------------------------ pense no quadro completo ------------------------ */

  q9: {
    cat: "jeova", para: "Quadro 1",
    quote: "O que esse relato me ensina sobre Jeová?",
    title: "Quatro coisas sobre Jeová neste capítulo",
    body: `
      <ul>
        <li><b>Ele vê quem age com coragem, mesmo quando ninguém mais vê.</b> Duas parteiras numa
        casa qualquer do Egito, e ele registrou os nomes das duas.</li>
        <li><b>Ele protege e recompensa.</b> Foi escudo para elas e deu família a cada uma.</li>
        <li><b>Ele resolve melhor do que a gente pede.</b> A família queria só salvar o bebê, e ele
        devolveu o filho para a mãe criar, com o palácio pagando.</li>
        <li><b>Ele não depende de gente poderosa.</b> Usou duas parteiras, um casal de escravos e uma
        menina para frustrar o plano de um império.</li>
      </ul>`
  },

  q10: {
    cat: "chave", para: "Quadro 2",
    quote: "Como esse relato está relacionado com o propósito de Jeová?",
    title: "Sem esse dia, não haveria Êxodo",
    body: `
      <ul>
        <li>O bebê escondido é o homem que Jeová usaria para tirar Israel do Egito e dar a Lei ao
        povo.</li>
        <li>A nação precisava sobreviver, porque dela viria o Descendente prometido. Matar os meninos
        hebreus era um ataque a essa promessa.</li>
        <li>A coragem de pessoas comuns foi o meio que Jeová usou para proteger o cumprimento do
        propósito dele (<span class="scr" data-ref="33:6:4">Miqueias 6:4</span>).</li>
      </ul>`
  },

  q11: {
    cat: "pergunta", para: "Quadro 3",
    quote: "O que eu gostaria de perguntar para Sifrá, Puá, Anrão, Joquebede e Miriã",
    title: "Perguntas que rendem no encerramento",
    body: `
      <ul>
        <li>Sifrá e Puá: o que passou pela cabeça de vocês quando o Faraó mandou chamar para prestar
        contas?</li>
        <li>Joquebede: como foi voltar para casa no dia em que você deixou o cesto no rio?</li>
        <li>Miriã: você tinha pensado antes no que ia dizer para a princesa, ou falou na hora?</li>
        <li>Anrão: vocês chegaram a saber o que Moisés se tornou?</li>
      </ul>`
  }
};
