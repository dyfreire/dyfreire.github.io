/* ==========================================================================
   Anotações do estudo de livro: Ande Corajosamente com Deus, cap. 10,
   "Moisés tomou a decisão certa".
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
  { n: 1, title: "A decisão certa",
    line: "Criado no palácio, com tudo nas mãos, Moisés escolheu ficar do lado do povo de Jeová.",
    paras: "§1 a §3" },
  { n: 2, title: "A coragem sem mansidão",
    line: "Ele quis ajudar do jeito dele e na hora dele. Matou um homem e o povo não o aceitou.",
    paras: "§4 a §6" },
  { n: 3, title: "O que ainda faltava",
    line: "Coragem ele tinha. Faltava a mansidão, e também não era o tempo de Jeová.",
    paras: "§7" },
  { n: 4, title: "Recomeçar longe de tudo",
    line: "Moisés perdeu tudo, fugiu para Midiã e ali Jeová ia trabalhar nele por décadas.",
    paras: "§8" }
];

window.STEP_BY_PARA = {
  "§1": 1, "§2": 1, "§3": 1, "§4": 2, "§5": 2, "§6": 2, "§7": 3, "§8": 4,
  "Para considerar": 1,
  "Analise 1": 1, "Analise 2": 1, "Analise 3": 2, "Analise 4": 4,
  "Medite 1": 3, "Medite 2": 1, "Medite 3": 4,
  "Quadro 1": 3, "Quadro 2": 4, "Quadro 3": 4
};

window.NOTES = {

  /* ------------------------------ §1 ------------------------------ */

  a1: {
    cat: "insight", para: "§1",
    quote: "significa algo como “salvo da água”",
    title: "Quem deu o nome foi a princesa, não os pais",
    body: `
      <p>O nome Moisés não veio de Anrão e Joquebede. Veio da filha de Faraó, e lembrava o dia em que
      ela tirou o bebê do rio.</p>
      <h4>O que isso mostra</h4>
      <p>Toda vez que alguém chamava Moisés pelo nome, lembrava que ele era um menino adotado pela
      casa real. O nome já apontava para a vida que o palácio planejava para ele. A decisão que ele
      vai tomar aos 40 anos é contra esse plano.</p>`
  },

  a2: {
    cat: "pesquisa", para: "§1",
    quote: "receber a melhor educação do Egito",
    title: "O que era a “sabedoria dos egípcios”",
    body: `
      <p>A Sentinela de 15/6/2002 explica que Moisés foi preparado para um <b>cargo no governo</b>. O
      Egito era forte em matemática, geometria, arquitetura e construção. E, provavelmente, a família
      real quis que ele aprendesse também a religião egípcia.</p>
      <p>Ele pode ter estudado junto com filhos de reis estrangeiros, criados no palácio para depois
      governar a favor de Faraó. Alguns funcionários guardavam até o fim da vida o título de
      “Filho da Creche”, porque tinham sido criados ali.</p>
      <p class="srcline"><span class="scr" data-ref="44:7:22">Atos 7:22</span></p>`
  },

  /* ------------------------------ §2 ------------------------------ */

  a3: {
    cat: "chave", para: "§2",
    quote: "esse tipo de vida iria afastá-lo de Jeová",
    title: "Ele sabia o que estava em jogo",
    body: `
      <p>Moisés não era ingênuo. Ele entendia que riqueza, destaque e prazer, naquele lugar, vinham
      junto com os deuses do Egito e com a lealdade a um rei que oprimia o povo de Deus.</p>
      <h4>De onde veio essa clareza</h4>
      <p>A Sentinela de 2002 diz que os pais, enquanto Moisés morou com eles, sem dúvida o ensinaram
      sobre a origem hebraica dele e sobre Jeová. Mais tarde, meditar nas promessas feitas a Abraão,
      Isaque e Jacó o levou a preferir o favor de Deus.</p>`
  },

  a4: {
    cat: "hoje", para: "§2",
    quote: "riquezas, destaque e prazeres",
    title: "As mesmas três ofertas, hoje",
    body: `
      <ul>
        <li><b>Riqueza.</b> Uma promoção que paga o dobro, mas exige trabalhar em todos os dias de
        reunião.</li>
        <li><b>Destaque.</b> O jovem que é o melhor da turma e ouve dos professores que está
        “desperdiçando o talento” se não fizer faculdade longe de casa.</li>
        <li><b>Prazer.</b> Um grupo de amigos do trabalho que convida para viagens e festas e passa a
        ocupar todo o fim de semana.</li>
        <li><b>Para quem já tem idade.</b> Depois da aposentadoria, a oferta é ocupar o tempo só com
        o conforto: televisão, passeios, descanso. Nada disso é errado, mas pode tomar o lugar do
        ministério e das reuniões.</li>
      </ul>`
  },

  a5: {
    cat: "pergunta", para: "§2",
    quote: "O que ele faria com a sua vida?",
    title: "Pergunta para a assistência",
    body: `
      <p><b>Pergunte:</b> “Por que é mais difícil abrir mão de algo que você já tem do que recusar
      algo que nunca teve?”</p>
      <p><b>O que se quer ouvir:</b> Moisés já vivia no palácio. Ele não recusou um sonho distante,
      ele largou a vida que tinha. Por isso a decisão dele pesa tanto.</p>`
  },

  /* ------------------------------ §3 ------------------------------ */

  a6: {
    cat: "chave", para: "§3",
    quote: "Quando Moisés tinha 40 anos de idade",
    title: "Não foi um impulso de adolescente",
    body: `
      <p>Aos 40 anos um homem já sabe o que está deixando para trás. Moisés não decidiu por
      empolgação de jovem. Ele era adulto, instruído, com posição garantida.</p>
      <p>Hebreus diz que ele <b>se recusou a ser chamado filho da filha de Faraó</b>. Ele abriu mão do
      nome, da família adotiva e do futuro que o palácio oferecia.</p>
      <p class="srcline"><span class="scr" data-ref="44:7:23">Atos 7:23</span></p>`
  },

  a7: {
    cat: "insight", para: "§3",
    quote: "prazeres temporários do pecado",
    title: "A palavra que decide: temporários",
    body: `
      <p>Hebreus não diz que o pecado não dá prazer. Diz que o prazer <b>acaba</b>. Moisés comparou o
      que durava pouco com o que durava para sempre.</p>
      <h4>Como explicar para a assistência</h4>
      <p>É como trocar a casa própria por uma noite num hotel de luxo. A noite é boa, mas amanhã cedo
      você está na rua.</p>
      <p class="srcline"><span class="scr" data-ref="62:2:17">1 João 2:17</span></p>`
  },

  a8: {
    cat: "jeova", para: "§3",
    quote: "essa decisão mostrou sua fé e coragem",
    title: "Ele olhava para a recompensa",
    body: `
      <p>O versículo seguinte explica de onde veio a força: Moisés considerava a desonra do Cristo
      uma riqueza maior do que os tesouros do Egito, porque <b>olhava atentamente para o pagamento
      da recompensa</b>.</p>
      <p>A Sentinela de 2002 comenta que “Cristo”, que quer dizer ungido, se aplica a Moisés porque
      mais tarde ele recebeu uma designação especial direto de Jeová.</p>
      <h4>Sobre Jeová</h4>
      <p>Jeová não pede sacrifício sem oferecer nada em troca. Ele deixa a recompensa visível para
      quem tem fé.</p>
      <p class="srcline"><span class="scr" data-ref="58:11:26">Hebreus 11:26</span></p>`
  },

  a9: {
    cat: "insight", para: "§3",
    quote: "ele ainda precisava fazer algumas mudanças",
    title: "Decisão certa, maneira ainda errada",
    body: `
      <p>Esta frase é a dobradiça do capítulo. A escolha de Moisés estava certa. O jeito de agir
      ainda não. Os próximos parágrafos mostram o que faltava.</p>
      <h4>O ponto para nós</h4>
      <p>Tomar a decisão certa não é o fim do treinamento. O batismo, por exemplo, é uma decisão
      certa, e depois dele Jeová continua trabalhando em nós.</p>`
  },

  /* ------------------------------ §4 ------------------------------ */

  a10: {
    cat: "chave", para: "§4",
    quote: "os israelitas eram “seus irmãos”",
    title: "O coração dele estava com o povo",
    body: `
      <p>Moisés foi ver de perto o sofrimento. A Sentinela de 2002 observa que não foi curiosidade:
      as ações seguintes mostram que ele queria ajudar. E aos olhos dos egípcios ele tinha todos os
      motivos para ser leal a Faraó.</p>
      <p class="srcline"><span class="scr" data-ref="2:2:11">Êxodo 2:11</span></p>`
  },

  a11: {
    cat: "insight", para: "§4",
    quote: "“olhou para um lado e para o outro”",
    title: "O livro sugere outra leitura",
    body: `
      <p>Muita gente lê esse gesto como alguém conferindo se havia testemunha antes do crime. O
      capítulo sugere algo diferente: <b>talvez ele procurasse alguém que pudesse ajudar o
      escravo</b>. Não achou ninguém.</p>
      <p>Isso mostra um homem tentando fazer o certo, sozinho, num momento de pressão.</p>`
  },

  a12: {
    cat: "insight", para: "§4",
    quote: "O relato não diz",
    title: "O capítulo não inventa o que a Bíblia não conta",
    body: `
      <p>Foi de propósito? Foi raiva que passou do ponto? O livro levanta as duas hipóteses e para
      ali. Duas vezes neste parágrafo ele diz que não sabemos.</p>
      <h4>Por que isso importa na consideração</h4>
      <p>Se alguém comentar com certeza sobre o que Moisés pensava, dá para agradecer e lembrar que o
      próprio livro deixa essa questão em aberto.</p>`
  },

  a13: {
    cat: "pesquisa", para: "§4",
    quote: "escondeu o corpo na areia",
    title: "Para um egípcio, isso era gravíssimo",
    body: `
      <p>O Estudo Perspicaz, verbete “Egito, egípcio”, explica que os egípcios acreditavam que a alma
      era imortal e que o corpo precisava ser preservado, para a alma voltar e usá-lo de vez em
      quando. Por isso embalsamavam os mortos. O túmulo era o “lar” do falecido, com comida, roupa,
      joias e encantamentos.</p>
      <h4>Ligando com a pergunta 3</h4>
      <p>Um corpo enterrado na areia, sem preparo nenhum, era, na visão deles, tirar do morto a vida
      depois da morte. Aos olhos de um egípcio, Moisés não só matou: fez algo que eles consideravam
      pior.</p>`
  },

  /* ------------------------------ §5 ------------------------------ */

  a14: {
    cat: "chave", para: "§5",
    quote: "Quem o designou príncipe e juiz sobre nós?",
    title: "Quem ele quis ajudar o rejeitou",
    body: `
      <p>Quem respondeu assim foi justamente o escravo que estava errado na briga. Moisés tentou
      fazer as pazes entre irmãos e levou uma acusação na cara.</p>
      <p>A pergunta tinha razão num ponto: ninguém ainda tinha designado Moisés. Jeová só faria isso
      40 anos depois.</p>
      <p class="srcline"><span class="scr" data-ref="2:2:13-14">Êxodo 2:13, 14</span></p>`
  },

  a15: {
    cat: "hoje", para: "§5",
    quote: "Sua vida estava em perigo",
    title: "Quando o bem que você fez vira contra você",
    body: `
      <ul>
        <li><b>Na família.</b> Você tenta separar uma briga entre parentes e os dois se voltam contra
        você.</li>
        <li><b>Na congregação.</b> Um irmão dá um conselho com boa intenção, mas sem ser a pessoa
        certa para dar, e a relação esfria.</li>
      </ul>
      <p>Querer ajudar é bom. Mas nem toda ajuda é a nossa para dar, e nem toda hora é a hora.</p>`
  },

  /* ------------------------------ §6 ------------------------------ */

  a16: {
    cat: "chave", para: "§6",
    quote: "Ele achava que os seus irmãos compreenderiam",
    title: "Ele estava certo sobre o quê, e errado sobre o quando",
    body: `
      <p>Moisés parece ter entendido que Deus o usaria para livrar Israel. Nisso ele não estava
      enganado. O erro foi achar que seria ali, daquele jeito, pela força do braço dele.</p>
      <p class="srcline"><span class="scr" data-ref="44:7:25">Atos 7:25</span></p>`
  },

  a17: {
    cat: "jeova", para: "§6",
    quote: "aquele não era o tempo de Jeová livrar seu povo",
    title: "Jeová já tinha marcado o tempo",
    body: `
      <p>Séculos antes, Jeová disse a Abraão que os descendentes dele seriam afligidos numa terra
      estrangeira e depois sairiam com muitos bens. O relógio era de Jeová, não de Moisés.</p>
      <h4>Sobre Jeová</h4>
      <p>Ele cumpre o que promete, mas na hora dele. Correr na frente de Jeová, mesmo com boa
      intenção, dá errado.</p>
      <p class="srcline"><span class="scr" data-ref="1:15:13-14">Gênesis 15:13, 14</span></p>`
  },

  a18: {
    cat: "insight", para: "§6",
    quote: "o povo não confiaria num hebreu criado pela realeza egípcia",
    title: "A educação que o destacava também o afastava",
    body: `
      <p>Para os escravos, Moisés era o homem do palácio. Vestia como egípcio, falava como egípcio,
      tinha sido criado pelos que os oprimiam. Como confiar nele?</p>
      <p>O que o preparou para governar no Egito era, para o povo, motivo de desconfiança.</p>`
  },

  /* ------------------------------ §7 ------------------------------ */

  a19: {
    cat: "chave", para: "§7",
    quote: "a mansidão",
    title: "O que é mansidão, em palavras simples",
    body: `
      <p>Mansidão é ter um <b>temperamento brando</b>: não perder o controle, aceitar ser corrigido e
      esperar a orientação de Jeová em vez de resolver tudo do próprio jeito. Não é fraqueza. Moisés
      continuou corajoso a vida toda.</p>
      <h4>O fim da história</h4>
      <p>Aquele homem que matou num momento de raiva ficou conhecido, anos depois, como <b>o mais
      manso de todos os homens</b> na face da terra. Jeová conseguiu mudar isso nele.</p>
      <p class="srcline"><span class="scr" data-ref="4:12:3">Números 12:3</span>;
      <span class="scr" data-ref="40:5:5">Mateus 5:5</span></p>`
  },

  a20: {
    cat: "insight", para: "§7",
    quote: "ele até tinha coragem, era forte",
    title: "Talento não substitui caráter",
    body: `
      <p>Coragem, força, boa fala. Moisés tinha tudo o que o mundo admira num líder. Para Jeová, faltava
      o mais importante.</p>
      <p>Na congregação também: saber falar bem e ter iniciativa ajuda, mas o que Jeová procura
      primeiro é um coração manso.</p>`
  },

  a21: {
    cat: "hoje", para: "§7",
    quote: "Agindo num momento de raiva",
    title: "Onde a raiva aparece hoje",
    body: `
      <ul>
        <li><b>No trânsito.</b> Alguém fecha o carro e a resposta sai antes de pensar.</li>
        <li><b>No celular.</b> Uma mensagem enviada com raiva no grupo da família não volta mais.</li>
        <li><b>Em casa.</b> Depois de um dia cansativo, a paciência acaba com quem está mais perto.</li>
        <li><b>Para quem já tem idade.</b> A dor e a limitação deixam a pessoa mais irritada, e quem
        cuida dela acaba ouvindo palavras duras.</li>
      </ul>
      <p>Provérbios diz que quem controla a si mesmo é melhor do que quem conquista uma cidade.</p>
      <p class="srcline"><span class="scr" data-ref="20:16:32">Provérbios 16:32</span></p>`
  },

  /* ------------------------------ §8 ------------------------------ */

  a22: {
    cat: "chave", para: "§8",
    quote: "teve de deixar para trás riqueza, conforto e destaque",
    title: "Até a fuga exigiu coragem",
    body: `
      <p>Moisés saiu sem saber para onde ia nem o que ia comer. O capítulo diz que isso exigiu muita
      coragem.</p>
      <p>Hebreus acrescenta que ele deixou o Egito <b>sem temer a ira do rei</b>, porque permanecia
      firme como quem vê Aquele que é invisível.</p>
      <p class="srcline"><span class="scr" data-ref="58:11:27">Hebreus 11:27</span></p>`
  },

  a23: {
    cat: "insight", para: "§8",
    quote: "“residente estrangeiro numa terra estrangeira”",
    title: "Ele pôs o sentimento no nome do filho",
    body: `
      <p>Essa frase é do próprio Moisés. Quando nasceu o primeiro filho, ele deu o nome de Gérson e
      explicou: “Eu me tornei residente estrangeiro numa terra estrangeira.”</p>
      <p>O ex-príncipe agora era um estrangeiro cuidando de ovelhas. Dá para sentir a solidão
      daquele homem.</p>
      <p class="srcline"><span class="scr" data-ref="2:2:22">Êxodo 2:22</span></p>`
  },

  a24: {
    cat: "jeova", para: "§8",
    quote: "passaria décadas",
    title: "Jeová não tinha pressa",
    body: `
      <p>Foram 40 anos em Midiã antes de Jeová aparecer a Moisés no espinheiro. Parece tempo perdido,
      mas não foi. No deserto, cuidando de ovelhas, o homem que agiu com raiva estava sendo
      transformado.</p>
      <h4>Sobre Jeová</h4>
      <p>Ele não descartou Moisés por causa do erro. Ele esperou e treinou.</p>
      <p class="srcline"><span class="scr" data-ref="44:7:30">Atos 7:30</span></p>`
  },

  a25: {
    cat: "hoje", para: "§8",
    quote: "Como seria a vida dele lá?",
    title: "Recomeçar do zero",
    body: `
      <ul>
        <li><b>Mudança de cidade.</b> A família vai servir onde há mais necessidade e tudo é novo:
        congregação, trabalho, vizinhos.</li>
        <li><b>Perda do emprego.</b> Quem tinha cargo de chefia passa a aceitar qualquer serviço
        para sustentar a casa.</li>
        <li><b>Para quem já tem idade.</b> Depois da morte do cônjuge, ou de ir morar com um filho
        em outro lugar, a pessoa se sente um estrangeiro na própria vida.</li>
      </ul>
      <p>O relato de Moisés mostra que Jeová pode usar esses anos difíceis para formar alguém.</p>`
  },

  /* --------------------------- perguntas --------------------------- */

  q1: {
    cat: "pergunta", para: "Para considerar",
    quote: "De que maneiras Moisés mostrou coragem",
    title: "Três momentos de coragem",
    body: `
      <ol>
        <li><b>Recusar o palácio.</b> Largar nome, riqueza e posição para ficar com o povo de Deus.
        <em>§3</em></li>
        <li><b>Defender o escravo e separar a briga.</b> Ele se expôs para ajudar quem sofria.
        <em>§4, §5</em></li>
        <li><b>Fugir sem nada.</b> Deixar tudo e ir para uma terra desconhecida. <em>§8</em></li>
      </ol>
      <p><b>Seguimento:</b> “Qual das três vocês acham que foi a mais difícil?” Não existe resposta
      errada, mas ajuda a assistência a se colocar no lugar dele.</p>`
  },

  q2: {
    cat: "pesquisa", para: "Analise 1",
    quote: "Existe alguma prova além da Bíblia",
    title: "A Sentinela de março de 2020, p. 30",
    body: `
      <ul>
        <li>Arqueólogos acharam restos de <b>20 ou mais povoados semitas</b> no norte do Egito. Semita
        vem de Sem, filho de Noé; os hebreus eram semitas.</li>
        <li>No sul do Egito foi achado um <b>papiro com nomes de escravos</b> de uma única casa.
        Mais de 40 nomes eram semitas, alguns parecidos com Issacar, Aser e Sifrá. É a imagem A.</li>
        <li>Um erudito conclui que as tradições bíblicas sobre a escravidão no Egito têm um firme
        apoio histórico.</li>
      </ul>`
  },

  q3: {
    cat: "pesquisa", para: "Analise 2",
    quote: "O que Moisés talvez tenha aprendido com seus pais?",
    title: "Duas escolas, duas lealdades",
    body: `
      <p><b>Em casa:</b> a origem hebraica e Jeová. A Bíblia não diz quanto tempo ele ficou com os
      pais; pode ter sido até o desmame, dois ou três anos, ou mais.</p>
      <p><b>No palácio:</b> matemática, geometria, arquitetura, construção, preparo para cargo no
      governo, e provavelmente a religião egípcia.</p>
      <p><b>O ponto:</b> A Sentinela pergunta a que Moisés seria leal. O que os pais plantaram
      naqueles primeiros anos pesou mais do que décadas de palácio.</p>`
  },

  q4: {
    cat: "pesquisa", para: "Analise 3",
    quote: "Como os egípcios costumavam sepultar os mortos?",
    title: "Embalsamar para a alma voltar",
    body: `
      <p>Veja a anotação do §4 sobre o corpo escondido na areia. Em resumo: os egípcios
      embalsamavam os mortos porque achavam que a alma voltaria ao corpo. O túmulo era a casa do
      falecido. A imagem B mostra uma múmia.</p>
      <p>Enterrar o corpo na areia, sem preparo, era para eles uma ofensa grave. Por isso Faraó quis
      matar Moisés sem ouvir explicação.</p>`
  },

  q5: {
    cat: "pesquisa", para: "Analise 4",
    quote: "O que os midianitas e os israelitas tinham em comum?",
    title: "Eram parentes",
    body: `
      <ul>
        <li>Midiã era <b>filho de Abraão</b> com Quetura. Os midianitas eram primos distantes dos
        israelitas.</li>
        <li>Por serem descendentes de Abraão, <b>provavelmente falavam uma língua bem parecida com o
        hebraico</b>. Gideão, séculos depois, entendia o que eles falavam.</li>
      </ul>
      <p>Jeová mandou Moisés, fugitivo, para uma terra onde ele conseguia conversar e viver entre
      parentes. E foram mercadores midianitas que levaram José ao Egito, séculos antes.</p>
      <p class="srcline"><span class="scr" data-ref="1:25:1-2">Gênesis 25:1, 2</span>;
      <span class="scr" data-ref="1:37:28">37:28</span></p>`
  },

  q6: {
    cat: "hoje", para: "Medite 1",
    quote: "controlar a raiva",
    title: "O que o exemplo ensina sobre a raiva",
    body: `
      <ul>
        <li>Mesmo com boa intenção, uma ação feita com raiva pode trazer consequências para a vida
        inteira.</li>
        <li>Tiago diz para demorar para falar e demorar para ficar irado, porque a ira do homem não
        produz a justiça de Deus.</li>
        <li>E Moisés prova que dá para mudar: o homem que matou com raiva virou o mais manso da terra.</li>
      </ul>
      <p class="srcline"><span class="scr" data-ref="59:1:19-20">Tiago 1:19, 20</span>;
      <span class="scr" data-ref="49:4:26">Efésios 4:26</span></p>`
  },

  q7: {
    cat: "hoje", para: "Medite 2",
    quote: "O que os jovens podem aprender",
    title: "A escolha da imagem C",
    body: `
      <p>O rapaz da imagem se imagina projetando aviões e, na outra cena, dirigindo um estudo
      bíblico. Moisés tinha um futuro brilhante no Egito e escolheu servir a Jeová.</p>
      <p>Não é que estudar ou trabalhar seja errado. A pergunta é: <b>o que vai ocupar o centro da
      minha vida?</b></p>
      <p class="srcline"><span class="scr" data-ref="21:12:1">Eclesiastes 12:1</span>;
      <span class="scr" data-ref="40:6:19-20">Mateus 6:19, 20</span></p>`
  },

  q8: {
    cat: "hoje", para: "Medite 3",
    quote: "De que outras maneiras você pode imitar a coragem",
    title: "Outras coragens do relato",
    body: `
      <ul>
        <li><b>Ficar do lado de quem sofre</b>, como ele fez com o escravo, visitando e ajudando os
        irmãos em dificuldade.</li>
        <li><b>Ser diferente em público.</b> Ele deixou claro de que lado estava. Na escola e no
        trabalho, dizer que é Testemunha de Jeová.</li>
        <li><b>Recomeçar sem amargura</b> quando a vida muda, confiando que Jeová vê.</li>
      </ul>`
  },

  q9: {
    cat: "jeova", para: "Quadro 1",
    quote: "O que esse relato me ensina sobre Jeová?",
    title: "Paciente e treinador",
    body: `
      <p>Jeová não descartou Moisés depois do erro. Ele deu tempo, treinamento e, 40 anos depois, uma
      designação. Ele vê o que a pessoa pode se tornar, e não só o que ela fez de pior.</p>`
  },

  q10: {
    cat: "jeova", para: "Quadro 2",
    quote: "relacionado com o propósito de Jeová",
    title: "O libertador estava sendo formado",
    body: `
      <p>Jeová tinha prometido a Abraão tirar o povo do Egito. Moisés seria o homem usado para isso,
      mas ainda não estava pronto. Os anos em Midiã fazem parte do cumprimento da promessa.</p>`
  },

  q11: {
    cat: "pergunta", para: "Quadro 3",
    quote: "o que eu gostaria de perguntar para ele",
    title: "Ideias de pergunta",
    body: `
      <ul>
        <li>“O que você estava procurando quando olhou para um lado e para o outro?”</li>
        <li>“Do que você mais sentiu falta do palácio nos primeiros anos em Midiã?”</li>
        <li>“Quando você percebeu que a raiva era um problema?”</li>
      </ul>`
  }
};
