/* ==========================================================================
   Preparação da parte 7 da reunião Vida e Ministério, 21-27 de setembro de 2026:
   "Continue neutro no seu coração" (15 min, consideração).
   ========================================================================== */

window.CATS = {
  chave:    { label: "Ponto-chave",  desc: "O que a parte precisa deixar claro" },
  insight:  { label: "Insight",      desc: "O que está por trás e costuma passar batido" },
  hoje:     { label: "Hoje",         desc: "Como isso aparece na vida daqui" },
  jeova:    { label: "Sobre Jeová",  desc: "O que o assunto revela a respeito de Deus" },
  pesquisa: { label: "Pesquisa",     desc: "Dado do artigo w16.04 e das fontes citadas" },
  pergunta: { label: "Condução",     desc: "Como dirigir, e o que fazer se travar" }
};

window.DIRECTION = [
  { n: 1, title: "O problema: o mundo está dividido",
    line: "Quanto mais dividido o mundo fica, mais a nossa neutralidade vai ser testada.",
    paras: "Abertura" },
  { n: 2, title: "Por que é difícil ficar de fora",
    line: "A pressão vem de gente próxima, e quase sempre com um argumento que parece justo.",
    paras: "P1, P2" },
  { n: 3, title: "De quem é este mundo",
    line: "Lucas 4:5, 6 mostra quem entrega os governos, e isso resolve a questão pela raiz.",
    paras: "P3, P4" },
  { n: 4, title: "Quatro coisas que ajudam",
    line: "Ponto de vista de Jeová, cautela, oração e o exemplo dos fiéis.",
    paras: "Vídeo, P5, P6" }
];

window.STEP_BY_PARA = {
  "Abertura": 1, "P1": 2, "P2": 2, "P3": 3, "P4": 3, "Vídeo": 4, "P5": 4, "P6": 4,
  "Encerramento": 4
};

