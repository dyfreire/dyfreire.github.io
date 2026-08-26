/* ==========================================================================
   Anotações do estudo. Cada chave corresponde a um data-n no texto.
   cat: chave | insight | hoje | jeova | pesquisa | pergunta
   Linguagem simples de propósito: o estudo é para ser conduzido com irmãos
   de todas as idades, inclusive quem tem menos anos de leitura.
   Fontes: jw.org e wol.jw.org (ver rodapé da página).
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que o parágrafo está realmente ensinando" },
  insight:  { label: "Insight",      desc: "O que está por trás do texto e passa batido" },
  hoje:     { label: "Hoje",         desc: "Exemplos do dia a dia, explicados" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o relato revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Dado das publicações citadas nas perguntas" },
  pergunta: { label: "Participação", desc: "Pergunta pronta para dirigir à assistência" }
};

/* Direção do estudo: as cinco etapas do ensino, na ordem em que o capítulo
   as apresenta. Cada anotação é marcada com a etapa que ela serve. */
window.DIRECTION = [
  { n: 1, title: "Guardar o que Jeová já fez",
    line: "A fé de Abraão cresceu porque ele guardou na memória cada coisa que viu Jeová fazer.",
    paras: "P3, P4" },
  { n: 2, title: "Ter uma esperança certa",
    line: "O que ele guardou virou uma esperança firme: Jeová podia ressuscitar Isaque.",
    paras: "P5" },
  { n: 3, title: "Ter coragem de obedecer",
    line: "Essa esperança firme deu coragem para obedecer até o último gesto.",
    paras: "P1, P6" },
  { n: 4, title: "Oferecer a Jeová o melhor",
    line: "Obedecer assim é adoração que Jeová aceita, e ele abençoa quem faz isso.",
    paras: "P7, P9" },
  { n: 5, title: "Ver o coração de Jeová",
    line: "E o monte mostra o que Jeová sentiu ao dar o próprio Filho por nós.",
    paras: "P2, P8" }
];

/* De qual etapa cada parágrafo e cada pergunta faz parte. */
window.STEP_BY_PARA = {
  "P1": 3, "P2": 5, "P3": 1, "P4": 1, "P5": 2, "P6": 3, "P7": 4, "P8": 5, "P9": 4,
  "Para considerar": 3,
  "Analise 1": 1, "Analise 2": 1, "Analise 3": 4, "Analise 4": 1,
  "Medite 1": 2, "Medite 2": 4, "Medite 3": 4, "Medite 4": 4, "Medite 5": 3,
  "Quadro 1": 5, "Quadro 2": 5, "Quadro 3": 2
};