window.NOTES = {

  /* ------------------------------ abertura ------------------------------ */

  a1: {
    cat: "chave", para: "Abertura",
    quote: "nossa neutralidade deve vir do coração",
    title: "O título é o assunto: no coração",
    body: `
      <p>A parte não é sobre o que fazemos por fora, é sobre o que decidimos por dentro. Alguém pode
      não votar, não usar bandeira e não discutir política, e ainda assim torcer por um lado no
      coração.</p>
      <p>O texto da apostila é <span class="scr" data-ref="20:4:23">Provérbios 4:23</span>: proteger
      o coração acima de tudo, porque dele procedem as fontes da vida. Ele entra no fim da abertura,
      logo depois da frase de ênfase, funcionando como a ordem prática que fecha o raciocínio.</p>
      <h4>Frase para abrir</h4>
      <p>“Dá para uma pessoa parecer neutra por fora e já ter escolhido um lado por dentro. É disso
      que a parte trata.”</p>`
  },

  a2: {
    cat: "hoje", para: "Abertura",
    quote: "O mundo está cada vez mais dividido",
    title: "A imagem da apostila já dá o tom",
    body: `
      <p>A ilustração mostra dois homens pressionando um irmão a apoiar um político, apontando para
      uma TV com dois candidatos e percentuais de pesquisa.</p>
      <h4>Como usar</h4>
      <p>Descreva a cena em uma frase e pergunte: “essa pressão vem de estranho ou de gente
      conhecida?” A resposta é gente conhecida, e é isso que torna difícil.</p>`
  },

  /* ------------------------------ pergunta 1 ------------------------------ */

  a21: {
    cat: "pergunta", para: "Abertura",
    quote: "o que é mais fácil de controlar",
    title: "Três perguntas possíveis para abrir",
    body: `
      <p>Escolha uma e use só ela. A pergunta é retórica: não espere resposta, dê dois segundos de
      silêncio e siga para o texto.</p>
      <ol>
        <li><b>“Quando o assunto é política, o que é mais fácil de controlar: o que a gente fala, ou
        o que a gente sente?”</b> É a mais segura. Todo mundo concorda que sentir é mais difícil, e
        isso já entrega o tema da parte.</li>
        <li><b>“Você já se pegou torcendo por um lado, mesmo sem dizer nada para ninguém?”</b> Mais
        direta e pessoal. Mexe mais, e serve se a congregação for de confiança e o assunto estiver
        quente na região.</li>
        <li><b>“Se ninguém estivesse olhando, a sua opinião sobre política seria a mesma que você
        mostra?”</b> A mais provocativa. Use só se você estiver à vontade para conduzir o silêncio
        que ela cria.</li>
      </ol>
      <h4>Cuidado</h4>
      <p>Qualquer uma delas é para ser pensada, não respondida em voz alta. Se alguém começar a
      responder, agradeça com um gesto e siga, senão a parte perde o tempo logo no começo.</p>`
  },

  a3: {
    cat: "pergunta", para: "P1",
    quote: "Que testes de neutralidade você pode enfrentar onde mora?",
    title: "Primeira pergunta: como dirigir",
    body: `
      <h4>O que se espera ouvir</h4>
      <ul>
        <li>Conversa política no trabalho, na escola ou na família, principalmente em ano de
        eleição.</li>
        <li>Cobrança para assinar abaixo-assinado, ir a manifestação, usar adesivo ou camiseta.</li>
        <li>Grupo de WhatsApp da família ou do serviço cheio de notícia política.</li>
        <li>Pressão de um parente que já sabe como você pensa e insiste mesmo assim.</li>
      </ul>
      <h4>Cuidado importante</h4>
      <p>Se alguém começar a citar nome de político, partido ou lado, corte com educação e volte ao
      princípio: “vamos ficar no tipo de situação, sem citar nomes”. Essa parte é justamente sobre
      não tomar partido, inclusive no Salão.</p>`
  },

  a4: {
    cat: "hoje", para: "P1",
    quote: "onde mora",
    title: "Situações que aparecem por aqui",
    body: `
      <ul>
        <li><b>Ano eleitoral.</b> Vizinho pedindo voto, carro de som na rua, familiares discutindo no
        almoço de domingo.</li>
        <li><b>No trabalho.</b> Colegas querendo saber em quem você vota, ou tentando arrancar uma
        opinião “só de brincadeira”.</li>
        <li><b>Nas redes.</b> Ser marcado em post político, ou pedirem que você compartilhe
        algo.</li>
        <li><b>Na escola.</b> Trabalho escolar sobre eleição, simulação de voto, debate em sala.</li>
        <li><b>Para quem já tem idade:</b> parentes que puxam assunto político na visita, achando
        que é conversa inofensiva.</li>
      </ul>`
  },

  /* ------------------------------ pergunta 2 ------------------------------ */

  a5: {
    cat: "pergunta", para: "P2",
    quote: "Por que às vezes pode ser difícil não tomar um lado?",
    title: "Segunda pergunta: onde ela quer chegar",
    body: `
      <h4>O que se espera ouvir</h4>
      <ul>
        <li>Porque a pressão vem de pessoas de quem gostamos, e não de estranhos.</li>
        <li>Porque às vezes um lado realmente parece mais justo, ou promete algo que nos
        beneficiaria.</li>
        <li>Porque o assunto mexe com sentimento: fome, violência, injustiça, o futuro dos
        filhos.</li>
        <li>Porque ficar calado pode ser lido como covardia ou como apoio ao outro lado.</li>
      </ul>
      <h4>O que o artigo acrescenta</h4>
      <p>Ele trata do caso mais difícil: um movimento popular contra um governo opressivo que já fez
      os servos de Deus sofrerem. Mesmo aí, não damos a entender que um lado é melhor.</p>
      <p class="srcline">w16.04 § 7.</p>`
  },

  a6: {
    cat: "insight", para: "P2",
    quote: "difícil não tomar um lado",
    title: "A dificuldade não é a opinião, é a simpatia",
    body: `
      <p>Quase ninguém na congregação vai sair fazendo campanha. O risco real é mais silencioso:
      torcer, comemorar um resultado, ficar satisfeito quando “o nosso lado” ganha.</p>
      <p>É por isso que a parte se chama “no seu coração”, e não “na sua boca”.</p>`
  },

  /* ------------------------------ Lucas 4 ------------------------------ */

  a7: {
    cat: "chave", para: "P3",
    quote: "Leia Lucas 4:5, 6",
    title: "O texto que resolve a questão pela raiz",
    body: `
      <p>Em <span class="scr" data-ref="42:4:5-6">Lucas 4:5, 6</span> o Diabo mostra a Jesus todos os
      reinos do mundo e diz que a autoridade e a glória deles lhe foram entregues, e que ele dá a
      quem quiser.</p>
      <h4>Dois detalhes</h4>
      <ul>
        <li><b>Jesus não contestou.</b> Ele não disse que aquilo não pertencia ao Diabo. Se não
        pertencesse, a proposta não seria tentação nenhuma.</li>
        <li><b>“A quem eu quiser dar”.</b> Quem entrega o poder é ele. Isso muda a pergunta: não é
        qual candidato é melhor, é de quem é o tabuleiro.</li>
      </ul>
      <p>Combine com <span class="scr" data-ref="62:5:19">1 João 5:19</span>: o mundo inteiro jaz no
      poder do maligno.</p>`
  },

  a8: {
    cat: "pergunta", para: "P3",
    quote: "Que motivo esses versículos dão para você continuar neutro?",
    title: "Terceira pergunta: o alvo da resposta",
    body: `
      <h4>O que se espera ouvir</h4>
      <ul>
        <li>Que os governos deste mundo estão sob a autoridade de Satanás, então apoiar um lado é
        entrar num jogo que não é de Jeová.</li>
        <li>Que Jesus recusou a oferta, e nós seguimos o exemplo dele.</li>
        <li>Que a solução real é o Reino de Deus, e não um governo humano melhor.</li>
      </ul>
      <h4>Se a resposta vier curta</h4>
      <p>Pergunte: “por que Jesus não respondeu que aqueles reinos não eram do Diabo?” Isso puxa o
      ponto principal sozinho.</p>`
  },

  /* ------------------------------ pergunta 4 ------------------------------ */

  a9: {
    cat: "pergunta", para: "P4",
    quote: "Que textos bíblicos você pode usar para explicar por que você decidiu ser neutro?",
    title: "Quarta pergunta: deixe a assistência montar a lista",
    body: `
      <p>Essa é a pergunta mais prática da parte. O objetivo é cada um sair com dois ou três textos
      na ponta da língua.</p>
      <h4>Textos que devem aparecer</h4>
      <ul>
        <li><span class="scr" data-ref="43:17:16">João 17:16</span>, não fazemos parte do mundo.</li>
        <li><span class="scr" data-ref="43:18:36">João 18:36</span>, o Reino de Jesus não é deste
        mundo.</li>
        <li><span class="scr" data-ref="23:2:4">Isaías 2:4</span>, não aprendem mais a guerra.</li>
        <li><span class="scr" data-ref="40:22:21">Mateus 22:21</span>, pagar a Deus o que é de
        Deus.</li>
        <li><span class="scr" data-ref="44:5:29">Atos 5:29</span>, obedecer a Deus como
        governante.</li>
        <li><span class="scr" data-ref="45:13:1">Romanos 13:1</span>, sujeição às autoridades, que
        mostra que não somos rebeldes.</li>
      </ul>
      <h4>Dica de condução</h4>
      <p>Peça que digam o texto <b>e</b> como usariam numa conversa real. Texto decorado sem
      explicação não ajuda na hora do aperto.</p>`
  },

  a10: {
    cat: "pesquisa", para: "P4",
    quote: "explicar por que você decidiu ser neutro",
    title: "Como irmãos de verdade usaram esses textos",
    body: `
      <p>O artigo traz dois relatos curtos no quadro:</p>
      <ul>
        <li><b>Andriy, da Ucrânia:</b> meditar em
        <span class="scr" data-ref="20:27:11">Provérbios 27:11</span>,
        <span class="scr" data-ref="40:26:52">Mateus 26:52</span> e
        <span class="scr" data-ref="43:13:35">João 13:35</span> o deixou mais decidido a não prestar
        serviço militar, e o ajudou a ficar calmo diante das autoridades.</li>
        <li><b>Wilmer, da Colômbia:</b> <span class="scr" data-ref="23:2:4">Isaías 2:4</span> o
        ajudou a imaginar a vida tranquila do novo mundo, quando ninguém vai usar arma contra
        outro.</li>
      </ul>
      <p>Citar um desses exemplos mostra que a lista de textos não é teoria.</p>
      <p class="srcline">w16.04, quadro da p. 31.</p>`
  },

  /* ------------------------------ vídeo ------------------------------ */

  a11: {
    cat: "chave", para: "Vídeo",
    quote: "Mostre o VÍDEO",
    title: "Atenção ao tempo: o vídeo tem 5 minutos e 17 segundos",
    body: `
      <p>Conferi a duração do arquivo: <b>5:17</b>. Numa parte de 15 minutos, isso é mais de um
      terço do tempo.</p>
      <h4>Consequência prática</h4>
      <p>Sobram cerca de 9 minutos e meio para a abertura, as quatro primeiras perguntas, a pergunta
      do vídeo e a dos quatro pontos. Dá em média um minuto por pergunta, com dois comentários
      curtos cada.</p>
      <p>Teste o vídeo no equipamento antes, e deixe ele pronto para começar sem espera.</p>`
  },

  a12: {
    cat: "insight", para: "Vídeo",
    quote: "Lições Que Aprendemos de A Sentinela",
    title: "O que o vídeo mostra",
    body: `
      <p>É da série “Lições Que Aprendemos de A Sentinela”, sobre o artigo de abril de 2016, com o
      texto base <span class="scr" data-ref="40:22:21">Mateus 22:21</span> na abertura.</p>
      <p>Traz o depoimento de uma publicadora, Marinalva Fernandes, e cenas do dia a dia: alguém
      lendo no carro a caminho do trabalho, conversa na rua, homens saindo do futebol, mulheres
      conversando. São justamente os lugares onde o assunto político aparece sem avisar.</p>
      <h4>Como anunciar antes de passar</h4>
      <p>“Repare no que ela conta sobre o que passava pela cabeça dela, e não só no que ela
      falava.”</p>`
  },

  a13: {
    cat: "pergunta", para: "P5",
    quote: "continuar neutro no íntimo",
    title: "Quinta pergunta: puxe para o íntimo",
    body: `
      <p>O enunciado usa a palavra <b>íntimo</b>, e é aí que a resposta deve ir. Se os comentários
      ficarem só em “não votar” e “não discutir”, redirecione.</p>
      <h4>Pergunta de apoio</h4>
      <p>“O que uma pessoa pode estar sentindo por dentro, mesmo fazendo tudo certo por fora?”</p>
      <h4>O que se espera ouvir</h4>
      <ul>
        <li>Ficar contente quando um lado ganha, ou com raiva quando perde.</li>
        <li>Consumir notícia o dia inteiro de uma fonte só.</li>
        <li>Guardar opinião forte e soltar só entre irmãos de confiança.</li>
      </ul>`
  },

  /* ------------------------------ quatro pontos ------------------------------ */

  a14: {
    cat: "pesquisa", para: "P6",
    quote: "que quatro pontos podem nos ajudar a continuar neutros?",
    title: "Os quatro pontos do artigo, na ordem",
    body: `
      <ol>
        <li><b>Ter o ponto de vista de Jeová sobre os governos humanos.</b> Ele não nos criou para
        governar uns aos outros (<span class="scr" data-ref="24:10:23">Jeremias 10:23</span>), e
        permite os governos porque dão certa segurança, o que facilita a pregação
        (<span class="scr" data-ref="45:13:3">Romanos 13:3, 4</span>). Até oramos pelas autoridades
        (<span class="scr" data-ref="54:2:1-2">1 Timóteo 2:1, 2</span>).</li>
        <li><b>Ser cauteloso como as serpentes e inocente como as pombas</b>
        (<span class="scr" data-ref="40:10:16">Mateus 10:16</span>): identificar cedo a situação
        perigosa e não deixar que ela nos leve a ser desleais.</li>
        <li><b>Orar pedindo ajuda a Jeová.</b> Espírito santo para ter paciência e autodomínio, e
        sabedoria para perceber o que testa a neutralidade. E deixar a Palavra fortalecer você:
        memorize textos agora, porque pode chegar um dia em que não haja Bíblia à mão.</li>
        <li><b>Aprender dos servos fiéis.</b> Sadraque, Mesaque e Abednego recusaram adorar a imagem
        do governo de Babilônia (<span class="scr" data-ref="27:3:16-18">Daniel 3:16-18</span>), e
        irmãos de hoje mantiveram a neutralidade mesmo presos ou agredidos.</li>
      </ol>
      <p class="srcline">w16.04 p. 27-31, §§ 5, 8, 14 e 16.</p>`
  },

  a15: {
    cat: "pesquisa", para: "P6",
    quote: "quatro pontos",
    title: "Dentro do ponto 2, quatro perigos práticos",
    body: `
      <p>O artigo detalha onde a cautela é exigida. Vale citar se sobrar tempo, porque é a parte mais
      aplicável:</p>
      <ul>
        <li><b>Conversas.</b> Cuidado quando o assunto escorrega para política. Não defenda nem
        critique político ou partido: concentre-se no problema em si, e não em promessas.</li>
        <li><b>Meios de comunicação.</b> Notícia costuma vir de um lado só, e políticos usam a mídia
        para influenciar.</li>
        <li><b>Materialismo.</b> Quem está apegado ao que tem cede mais fácil na hora da pressão. O
        artigo cita irmãos do Malauí, nos anos 70, que não conseguiram abrir mão do conforto.</li>
        <li><b>Orgulho.</b> Orgulho de raça, tribo, cultura, cidade ou país leva à parcialidade.
        Aconteceu até no primeiro século (<span class="scr" data-ref="44:6:1">Atos 6:1</span>).</li>
      </ul>
      <p class="srcline">w16.04 §§ 9-13.</p>`
  },

  a16: {
    cat: "hoje", para: "P6",
    quote: "continuar neutros",
    title: "Os quatro perigos, traduzidos para cá",
    body: `
      <ul>
        <li><b>Conversa:</b> o churrasco de família em ano de eleição. Dá para falar do problema
        (violência, preço da comida) sem entrar em quem é culpado.</li>
        <li><b>Mídia:</b> seguir só um canal, um jornal ou um perfil, e repetir o que ele diz.</li>
        <li><b>Materialismo:</b> quem depende de um cargo público, de um benefício ou de um contrato
        sente a pressão dobrada.</li>
        <li><b>Orgulho:</b> bairrismo, futebol, região do país. Parece brincadeira e é o mesmo
        músculo do nacionalismo.</li>
      </ul>`
  },

  a17: {
    cat: "jeova", para: "P6",
    quote: "o ponto de vista de Jeová",
    title: "Neutralidade não é indiferença",
    body: `
      <p>Repare que o primeiro ponto do artigo não diz para ignorar os governos, e sim para enxergar
      como Jeová enxerga: ele permite que existam, eles dão certa segurança, e nós oramos pelas
      autoridades.</p>
      <p>Ou seja, não somos rebeldes nem revoltados. Pagamos imposto, obedecemos às leis e respeitamos
      quem governa (<span class="scr" data-ref="56:3:1">Tito 3:1</span>). O que não fazemos é escolher
      um lado.</p>`
  },

  /* ------------------------------ encerramento ------------------------------ */

  a18: {
    cat: "chave", para: "Encerramento",
    quote: "vamos fortalecer agora nossa decisão",
    title: "Como fechar a parte",
    body: `
      <p>O artigo termina dizendo que, quanto mais perto do fim, mais seremos pressionados a deixar
      de ser leais a Jeová e ao Reino dele, e por isso a decisão precisa ser fortalecida
      <b>agora</b>.</p>
      <h4>Frase de encerramento</h4>
      <p>“A hora de decidir de que lado a gente está não é quando a pressão chega. É hoje, em casa, no
      coração.”</p>`
  },

  a19: {
    cat: "pergunta", para: "Encerramento",
    quote: "no seu coração",
    title: "Três armadilhas ao dirigir esta parte",
    body: `
      <ul>
        <li><b>Nomes e partidos.</b> Se alguém citar, corte com educação e volte ao princípio. O
        Salão não é lugar para isso, e a gravação da reunião pode circular.</li>
        <li><b>Contar caso político recente.</b> Mesmo para criticar os dois lados, isso puxa a
        conversa para onde ela não deve ir.</li>
        <li><b>Passar do tempo.</b> Com o vídeo de 5:17, o tempo é curto. Prefira dois comentários
        curtos a um longo.</li>
      </ul>`
  },

  a20: {
    cat: "insight", para: "Encerramento",
    quote: "Continue neutro",
    title: "Por que o material insiste no coração",
    body: `
      <p>Junte as peças da parte: a apostila cita
      <span class="scr" data-ref="20:4:23">Provérbios 4:23</span>, o vídeo fala do íntimo, e a última
      pergunta pede quatro pontos que são todos internos, ponto de vista, cautela, oração e
      exemplo.</p>
      <p>Nenhum dos quatro é uma regra de comportamento. Todos tratam do que a pessoa alimenta por
      dentro, porque é dali que a ação sai.</p>`
  }
};