window.NOTES = {

  /* ------------------------------ parágrafo 1 ------------------------------ */

  a1: {
    cat: "chave", para: "P1",
    quote: "DECIDIDO a obedecer a Jeová",
    title: "A decisão veio antes da caminhada",
    body: `
      <p>O capítulo começa com a decisão já tomada. Abraão não saiu de casa para pensar no caminho,
      ele saiu porque já havia resolvido obedecer. <span class="scr" data-ref="1:22:3">Gênesis 22:3</span>
      diz que ele “se levantou de manhã cedo”.</p>
      <h4>Por que isso importa</h4>
      <p>Ele não esperou se sentir corajoso para agir. Primeiro decidiu, depois andou. Quem espera o
      medo passar para começar a obedecer quase nunca começa.</p>`
  },

  a2: {
    cat: "insight", para: "P1",
    quote: "seria a jornada mais difícil de sua longa vida",
    title: "Três dias contra 175 anos de vida",
    body: `
      <p>Abraão viveu 175 anos (<span class="scr" data-ref="1:25:7">Gênesis 25:7</span>). Ele passou
      por fome, mudanças, guerra e uma longa espera por um filho. E o capítulo diz que os dias mais
      difíceis de toda essa vida foram estes três.</p>
      <h4>O que aprendemos</h4>
      <p>Uma prova não é difícil por durar muito. Um período curto pode exigir mais fé do que anos de
      vida tranquila. E foi a fidelidade dos anos anteriores que segurou Abraão nesses três dias.</p>`
  },

  a3: {
    cat: "hoje", para: "P1",
    quote: "Seus passos eram lentos, mas firmes",
    title: "Ir devagar e não voltar atrás",
    body: `
      <p>O texto não diz que Abraão foi rápido nem animado. Diz que ele foi <b>devagar</b> e
      <b>firme</b>. Ele estava sofrendo por dentro, mas continuou na mesma direção.</p>
      <h4>Exemplos de hoje, explicados</h4>
      <ul>
        <li><b>A espera pela cirurgia.</b> O irmão assina o documento dizendo que não aceita
        transfusão de sangue, e a cirurgia é marcada para dez dias depois. Nesses dez dias ele fica
        pensando, a família pergunta se ele tem certeza, o médico insiste. Ele não muda a decisão,
        mas os dias são pesados.</li>
        <li><b>A folga para a assembleia.</b> A irmã pede a folga ao chefe na segunda-feira e a
        resposta só vem na sexta. Ela passa a semana sem saber se vai perder o emprego ou a
        assembleia.</li>
        <li><b>O tempo entre saber e fazer.</b> Você já sabe que precisa conversar com o filho, ou
        procurar um ancião, ou parar com um hábito. Sabe desde o mês passado, e o dia de fazer ainda
        não chegou.</li>
      </ul>
      <h4>O ponto para a assistência</h4>
      <p>A fé é testada justamente nesse tempo de espera, quando ainda não aconteceu nada e a cabeça
      não para de pensar. Não é errado sentir peso, nem ir devagar. O errado seria mudar de direção.
      Abraão levou três dias andando, e nenhum passo foi para trás.</p>`
  },

  /* ------------------------------ parágrafo 2 ------------------------------ */

  a4: {
    cat: "chave", para: "P2",
    quote: "o seu filho, seu único filho, a quem você tanto ama",
    title: "Jeová disse em voz alta o quanto custava",
    body: `
      <p>Leia devagar as três partes do pedido: “seu filho”, depois “seu único filho”, depois “a quem
      você tanto ama”. Jeová podia ter dito apenas “pegue Isaque”. Em vez disso, ele falou
      exatamente o que aquele filho significava para o pai.</p>
      <h4>O que isso mostra</h4>
      <p>Jeová não escondeu o preço nem tentou fazer o pedido parecer pequeno. Depois, o anjo repete
      as mesmas palavras: “não me negou o seu filho, seu único filho”
      (<span class="scr" data-ref="1:22:12">Gênesis 22:12</span>). Quem pede sabendo o tamanho do que
      pede está sendo honesto, não insensível.</p>`
  },

  a5: {
    cat: "jeova", para: "P2",
    quote: "Jeová sabia o quanto Abraão amava Isaque",
    title: "Ele não pediu sem saber o que doía",
    body: `
      <p>É uma frase curta, e ela responde a quem diz que Deus foi cruel. Jeová conhecia o amor
      daquele pai melhor do que o próprio pai.</p>
      <h4>Como a Sentinela explica</h4>
      <p>O artigo “Jeová o chamou de ‘meu amigo’” diz: “Abraão sabia que Jeová, seu Pai no céu, nunca
      pede que seus servos façam alguma coisa que os prejudique para sempre.” E acrescenta que a fé
      dele não era cega: “sua fé o ajudou a ver”.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 4.</p>`
  },

  s9: {
    cat: "chave", para: "P2",
    quote: "Será que Abraão teria a fé e a coragem necessárias para obedecer?",
    title: "O medo não paralisou ele",
    body: `
      <p>Abraão sentia medo, e a Bíblia não esconde isso. Quando desceu ao Egito, ele teve medo de
      que matassem ele para tomar Sara
      (<span class="scr" data-ref="1:12:11-13">Gênesis 12:11-13</span>). O medo tinha motivo real. E
      mesmo assim ele não deixou de obedecer.</p>
      <h4>A diferença que importa</h4>
      <p>Coragem não é a ausência de medo. É continuar obedecendo com medo. O medo dele existiu, mas
      não travou os pés dele.</p>
      <h4>Para a assistência</h4>
      <p>Muitos irmãos se acham fracos porque sentem medo de pregar, medo de falar com o chefe, medo
      de uma cirurgia. Sentir medo não é falta de fé. Parar por causa do medo, sim.</p>
      <p class="srcline">Destaque trazido da preparação em família. Base: A Sentinela, fev. 2016, § 7.</p>`
  },

  a6: {
    cat: "pergunta", para: "P2",
    quote: "Como Deus poderia pedir uma coisa dessas?",
    title: "Pergunta para a assistência",
    body: `
      <p>O capítulo faz a pergunta e não responde na hora. Aproveite: faça a mesma pergunta e espere
      um pouco antes de responder.</p>
      <h4>Como perguntar</h4>
      <p>“O capítulo pergunta uma coisa difícil: como Deus poderia pedir isso? O que Abraão já sabia
      sobre Jeová que o ajudou a não pensar que Deus tinha ficado cruel?”</p>
      <h4>Resposta que você quer ouvir</h4>
      <p>Ele já conhecia Jeová. Sabia que Jeová é justo e misericordioso, por causa de Sodoma, e que
      nada é impossível para ele, por causa do nascimento de Isaque. Os dois parágrafos seguintes dão
      essa resposta.</p>`
  },

  /* ------------------------------ parágrafo 3 ------------------------------ */

  a7: {
    cat: "pesquisa", para: "P3",
    quote: "o pai de todos os que têm fé",
    title: "Por que Paulo o chama assim",
    body: `
      <p>A expressão está em <span class="scr" data-ref="45:4:11">Romanos 4:11</span>. Paulo mostra
      que Abraão foi aprovado por Deus por causa da fé, antes de existir a circuncisão e a Lei. Por
      isso ele é chamado pai de todos os que têm fé, inclusive de quem não é seu descendente de
      sangue.</p>
      <h4>O que o Estudo Perspicaz acrescenta</h4>
      <p>Jesus e seus discípulos falaram de Abraão mais de 70 vezes. Paulo diz que o verdadeiro
      descendente de Abraão é Cristo, junto com os que pertencem a Cristo
      (<span class="scr" data-ref="48:3:16">Gálatas 3:16</span>,
      <span class="scr" data-ref="48:3:29">29</span>). E Tiago o chama de amigo de Jeová
      (<span class="scr" data-ref="59:2:23">Tiago 2:23</span>).</p>
      <p class="srcline">it, verbete “Abraão”, §§ 22-23, seção Historicidade.</p>`
  },

  s1: {
    cat: "insight", para: "P3",
    quote: "Abraão já tinha uma forte fé",
    title: "Como a fé dele foi crescendo",
    body: `
      <p>A Sentinela explica em três passos simples: tudo começa com um pensamento, o pensamento
      produz um sentimento, e o sentimento faz a pessoa agir.</p>
      <ul>
        <li><b>Pensamento:</b> Abraão pensava em Jeová, “o Deus Altíssimo, aquele que fez o céu e a
        terra” (<span class="scr" data-ref="1:14:22">Gênesis 14:22</span>).</li>
        <li><b>Sentimento:</b> isso criou nele um respeito profundo, que a Bíblia chama de temor de
        Deus (<span class="scr" data-ref="19:25:14">Salmo 25:14</span>).</li>
        <li><b>Ação:</b> esse respeito o fez obedecer.</li>
      </ul>
      <h4>Para aplicar</h4>
      <p>Ninguém fica corajoso de repente. Primeiro a pessoa pensa em Jeová, depois passa a
      respeitá-lo de coração, e então consegue agir. Quem nunca para para pensar nele fica sem o
      primeiro passo.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 6.</p>`
  },

  s2: {
    cat: "hoje", para: "P3",
    quote: "Jeová o ajudou a fortalecê-la ainda mais",
    title: "Ele viu com os próprios olhos o resultado de obedecer",
    body: `
      <p>Jeová não mandou Abraão obedecer e depois o deixou sozinho. Quando ele saiu de Ur e passou a
      morar em tendas, teve medo de que alguém levasse Sara e o matasse. Ele obedeceu do mesmo jeito,
      e Jeová protegeu os dois de modo milagroso, mais de uma vez
      (<span class="scr" data-ref="1:12:17-20">Gênesis 12:17-20</span>;
      <span class="scr" data-ref="1:20:3-7">20:3-7</span>).</p>
      <h4>Como isso funciona hoje</h4>
      <ul>
        <li><b>Você lembra de uma vez em que obedeceu e deu certo.</b> Recusou um trabalho que ia
        tomar todos os domingos e depois apareceu outro. Ficou firme numa decisão de família e mais
        tarde viu o resultado bom.</li>
        <li><b>Essa lembrança serve para a próxima vez.</b> Quando a obediência custar caro de novo,
        você não começa do zero: já tem uma prova sua de que valeu a pena.</li>
      </ul>
      <h4>Dica de condução</h4>
      <p>Peça a alguém da assistência para contar, em poucas palavras, uma vez em que obedeceu a
      Jeová e depois viu a ajuda dele. É esse tipo de lembrança que Abraão levou para o monte.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 7.</p>`
  },

  a8: {
    cat: "chave", para: "P3",
    quote: "as cidades de Sodoma e Gomorra",
    title: "Primeira lição que ele guardou",
    body: `
      <p>Este é o primeiro dos dois casos que o capítulo lembra. Abraão perguntou a Jeová se ele
      destruiria as pessoas boas junto com as más, e Jeová respondeu com paciência, aceitando poupar
      a cidade até por causa de dez justos
      (<span class="scr" data-ref="1:18:22-33">Gênesis 18:22-33</span>).</p>
      <h4>O que ele levou dali</h4>
      <p>A frase que fecha o parágrafo: “Jeová é justo e misericordioso.” Guarde essa frase, ela é
      uma das duas bases do capítulo.</p>`
  },

  s11: {
    cat: "hoje", para: "P3",
    quote: "Abraão ficou muito preocupado",
    title: "Oração é igual a amizade",
    body: `
      <p>A Sentinela observa que Abraão “ficava à vontade para abrir seu coração a Jeová e pedir
      ajuda”. Ele não falava com Deus apenas em ocasiões formais: contava o que sentia.</p>
      <h4>A conta é simples</h4>
      <p><b>Oração = amizade.</b> Amigos conversam. Quem só fala com Jeová em emergência tem uma
      amizade fraca, do mesmo jeito que acontece entre pessoas.</p>
      <h4>Como aplicar</h4>
      <ul>
        <li>Falar com Jeová sobre coisas pequenas do dia, não só sobre problemas grandes.</li>
        <li>Dizer a ele o que está incomodando, com todas as palavras, como Abraão fez sobre
        Sodoma.</li>
        <li>Agradecer por coisas concretas da semana. Isso ajuda a guardar o que ele fez, que é a
        primeira etapa deste estudo.</li>
      </ul>
      <p class="srcline">Destaque trazido da preparação em família. Base: A Sentinela, fev. 2016,
      § 11.</p>`
  },

  a9: {
    cat: "insight", para: "P3",
    quote: "Jeová foi paciente",
    title: "Sodoma foi o treino para Moriá",
    body: `
      <p>Na hora, aquela conversa sobre Sodoma parecia não ter ligação com nada. Era sobre outras
      pessoas, em outra cidade.</p>
      <h4>O ponto</h4>
      <p>Foi ali que Abraão aprendeu como Jeová decide: ele olha cada coração e procura quem pode
      salvar. Vinte e cinco anos depois, foi esse conhecimento que impediu Abraão de pensar que Deus
      tinha se tornado outra pessoa. As provas grandes são respondidas com o que a gente aprendeu nas
      pequenas.</p>`
  },

  a10: {
    cat: "hoje", para: "P3",
    quote: "perguntou a Jeová",
    title: "Levar a dúvida a Jeová, e não ficar com ela",
    body: `
      <p>Abraão levou a preocupação direto a Jeová, com respeito, chamando-o de “o Juiz de toda a
      terra”. Ele não guardou a dúvida por dentro nem saiu comentando com outros.</p>
      <h4>Exemplos de hoje, explicados</h4>
      <ul>
        <li><b>Uma orientação que você não entendeu.</b> Em vez de comentar no grupo da família ou
        ficar remoendo sozinho, ore sobre o assunto e converse com um ancião.</li>
        <li><b>Uma perda difícil.</b> Morreu alguém que você amava e vem a pergunta “por que Jeová
        permitiu?”. Essa pergunta pode ser dita a ele em oração, com todas as palavras.</li>
        <li><b>Uma oração que parece sem resposta.</b> Você pode contar isso a Jeová, como Abraão
        contou o que sentia.</li>
      </ul>
      <p>Jeová não brigou com Abraão por causa da pergunta. Ele respondeu com paciência.</p>`
  },

  a11: {
    cat: "chave", para: "P3",
    quote: "Jeová é justo e misericordioso",
    title: "Base 1 de 2",
    body: `
      <p>Esta é metade da resposta do capítulo à pergunta “de onde veio a coragem dele”. Anote a
      frase do jeito que está: <b>Jeová é justo e misericordioso</b>.</p>
      <p>A outra metade vem no parágrafo seguinte: <b>para Jeová, nada é impossível</b>. Juntas, as
      duas explicam a conclusão do parágrafo 5.</p>`
  },

  /* ------------------------------ parágrafo 4 ------------------------------ */

  a12: {
    cat: "chave", para: "P4",
    quote: "para Jeová, nada é impossível",
    title: "Base 2 de 2",
    body: `
      <p>A segunda lição guardada, e a mais importante para o monte. Sara tinha quase 90 anos, Abraão
      quase 100, e Isaque nasceu.</p>
      <h4>Onde isso volta</h4>
      <p>No parágrafo 5, quando ele conclui que Jeová podia ressuscitar Isaque. Ressurreição não era
      ideia nova para ele: era o mesmo poder de Deus que ele já tinha visto no nascimento do filho,
      usado mais uma vez.</p>`
  },

  a13: {
    cat: "pesquisa", para: "P4",
    quote: "como que morto",
    title: "A expressão é de Paulo",
    body: `
      <p>Vem de <span class="scr" data-ref="45:4:19">Romanos 4:19</span>: Abraão “não deixou de
      considerar o seu próprio corpo, já sem vitalidade, tendo ele cerca de cem anos de idade”. Ou
      seja, ele não fingiu que o problema não existia. Olhou os fatos e confiou em Jeová do mesmo
      jeito.</p>
      <p><span class="scr" data-ref="45:4:18">Romanos 4:18</span> mostra a ordem: “Baseado na
      esperança, ele teve fé.” Primeiro a esperança, depois a fé que age.</p>`
  },

  a14: {
    cat: "insight", para: "P4",
    quote: "guardou na mente e no coração",
    title: "Aqui a fé é memória guardada",
    body: `
      <p>Duas vezes o capítulo usa essa ideia: Abraão “nunca se esqueceu da lição” (P3) e “guardou na
      mente e no coração” (P4).</p>
      <h4>O que isso significa na prática</h4>
      <p>A fé dele funcionava como uma caderneta de coisas que Jeová já tinha feito. Por isso o
      último parágrafo manda meditar no passado: quem não guarda nada não tem de onde tirar coragem
      depois.</p>
      <h4>Sugestão simples</h4>
      <p>Vale escrever num papel, ou no fim da Bíblia, uma lista curta das vezes em que você viu
      Jeová ajudar. É a caderneta de Abraão, na sua versão.</p>
      <p>Um detalhe que vale dizer: não basta pensar “Jeová me ajudou”. Pare e responda <b>como</b>
      ele ajudou e <b>que lição</b> ficou. É assim que a lembrança fica guardada e serve na próxima
      dificuldade.</p>`
  },

  /* ------------------------------ parágrafo 5 ------------------------------ */

  a15: {
    cat: "insight", para: "P5",
    quote: "cerca de 25 anos depois",
    title: "Vinte e cinco anos de convivência",
    body: `
      <p>Entre o nascimento de Isaque e o pedido em Moriá passaram uns 25 anos. Isaque já era um
      rapaz de mais ou menos 25 anos, e Abraão tinha por volta de 125.</p>
      <h4>Duas coisas que isso mostra</h4>
      <ul>
        <li>Não era o amor por um bebê recém-nascido. Eram 25 anos de convivência todos os dias.</li>
        <li>As lições de Sodoma e do nascimento de Isaque já eram lembranças antigas. Mesmo assim,
        ainda funcionaram na hora do aperto.</li>
      </ul>`
  },

  a16: {
    cat: "chave", para: "P5",
    quote: "Ele chegou à seguinte conclusão",
    title: "Ele pensou, não obedeceu no automático",
    body: `
      <p>A palavra é “conclusão”. <span class="scr" data-ref="58:11:19">Hebreus 11:19</span>
      confirma: “ele concluiu que Deus era capaz de levantar Isaque até mesmo dentre os mortos”.</p>
      <h4>Contra a ideia de fé cega</h4>
      <p>A Sentinela é direta: “Abraão não obedeceu a Deus sem pensar, ele não tinha uma fé cega.
      Pelo contrário, sua fé o ajudou a ver.” Ele juntou o que sabia sobre Jeová e tirou uma
      conclusão.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 4.</p>`
  },

  s4: {
    cat: "insight", para: "P5",
    quote: "essas lições com certeza passaram várias vezes pela mente de Abraão",
    title: "Ele estava lembrando de um amigo antigo",
    body: `
      <p>A Sentinela descreve a subida assim: Abraão “teve bastante tempo para relembrar o que ele
      sabia sobre seu grande amigo, Jeová”. E faz a pergunta certa: será que ele achou que esse amigo
      tinha mudado de uma hora para outra e ficado cruel? Para Abraão, essa ideia era absurda.</p>
      <h4>Por que isso ajuda a gente</h4>
      <p>Quando vem uma dificuldade que não faz sentido, a tentação é pensar que Jeová mudou, ou que
      ele deixou de gostar de nós. Abraão tinha tanta convivência com Deus que essa conclusão nem
      passou pela cabeça dele. É a diferença entre conhecer alguém de longe e conhecer de perto.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 12.</p>`
  },

  a17: {
    cat: "hoje", para: "P5",
    quote: "Foi essa esperança que deu a Abraão a coragem",
    title: "Quando a perda é temporária, dá para encarar",
    body: `
      <p>Esta é a parte mais importante do capítulo. A esperança de Abraão tinha nome: a ressurreição.
      Se Jeová podia trazer Isaque de volta, então a perda não seria para sempre. Foi isso que o fez
      conseguir subir o monte.</p>
      <h4>Como isso vale para nós, com exemplos</h4>
      <ul>
        <li><b>A morte de quem amamos.</b> A dor é a mesma e o choro é o mesmo. A diferença é saber
        que a separação tem prazo, porque haverá ressurreição. Quem crê nisso chora, mas não desiste
        de servir a Jeová.</li>
        <li><b>Uma decisão no hospital.</b> Respeitar a lei de Deus sobre o sangue fica possível
        quando a pessoa entende que, mesmo no pior caso, Jeová pode devolver a vida.</li>
        <li><b>Perder algo material por ser honesto.</b> Emprego, promoção, um negócio. Tudo isso é
        temporário. A amizade com Jeová não é.</li>
      </ul>
      <h4>Para dizer à assistência</h4>
      <p>Ninguém consegue ser corajoso diante de uma perda que considera definitiva. Quando a pessoa
      entende que a perda é temporária, a coragem aparece. Foi assim com Abraão, e é assim com a
      gente. Veja a imagem C do capítulo: o viúvo olhando a foto do casamento e se vendo com a esposa
      no Paraíso.</p>`
  },

  /* ------------------------------ parágrafo 6 ------------------------------ */

  a18: {
    cat: "insight", para: "P6",
    quote: "Abraão disse que tanto ele como Isaque voltariam",
    title: "Ele não estava mentindo para os servos",
    body: `
      <p>As palavras estão em <span class="scr" data-ref="1:22:5">Gênesis 22:5</span>: “Fiquem aqui
      com o jumento enquanto eu e o rapaz vamos até lá para adorar; depois retornaremos a vocês.”</p>
      <h4>Como se explica</h4>
      <p>Se ele sabia que Isaque seria sacrificado, por que disse que os dois voltariam? Porque
      contava com a ressurreição (<span class="scr" data-ref="58:11:19">Hebreus 11:19</span>). Não
      era mentira, era fé dita em voz alta.</p>
      <h4>E logo antes</h4>
      <p>Isaque perguntou onde estava a ovelha, e o pai respondeu: “o próprio Deus providenciará a
      ovelha para a oferta queimada” (<span class="scr" data-ref="1:22:8">Gênesis 22:8</span>). Sem
      saber, ele disse exatamente o que ia acontecer.</p>`
  },

  a19: {
    cat: "hoje", para: "P6",
    quote: "Isaque deixou que seu idoso pai o amarrasse",
    title: "A coragem do jovem também conta",
    body: `
      <p>Isaque tinha uns 25 anos e estava forte. O pai tinha uns 125. Se quisesse, o rapaz poderia
      ter se soltado a qualquer momento. Ele não fez isso.</p>
      <h4>O que isso mostra</h4>
      <p>O Estudo Perspicaz observa que Isaque, ainda jovem, mostrou fé e obediência “por permitir
      que suas mãos e pés fossem amarrados”. Essa obediência é resultado de 25 anos de ensino dentro
      de casa, e não de uma conversa no caminho.</p>
      <h4>Como aparece hoje, explicado</h4>
      <ul>
        <li><b>O filho ou o neto que aceita a orientação.</b> Ele poderia bater o pé e fazer o que
        quer, mas escolhe ouvir os pais. Isso também é coragem.</li>
        <li><b>O jovem na escola.</b> Não participar de uma festa ou de uma comemoração diante da
        turma inteira custa muito para a idade dele.</li>
        <li><b>Para pais e avós:</b> o filho vai obedecer na hora difícil se foi ensinado nos anos
        calmos. O trabalho é feito antes, não durante.</li>
      </ul>
      <p class="srcline">it, verbete “Abraão”, § 22.</p>`
  },

  a20: {
    cat: "chave", para: "P6",
    quote: "Abraão pegou a faca, estendeu o braço",
    title: "Obediência até o fim, sem meio caminho",
    body: `
      <p>Ele foi até o último gesto possível.
      <span class="scr" data-ref="1:22:10">Gênesis 22:10</span> é claro: “Abraão estendeu então a mão
      e pegou a faca para matar seu filho.”</p>
      <h4>O ponto para a consideração</h4>
      <p>Quem obedece pela metade, esperando que Deus interrompa antes, não chega ao ponto em que
      Deus age. A ajuda veio no último instante, e o carneiro apareceu depois, não antes
      (<span class="scr" data-ref="1:22:13">Gênesis 22:13</span>).</p>`
  },

  a21: {
    cat: "jeova", para: "P6",
    quote: "Não fira o rapaz",
    title: "Jeová interrompe e diz o motivo",
    body: `
      <p>A frase completa está em <span class="scr" data-ref="1:22:12">Gênesis 22:12</span>: “Não
      fira o rapaz e não lhe faça absolutamente nada, pois agora eu sei que você teme a Deus.”</p>
      <h4>Três coisas nessa cena</h4>
      <ul>
        <li><b>Jeová nunca quis a morte de Isaque.</b> O pedido tinha outro objetivo, que Abraão só
        entenderia depois.</li>
        <li><b>Ele mesmo providenciou o substituto.</b> Um carneiro preso pelos chifres numa moita
        (<span class="scr" data-ref="1:22:13">v. 13</span>), e o lugar ficou conhecido como
        Jeová-Jiré, “no monte de Jeová se providenciará”
        (<span class="scr" data-ref="1:22:14">v. 14</span>).</li>
        <li><b>Ele reconheceu o que aquilo custou.</b> “Agora eu sei” não quer dizer que Deus
        descobriu algo novo, mas que a lealdade de Abraão ficou provada na prática.</li>
      </ul>`
  },

  /* ------------------------------ parágrafo 7 ------------------------------ */

  a22: {
    cat: "jeova", para: "P7",
    quote: "Deus elogiou a fé e a obediência",
    title: "A resposta de Jeová foi dar mais garantia ainda",
    body: `
      <p>Jeová não só aprovou, ele jurou.
      <span class="scr" data-ref="1:22:16">Gênesis 22:16</span>: “Juro por mim mesmo, diz Jeová, que,
      visto que você fez isso e não me negou seu filho, seu único filho...”</p>
      <h4>Por que isso chama atenção</h4>
      <p>Jeová não precisa jurar para cumprir o que diz. O juramento é para o benefício de quem ouve,
      como explica <span class="scr" data-ref="58:6:17">Hebreus 6:17</span>: para que os herdeiros da
      promessa tivessem “plena certeza”.</p>`
  },

  a23: {
    cat: "pesquisa", para: "P7",
    quote: "todas as nações da terra",
    title: "Aqui a promessa chega até nós",
    body: `
      <p>A frase é de <span class="scr" data-ref="1:22:18">Gênesis 22:18</span>: “todas as nações da
      terra obterão para si uma bênção por meio do seu descendente, porque você escutou a minha
      voz.”</p>
      <h4>Quem é esse descendente</h4>
      <p>Paulo responde: é Cristo, junto com os que pertencem a Cristo
      (<span class="scr" data-ref="48:3:16">Gálatas 3:16</span>,
      <span class="scr" data-ref="48:3:29">29</span>).</p>
      <h4>O que diz o quadro do Despertai!</h4>
      <p>“O principal motivo de Deus ter feito dos descendentes de Abraão uma nação foi produzir o
      Messias, o qual daria sua vida em favor de toda a humanidade. Assim, você está envolvido nessa
      promessa de Deus a Abraão!”</p>
      <p class="srcline">Despertai! 5/2012, p. 17, quadro “Uma bênção para ‘todas as nações’”.</p>`
  },

  /* ------------------------------ parágrafo 8 ------------------------------ */

  a24: {
    cat: "chave", para: "P8",
    quote: "nos dá uma ideia do que o próprio Jeová teria de passar",
    title: "A segunda lição do capítulo",
    body: `
      <p>Até aqui o relato explicava como um homem consegue ter coragem. Nesta frase o assunto muda:
      o relato também mostra o que a nossa salvação custou a Deus.</p>
      <h4>O contraste que fecha tudo</h4>
      <p>Abraão desceu o monte com o filho vivo do lado. Jeová não teve essa saída. O sacrifício que
      foi interrompido em Moriá foi levado até o fim no caso de Jesus.</p>
      <p>Se você só puder deixar um ponto na mente da assistência, deixe este.</p>`
  },

  a25: {
    cat: "jeova", para: "P8",
    quote: "Jeová estava disposto a oferecer seu Filho unigênito, Jesus",
    title: "João 3:16 lido depois de Moriá",
    body: `
      <p><span class="scr" data-ref="43:3:16">João 3:16</span> é um texto que muita gente sabe de
      cor, e por isso ele perde a força. Moriá devolve o peso: “seu Filho unigênito” lembra “seu
      único filho” de <span class="scr" data-ref="1:22:2">Gênesis 22:2</span>.</p>
      <h4>Uma frase para usar</h4>
      <p>Abraão sentiu por três dias o que Jeová sentiu por seu Filho. E Abraão ainda desceu o monte
      com Isaque vivo.</p>`
  },

  s5: {
    cat: "jeova", para: "P8",
    quote: "Quando meditamos no quanto seria difícil para Abraão oferecer esse sacrifício",
    title: "O que Abraão vai descobrir na ressurreição",
    body: `
      <p>A Sentinela conta o que espera Abraão no futuro. Ele vai saber que, quando recebeu Isaque de
      volta, aquilo ilustrou algo muito maior. E vai saber que a dor que sentiu ao preparar o
      sacrifício “ajudou milhões de pessoas a entender o que o próprio Jeová sentiu ao dar seu Filho,
      Jesus Cristo, como resgate”.</p>
      <p>Ele também vai ver a cidade que esperava, o Reino de Deus
      (<span class="scr" data-ref="58:11:10">Hebreus 11:10</span>).</p>
      <h4>Para a assistência</h4>
      <p>A dor de um pai fiel, há quase 4.000 anos, virou a melhor explicação do amor de Deus para
      nós. Nada do que sofremos em fidelidade é desperdiçado.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 16.</p>`
  },

  a26: {
    cat: "pergunta", para: "P8",
    quote: "também aprendemos o quanto Jeová nos ama",
    title: "Pergunta para a assistência",
    body: `
      <h4>Como perguntar</h4>
      <p>“Este relato é lido normalmente como uma lição sobre a fé de Abraão. Segundo o parágrafo, o
      que ele também nos ensina sobre os sentimentos de Jeová?”</p>
      <h4>Onde está a resposta</h4>
      <p>No próprio parágrafo: assim como foi difícil para Abraão, Jeová estava disposto a dar o
      Filho. Quando pensamos no que custou a Abraão, entendemos melhor o amor de Deus.</p>
      <h4>Se quiser ir além</h4>
      <p>Pergunte: “quem passou pela situação mais difícil, Abraão ou Jeová? Por quê?” A resposta se
      responde sozinha, e toca o coração.</p>`
  },

  /* ------------------------------ parágrafo 9 ------------------------------ */

  a27: {
    cat: "chave", para: "P9",
    quote: "nossa fé vai aumentar se meditarmos no que Jeová fez no passado",
    title: "A lição central, em uma linha",
    body: `
      <p>Aqui está a receita do capítulo: pensar no que Jeová já fez aumenta a fé, e a fé aumentada
      dá coragem. Foi exatamente o que aconteceu com Abraão nos parágrafos 3 a 5.</p>
      <h4>Meditar é o quê, na prática</h4>
      <p>Não é apenas ler. É voltar em casos concretos, da Bíblia e da sua própria vida, até que eles
      fiquem à mão na hora de decidir, como estavam para Abraão depois de 25 anos.</p>`
  },

  s10: {
    cat: "chave", para: "P9",
    quote: "E, se nossa fé aumentar, nossa coragem também vai",
    title: "A conta do estudo: conhecimento mais obediência",
    body: `
      <p>A Sentinela resume assim: “Quanto mais aumentamos em conhecimento e vemos na prática os
      resultados de nossa obediência, mais fortes ficam a nossa fé em Jeová e nossa amizade com
      ele.”</p>
      <h4>A conta, para escrever no quadro ou dizer em voz alta</h4>
      <p><b>Conhecimento + obediência (isso é sabedoria) = fé forte.</b></p>
      <ul>
        <li><b>Só conhecimento</b>, sem obedecer, não produz fé. A pessoa sabe muito e continua com
        medo.</li>
        <li><b>Só esforço</b>, sem conhecer Jeová, não sustenta na hora difícil. Falta o motivo.</li>
        <li><b>Os dois juntos</b> é o que a Bíblia chama de sabedoria, e é isso que fortalece a fé e
        a amizade com Deus.</li>
      </ul>
      <p>Foi essa conta que Abraão fez durante uma vida inteira antes de chegar a Moriá.</p>
      <p class="srcline">Destaque trazido da preparação em família. Base: A Sentinela, fev. 2016,
      § 8.</p>`
  },

  a28: {
    cat: "hoje", para: "P9",
    quote: "Ele nunca mais pediu para alguém sacrificar o próprio filho",
    title: "O alívio que o capítulo faz questão de dar",
    body: `
      <p>O parágrafo responde a um medo que muita gente tem: “será que Deus vai me pedir algo assim?”
      A resposta é não. Aquele pedido foi único na história e nunca se repetiu.</p>
      <h4>Cuidado ao dar exemplos</h4>
      <p>Ao usar situações de hoje, deixe claro que Jeová não testa ninguém daquela maneira. O que
      continua valendo é o princípio: qualquer coisa que Deus pedir, a fé nele dá coragem para
      obedecer.</p>`
  },

  s6: {
    cat: "hoje", para: "P9",
    quote: "Não precisamos ficar preocupados",
    title: "O que Deus pede de nós hoje, na prática",
    body: `
      <p>A Sentinela diz o que Deus pede hoje: “que sejamos obedientes mesmo quando suas ordens são
      difíceis de cumprir ou quando não entendemos os motivos delas”. E dá exemplos simples:</p>
      <ul>
        <li><b>Quem é mais tímido</b> acha difícil pregar. Falar com um desconhecido custa muito para
        essa pessoa.</li>
        <li><b>Quem estuda ou trabalha</b> precisa de coragem para ser diferente dos colegas
        (<span class="scr" data-ref="2:23:2">Êxodo 23:2</span>;
        <span class="scr" data-ref="52:2:2">1 Tessalonicenses 2:2</span>).</li>
        <li><b>Quem já tem idade</b> encara outras dificuldades: chegar às reuniões, a saúde, a
        distância dos filhos, depender de outros para se locomover. Continuar servindo assim também é
        obedecer quando é difícil.</li>
      </ul>
      <h4>A frase que fecha</h4>
      <p>“Será que de vez em quando você se sente como Abraão subindo aquela montanha, pensando em
      como vai fazer algo que parece além do seu alcance? Então, não desanime! Imite a fé de Abraão.”
      (<span class="scr" data-ref="58:12:1">Hebreus 12:1, 2</span>)</p>
      <p class="srcline">A Sentinela, fev. 2016, § 14.</p>`
  },

  s3: {
    cat: "hoje", para: "P9",
    quote: "Mas podemos ter certeza de uma coisa",
    title: "Hoje temos mais recursos do que Abraão tinha",
    body: `
      <p>A Sentinela faz uma comparação animadora: Abraão não tinha a Bíblia inteira, como nós temos.
      Ele aprendeu sobre Jeová por conversas e pelo que viu acontecer.</p>
      <h4>O que está na nossa mão hoje</h4>
      <ul>
        <li><b>A Bíblia completa</b>, com o registro de milhares de anos de atos de Jeová.</li>
        <li><b>As publicações e as reuniões</b>, que explicam esses relatos em linguagem simples.</li>
        <li><b>A própria experiência</b>, cada vez que obedecemos e vemos o resultado
        (<span class="scr" data-ref="19:34:8">Salmo 34:8</span>).</li>
      </ul>
      <h4>Conclusão para a assistência</h4>
      <p>Se Abraão conseguiu ter aquela fé com muito menos informação, nós temos todos os motivos
      para ter coragem hoje. O que falta normalmente não é material: é parar para pensar no que já
      temos.</p>
      <p class="srcline">A Sentinela, fev. 2016, § 8.</p>`
  },

  a29: {
    cat: "chave", para: "P9",
    quote: "não importa o que Deus peça para nós",
    title: "O princípio que continua valendo",
    body: `
      <p>A promessa do capítulo não é que os pedidos serão fáceis. É que a fé chega junto com eles. E
      o fecho liga obediência a bênção: “nossa obediência a Jeová vai nos trazer bênçãos que nem
      podemos imaginar.”</p>`
  },

  s7: {
    cat: "chave", para: "P9",
    quote: "a fé que temos nele vai nos dar a coragem para obedecer",
    title: "Amizade com Jeová é planta, não joia guardada",
    body: `
      <p>A Sentinela usa uma comparação fácil de lembrar. Amizade não é como uma joia que se guarda
      na gaveta; é como uma planta, que precisa de cuidado para continuar viva
      (<span class="scr" data-ref="20:17:17">Provérbios 17:17</span>).</p>
      <h4>Como Abraão cuidava dessa amizade</h4>
      <ul>
        <li>Ele nunca achou que já tinha obedecido o bastante.</li>
        <li>Seguia a orientação de Jeová nas decisões grandes e nas pequenas.</li>
        <li>Aos 99 anos, quando recebeu a ordem da circuncisão, obedeceu “naquele mesmo dia”
        (<span class="scr" data-ref="1:17:23">Gênesis 17:23</span>).</li>
      </ul>
      <h4>Pergunta prática</h4>
      <p>O que eu fiz esta semana para cuidar dessa amizade? Oração, leitura, uma conversa sobre
      Jeová com alguém, presença na reunião.</p>
      <p class="srcline">A Sentinela, fev. 2016, §§ 9, 10.</p>`
  },

  s8: {
    cat: "insight", para: "P9",
    quote: "bênçãos que nem podemos imaginar",
    title: "No fim da vida, ele não se arrependeu de nada",
    body: `
      <p>A Bíblia diz como Abraão terminou: “Abraão deu seu último suspiro e morreu numa boa velhice,
      idoso e satisfeito” (<span class="scr" data-ref="1:25:8">Gênesis 25:8</span>). Aos 175 anos, ele
      olhou para trás satisfeito.</p>
      <h4>O que isso diz para nós</h4>
      <p>Nenhuma obediência que custou caro apareceu depois como arrependimento na vida dele. Não
      existe um momento em que Abraão pensou: eu obedeci demais. E Jeová não se esquece do que
      fazemos por amor ao nome dele
      (<span class="scr" data-ref="58:6:10">Hebreus 6:10</span>).</p>
      <p class="srcline">A Sentinela, fev. 2016, § 15.</p>`
  },

  n1: {
    cat: "chave", para: "P9",
    quote: "E nossa obediência a Jeová vai nos trazer",
    title: "Ele não passou a vida perguntando “por quê”",
    body: `
      <p>Repare numa coisa: Abraão nunca soube, enquanto vivia, por que Jeová pediu aquilo. Ele
      desceu o monte, viveu 50 anos mais, e ficou sem a explicação. E não se atormentou com isso.</p>
      <h4>A comparação que ajuda</h4>
      <p>Vinte e cinco anos antes, no caso de Sodoma, ele fez perguntas a Jeová e recebeu resposta.
      Agora, no caso mais difícil, ele obedeceu sem entender e continuou servindo do mesmo jeito.</p>
      <h4>Aplicação</h4>
      <p>Talvez você esteja numa situação que não vai mudar neste sistema: uma doença, uma perda, uma
      mudança difícil no serviço a Jeová. Em vez de gastar as forças perguntando “por que isso
      aconteceu comigo?”, faça como Abraão: continue servindo. Na ressurreição ele vai receber a
      explicação, e nós também.</p>
      <p class="srcline">Ponto levantado na consideração ao vivo desta matéria.</p>`
  },

  n2: {
    cat: "jeova", para: "P6",
    quote: "Havia chegado a hora",
    title: "Jeová confia em quem é leal",
    body: `
      <p>Uma prova assim também diz algo sobre a confiança de Jeová. Ele não coloca ninguém numa
      situação maior do que a pessoa pode suportar
      (<span class="scr" data-ref="46:10:13">1 Coríntios 10:13</span>).</p>
      <h4>O que isso quer dizer</h4>
      <p>Quando Jeová permite que uma prova chegue até nós, é porque ele acredita que podemos ser
      leais até o fim. Ele conhece nossos limites melhor do que nós.</p>
      <h4>Para dizer à assistência</h4>
      <p>Uma prova difícil não é sinal de que Jeová se esqueceu de você. Pode ser sinal do contrário:
      ele confia em você.</p>
      <p class="srcline">Ponto levantado na consideração ao vivo desta matéria.</p>`
  },

  n5: {
    cat: "hoje", para: "P2",
    quote: "Abraão não parava de pensar no que Jeová tinha pedido para ele fazer",
    title: "Jeová acima até dos laços de família",
    body: `
      <p>O pedido tocava no ponto mais sensível que existe: o filho. Para Abraão, a relação com Jeová
      vinha antes até do laço familiar mais forte.</p>
      <h4>Como isso aparece hoje</h4>
      <ul>
        <li><b>Um parente que não é Testemunha convida para uma comemoração.</b> Dizer não pode
        causar mágoa na família.</li>
        <li><b>Um filho ou irmão que foi desassociado.</b> Seguir a orientação da Bíblia dói, e
        parentes podem não entender.</li>
        <li><b>Uma decisão de vida:</b> mudar de cidade para onde há mais necessidade, e ouvir da
        família que você está abandonando todos.</li>
      </ul>
      <p>Se a nossa relação com Jeová for a mais forte, passamos por esse teste como Abraão passou.</p>
      <p class="srcline">Ponto levantado na consideração ao vivo desta matéria.</p>`
  },

  n6: {
    cat: "insight", para: "P1",
    quote: "rumo ao lugar que Jeová tinha dito para ele ir",
    title: "Ele era um homem decidido, e não olhava para trás",
    body: `
      <p>Isso já era o jeito dele. Abraão tinha posição e recursos em Ur, e saiu de lá para viver em
      tendas. É como quem atravessa uma ponte e derruba a ponte atrás de si: não fica pensando em
      voltar.</p>
      <h4>Onde se vê isso no relato</h4>
      <ul>
        <li>Saiu de manhã cedo, sem discutir
        (<span class="scr" data-ref="1:22:3">Gênesis 22:3</span>).</li>
        <li>Andou três dias sem mudar de rumo.</li>
        <li>No monte, foi até o último gesto.</li>
      </ul>
      <h4>Aplicação</h4>
      <p>Depois de tomar uma decisão certa, ficar olhando para trás só gasta a pessoa. Decidiu servir
      a Jeová num lugar novo, decidiu recusar um trabalho, decidiu simplificar? Não abra a discussão
      de novo dentro da própria cabeça toda semana.</p>
      <p class="srcline">Ponto levantado na consideração ao vivo desta matéria.</p>`
  },

  /* ------------------------- pergunta: para considerar ------------------------- */

  q1: {
    cat: "pergunta", para: "Para considerar",
    quote: "De que maneiras Abraão mostrou coragem nessa época de sua vida?",
    title: "Seis maneiras, em cinco parágrafos",
    body: `
      <p>A palavra “maneiras” está no plural de propósito. A coragem dele aparece em atos
      diferentes:</p>
      <ul>
        <li><b>Coragem de começar (P1).</b> Partiu decidido e se levantou de manhã cedo
        (<span class="scr" data-ref="1:22:3">Gênesis 22:3</span>).</li>
        <li><b>Coragem de continuar por dias (P1).</b> Coragem de momento dura minutos; a dele durou
        a viagem inteira.</li>
        <li><b>Coragem de encarar a pergunta difícil (P2, P3).</b> Pensou “como Deus poderia pedir
        isso?” e seguiu, porque em Sodoma já havia aprendido que se pode levar a dúvida a Jeová.</li>
        <li><b>Coragem de pensar em vez de travar (P5).</b> Juntou o que sabia e concluiu que haveria
        ressurreição (<span class="scr" data-ref="58:11:19">Hebreus 11:19</span>).</li>
        <li><b>Coragem de falar com convicção antes de ver o resultado (P6).</b> “Depois retornaremos
        a vocês” e “o próprio Deus providenciará a ovelha”
        (<span class="scr" data-ref="1:22:5">Gênesis 22:5</span>,
        <span class="scr" data-ref="1:22:8">8</span>).</li>
        <li><b>Coragem de ir até o fim (P6).</b> Amarrou, colocou no altar, pegou a faca e estendeu o
        braço.</li>
      </ul>
      <h4>Para somar</h4>
      <p>A coragem de Isaque, que se deixou amarrar podendo resistir, e a coragem de Abraão em Ur,
      onde ele recusou a idolatria da própria família. E lembre: ele sentia medo, mas o medo não
      paralisou ele.</p>`
  },

  /* ---------------------- perguntas: analise mais a fundo ---------------------- */

  q2: {
    cat: "pesquisa", para: "Analise 1",
    quote: "Como sabemos que Abraão realmente existiu?",
    title: "Provas de que Abraão foi pessoa real",
    body: `
      <h4>Quadro do Despertai!, “Abraão, uma pessoa real”</h4>
      <ul>
        <li>Tabuinhas de argila do início do segundo milênio AEC (antes da Era Comum) trazem nomes de cidades
        iguais aos nomes de parentes de Abraão: Pelegue, Serugue, Naor, Tera e Harã
        (<span class="scr" data-ref="1:11:17-26">Gênesis 11:17-26</span>).</li>
        <li>As ruínas de “Ur dos Caldeus”, de onde a família saiu, foram encontradas no sudeste do
        Iraque (<span class="scr" data-ref="1:11:31">Gênesis 11:31</span>).</li>
        <li>Harã, onde Tera morreu, provavelmente fica hoje na Turquia. Hébron, onde Sara morreu, é
        uma das cidades habitadas mais antigas do Oriente Médio
        (<span class="scr" data-ref="1:11:32">Gênesis 11:32</span>;
        <span class="scr" data-ref="1:23:2">23:2</span>).</li>
      </ul>
      <h4>Estudo Perspicaz, seção Historicidade</h4>
      <ul>
        <li>Jesus e seus discípulos falaram de Abraão mais de 70 vezes.</li>
        <li>Paulo usa a vida dele para ensinar que a pessoa é aprovada por Deus pela fé
        (<span class="scr" data-ref="45:4:1-12">Romanos 4:1-12</span>).</li>
        <li>A arqueologia confirma costumes que aparecem no relato: a compra de um campo dos hititas,
        a escolha de Eliézer como herdeiro e o tratamento dado a Agar.</li>
      </ul>
      <h4>O ponto forte</h4>
      <p>A Bíblia não usa Abraão como historinha de moral, ela apoia um ensino inteiro nele. Se
      Abraão fosse lenda, o raciocínio de Paulo sobre fé cairia junto.</p>
      <p class="srcline">g 5/12 p. 18, quadro; it “Abraão” §§ 22-23. A imagem A é o relevo de Karnak
      que menciona o “Campo de Abrão”.</p>`
  },

  q3: {
    cat: "pesquisa", para: "Analise 2",
    quote: "Como Abraão talvez tenha aprendido sobre Jeová?",
    title: "Provavelmente por meio de Sem",
    body: `
      <ul>
        <li>Jeová tinha servos fiéis naquela época, e um deles era Sem. Noé chamou Jeová de “Deus de
        Sem”, o que mostra o respeito de Sem pela adoração pura
        (<span class="scr" data-ref="1:9:26">Gênesis 9:26</span>).</li>
        <li>Sem já tinha visto mais de 400 anos de história: a maldade antes do Dilúvio, o Dilúvio, a
        formação das nações e a rebelião em Babel, da qual ele não participou.</li>
        <li>A família de Sem continuou falando a língua original, e Abraão era dessa família.</li>
        <li>Sem continuou vivo durante a maior parte da vida de Abraão: as duas vidas coincidiram por
        150 anos.</li>
        <li>Sem viveu 600 anos ao todo (<span class="scr" data-ref="1:11:10-11">Gênesis 11:10, 11</span>).
        Pela cronologia bíblica, ele morreu poucos anos depois de Sara. Ou seja, houve tempo de sobra
        para conversas.</li>
      </ul>
      <h4>O ponto forte</h4>
      <p>A fé do maior exemplo de fé da Bíblia começou numa conversa com um homem muito velho, e não
      numa visão espetacular. As visões vieram depois
      (<span class="scr" data-ref="1:12:1">Gênesis 12:1</span>).</p>
      <h4>Como fica hoje</h4>
      <p>É o irmão de 80 e poucos anos que serviu quando a obra era proibida em vários lugares, ou os
      avós que aceitaram a verdade antes de todos na família. Sentar e ouvir essas pessoas é usar a
      mesma porta que Abraão usou. E se você é essa pessoa idosa, o que você viu Jeová fazer é
      material de fé para os mais novos.</p>
      <p class="srcline">ia p. 26 §§ 4-5; rr p. 20 § 17.</p>`
  },

  q4: {
    cat: "pesquisa", para: "Analise 3",
    quote: "Por que Jeová aceitou a adoração de Abraão?",
    title: "Os quatro requisitos da adoração pura",
    body: `
      <p>O livro A Adoração Pura explica que Noé, Abraão e Jacó tiveram suas ofertas aceitas porque,
      “mais do que cumprir uma mera formalidade, esses homens cumpriram os quatro requisitos
      principais da adoração pura”. No caso de Abraão:</p>
      <ul>
        <li><b>Adorou só a Jeová</b>, o único que merece adoração
        (<span class="scr" data-ref="1:12:8">Gênesis 12:8</span>;
        <span class="scr" data-ref="1:13:18">13:18</span>).</li>
        <li><b>Deu o melhor que tinha</b>: estava disposto a oferecer o filho amado
        (<span class="scr" data-ref="1:22:2">Gênesis 22:2</span>).</li>
        <li><b>Fez do modo que Jeová mandou</b>, nos mínimos detalhes
        (<span class="scr" data-ref="1:22:9-12">Gênesis 22:9-12</span>).</li>
        <li><b>Teve motivo puro</b>: fé. “Abraão depositou fé em Jeová, e isso lhe foi creditado como
        justiça” (<span class="scr" data-ref="45:4:3">Romanos 4:3</span>).</li>
      </ul>
      <h4>O que dá peso à escolha dele</h4>
      <p>Em Ur havia um templo grande dedicado ao deus-lua Nana, e até o pai de Abraão adorou deuses
      falsos por um tempo (<span class="scr" data-ref="6:24:2">Josué 24:2</span>). Mesmo assim,
      Abraão escolheu adorar a Jeová.</p>
      <h4>O ponto forte</h4>
      <p>Esses quatro requisitos vêm do exemplo de Abel, e o que separou Abel de Caim não foi o
      ritual, foi o motivo do coração. Por isso o livro conclui: adorar a Jeová de modo puro “envolve
      toda a nossa vida, tudo o que fazemos”.</p>
      <p class="srcline">rr p. 20 § 18, com §§ 10, 13, 14 e 17.</p>`
  },

  q5: {
    cat: "pesquisa", para: "Analise 4",
    quote: "confirma que a Bíblia é cientificamente correta",
    title: "Estrelas e grãos de areia",
    body: `
      <p>A promessa de <span class="scr" data-ref="1:22:17">Gênesis 22:17</span> compara a
      descendência com “as estrelas dos céus” e com “os grãos de areia à beira do mar”.</p>
      <ul>
        <li>Essa comparação só faz sentido se as estrelas forem bilhões. E são.</li>
        <li>Na antiguidade isso era desconhecido: a olho nu se vê entre 2.000 e 4.000 estrelas, e
        cerca de 6.000 brilham o suficiente para serem vistas sem telescópio.</li>
        <li>Nenhum escritor daquela época teria feito essa comparação sozinho: comparar três mil
        estrelas com a areia de uma praia não faria sentido.</li>
        <li>Uma revista tentou explicar dizendo que Abraão poderia ter usado uma lente antiga. Não há
        prova de que os antigos observassem estrelas com lentes, nem de que Abraão ou o escritor de
        Gênesis tivessem uma.</li>
        <li>A explicação simples é que a Bíblia é inspirada por Deus
        (<span class="scr" data-ref="55:3:16">2 Timóteo 3:16</span>), e
        <span class="scr" data-ref="24:33:22">Jeremias 33:22</span> diz algo parecido.</li>
      </ul>
      <h4>O ponto forte</h4>
      <p>Essa exatidão não aparece numa aula de astronomia, aparece dentro de uma promessa feita a um
      pai. Jeová usou uma medida que só ele conhecia na época.</p>
      <p class="srcline">g88 8/4 p. 25, “Como as estrelas dos céus”.</p>`
  },

  /* ------------------- perguntas: medite no que aprendeu ------------------- */

  q6: {
    cat: "pergunta", para: "Medite 1",
    quote: "Como a esperança de Abraão deu coragem a ele?",
    title: "A esperança muda o tamanho da perda",
    body: `
      <h4>No caso de Abraão</h4>
      <p>A esperança dele tinha nome: ressurreição
      (<span class="scr" data-ref="58:11:19">Hebreus 11:19</span>). E tinha base: ele já havia visto
      Isaque nascer quando isso era impossível. Por isso pôde dizer aos servos “depois retornaremos a
      vocês”.</p>
      <h4>No nosso caso</h4>
      <ul>
        <li>Ninguém consegue ser corajoso diante de uma perda que acha definitiva.</li>
        <li>Quase todos conseguem encarar uma perda que sabem ser temporária.</li>
        <li>Por isso a esperança do Paraíso e da ressurreição serve para hoje, e não só para
        depois.</li>
      </ul>
      <h4>Como perguntar</h4>
      <p>“Que decisão difícil fica mais fácil quando a gente lembra que a perda envolvida é
      temporária?”</p>`
  },

  q7: {
    cat: "hoje", para: "Medite 2",
    quote: "vemos uma oportunidade de dar testemunho?",
    title: "Falar é o sacrifício, e o custo é o medo",
    body: `
      <p><span class="scr" data-ref="58:13:15">Hebreus 13:15</span> chama o testemunho de sacrifício:
      “o fruto dos nossos lábios, que fazem declaração pública do seu nome”.</p>
      <h4>O que isso quer dizer</h4>
      <p>O que oferecemos a Deus aqui são palavras. Não custa dinheiro e não exige força física.
      Custa vencer o medo do que a pessoa vai pensar de nós.</p>
      <h4>Exemplos explicados</h4>
      <ul>
        <li><b>Na sala de espera do médico.</b> Alguém comenta a violência ou a doença. Você pode
        responder com um texto que dá esperança e oferecer uma revista.</li>
        <li><b>Com o vizinho.</b> Ele pergunta por que você não foi à festa da igreja da rua. Essa
        pergunta é uma porta aberta.</li>
        <li><b>Com um parente que ficou viúvo.</b> Você já sabe o que a Bíblia diz sobre a
        ressurreição. Falar disso é o melhor consolo que existe.</li>
      </ul>
      <p>Como Abraão, falamos primeiro e vemos o resultado depois.</p>`
  },

  q8: {
    cat: "hoje", para: "Medite 3",
    quote: "decidimos como usar nossos bens materiais?",
    title: "Primícias quer dizer o primeiro, não o que sobra",
    body: `
      <p><span class="scr" data-ref="20:3:9">Provérbios 3:9</span>: “Honre a Jeová com as suas coisas
      valiosas, com as primícias de todas as suas colheitas.”</p>
      <h4>O que é “primícias”</h4>
      <p>Na época, era a primeira parte da colheita, separada antes de tudo, e não o resto que ficava
      no fim. Abraão foi convidado a dar o que ele mais amava, não o que estava sobrando.</p>
      <h4>Exemplos explicados</h4>
      <ul>
        <li><b>No dinheiro.</b> Separar o donativo quando recebe, e não no fim do mês, quando quase
        nada sobra. Vale para quem vive de aposentadoria também: uma parte pequena, mas separada
        primeiro.</li>
        <li><b>No tempo.</b> Marcar reunião e serviço de campo na agenda antes de marcar o resto.</li>
        <li><b>Na força que se tem.</b> Quem já está mais velho pode dar o seu melhor horário do dia,
        quando está mais disposto, em vez de deixar as coisas de Jeová para a hora do cansaço.</li>
      </ul>`
  },

  q9: {
    cat: "hoje", para: "Medite 4",
    quote: "ficamos sabendo que nossos irmãos precisam de ajuda?",
    title: "Ajudar um irmão é oferta entregue a Jeová",
    body: `
      <p><span class="scr" data-ref="50:4:18">Filipenses 4:18</span>: o que os irmãos de Filipos
      enviaram a Paulo foi “um sacrifício aceitável, de aroma suave, agradável a Deus”.</p>
      <h4>O detalhe importante</h4>
      <p>A ajuda foi entregue a uma pessoa, e Jeová registrou como oferta a ele mesmo. Compare com
      <span class="scr" data-ref="58:13:16">Hebreus 13:16</span>: “Deus se agrada desses
      sacrifícios.”</p>
      <h4>Exemplos explicados</h4>
      <ul>
        <li><b>Depois de uma enchente ou um incêndio.</b> Ajudar na limpeza, doar roupa, receber uma
        família em casa por uns dias.</li>
        <li><b>Um irmão desempregado.</b> Uma cesta, uma indicação de vaga, ajudar com uma conta sem
        contar para ninguém.</li>
        <li><b>Um irmão idoso ou doente.</b> Levar de carro à reunião, fazer companhia, buscar
        remédio, ajudar com a compra do mês.</li>
      </ul>
      <p>A coragem aqui é assumir um gasto ou um trabalho que ninguém vai ver nem elogiar.</p>
      <h4>O exemplo de Abraão com Ló</h4>
      <p>No capítulo anterior do livro, Abraão não mediu esforços quando o sobrinho foi levado
      cativo: juntou 318 homens da sua casa e foi atrás
      (<span class="scr" data-ref="1:14:14-16">Gênesis 14:14-16</span>). Ele não perguntou se
      valia a pena. Foi.</p>`
  },

  q10: {
    cat: "hoje", para: "Medite 5",
    quote: "De que outras maneiras você pode imitar a coragem",
    title: "Quatro maneiras que o relato sugere",
    body: `
      <ul>
        <li><b>Obedecer no mesmo dia.</b> Aos 99 anos, ao receber a ordem da circuncisão, ele não
        discutiu nem procurou desculpa: obedeceu “naquele mesmo dia”
        (<span class="scr" data-ref="1:17:23">Gênesis 17:23</span>).</li>
        <li><b>Levar as dúvidas a Jeová.</b> Foi o que ele fez sobre Sodoma, com humildade
        (<span class="scr" data-ref="1:18:22-33">Gênesis 18:22-33</span>).</li>
        <li><b>Ensinar a família antes da prova.</b> A cooperação de Isaque veio de anos de instrução
        (<span class="scr" data-ref="1:18:19">Gênesis 18:19</span>).</li>
        <li><b>Aceitar ser diferente das pessoas ao redor</b>, como ele e Sara foram em Ur.</li>
      </ul>
      <h4>Para quem já tem idade</h4>
      <p>Continuar presente nas reuniões apesar da saúde, dar testemunho por telefone ou por carta,
      contar aos mais novos o que Jeová já fez por você. Tudo isso é coragem do mesmo tipo.</p>`
  },

  /* ------------------- perguntas: pense no quadro completo ------------------- */

  q11: {
    cat: "jeova", para: "Quadro 1",
    quote: "O que esse relato me ensina sobre Jeová?",
    title: "Cinco coisas que aprendemos sobre Jeová aqui",
    body: `
      <ul>
        <li><b>Ele não pede o que ele mesmo não daria.</b> É o parágrafo 8 inteiro
        (<span class="scr" data-ref="43:3:16">João 3:16</span>).</li>
        <li><b>Ele sabe o quanto dói antes de pedir.</b> “Jeová sabia o quanto Abraão amava
        Isaque.”</li>
        <li><b>Ele para a prova no limite e providencia a saída.</b> “Não fira o rapaz”, e o carneiro
        na moita (<span class="scr" data-ref="1:22:12">Gênesis 22:12</span>,
        <span class="scr" data-ref="1:22:13">13</span>).</li>
        <li><b>Ele elogia quem é leal</b>, e ainda reforçou a promessa com um juramento
        (<span class="scr" data-ref="1:22:16">v. 16</span>).</li>
        <li><b>Ele tem paciência com quem tem dúvida sincera</b>, como no caso de Sodoma.</li>
      </ul>`
  },

  q12: {
    cat: "chave", para: "Quadro 2",
    quote: "Como esse relato está relacionado com o propósito de Jeová?",
    title: "Em Moriá a promessa toma a forma final",
    body: `
      <ul>
        <li>É aqui que a promessa alcança todo mundo: “todas as nações da terra obterão para si uma
        bênção por meio do seu descendente”
        (<span class="scr" data-ref="1:22:18">Gênesis 22:18</span>).</li>
        <li>Esse Descendente é Cristo, e com ele os que lhe pertencem
        (<span class="scr" data-ref="48:3:16">Gálatas 3:16</span>,
        <span class="scr" data-ref="48:3:29">29</span>).</li>
        <li>O motivo de Deus fazer daquela família uma nação era produzir o Messias, que daria a vida
        pela humanidade.</li>
        <li>A promessa ainda não terminou de se cumprir, e vai trazer bênçãos para sempre (P8).</li>
        <li>A cena inteira ilustra o resgate: um pai que oferece o filho amado, um substituto dado por
        Deus e um monte onde “se providenciará”
        (<span class="scr" data-ref="1:22:14">Gênesis 22:14</span>).</li>
      </ul>`
  },

  q13: {
    cat: "pergunta", para: "Quadro 3",
    quote: "O que eu gostaria de perguntar para Abraão ou Isaque",
    title: "Boas perguntas para o fim da consideração",
    body: `
      <p>Aqui a resposta é pessoal e rende participação leve no encerramento. Algumas que costumam
      surgir:</p>
      <ul>
        <li>O que passou pela sua cabeça nas noites daqueles três dias?</li>
        <li>Vocês conversaram no caminho, ou ficaram calados?</li>
        <li>Isaque, quando você entendeu que a ovelha era você? Por que não resistiu?</li>
        <li>Como vocês contaram isso a Sara ao chegar em casa?</li>
        <li>O que você pensou daquele dia quando soube do resgate de Jesus?</li>
      </ul>`
  }
};
