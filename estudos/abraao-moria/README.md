# Abraão em Moriá, estudo interativo

**No ar em:** https://dyfreire.github.io/estudos/abraao-moria/

Réplica do capítulo 5 do livro *Ande Corajosamente com Deus* ("Ele enfrentou seu maior desafio"),
com uma camada de anotações clicáveis por cima do texto e os versículos da Tradução do Novo Mundo
embutidos para funcionar sem internet.

## Como usar

Abra o `index.html` no navegador. Duas formas:

```bash
# 1) direto no arquivo
open index.html

# 2) servindo localmente (recomendado, evita qualquer restrição do navegador)
python3 -m http.server 8000
# depois abra http://localhost:8000
```

### Na tela

| Elemento | O que faz |
| --- | --- |
| Trecho colorido no texto | Abre a anotação daquele ponto |
| Referência bíblica sublinhada | Abre o texto da Tradução do Novo Mundo, offline |
| **Guia de cores** | Mostra a legenda; clique numa categoria para ligar ou desligar o realce dela |
| **Roteiro** | Lista todas as 42 anotações agrupadas por tipo, clique para ir até o trecho |
| **Respostas** | Abre ou fecha de uma vez os 13 blocos de resposta esperada e as 13 perguntas de seguimento |
| **30 min** | Vai para o roteiro cronometrado da consideração |
| **Resumo** | Vai para o resumo final com os oito pontos altos |
| Etiqueta E1 a E5 ao lado do parágrafo | A etapa da trilha de ensino a que aquele parágrafo pertence |
| Bloco verde sob cada campo | Os pontos que respondem exatamente aquela pergunta |
| Bloco vermelho sob cada campo | Perguntas de seguimento para dirigir à assistência, com o que se quer ouvir |
| **Tema** | Alterna claro e escuro (segue o sistema por padrão) |
| **Limpar** | Apaga as marcas de "visto"; as respostas escritas continuam salvas |
| Setas ← → | Com uma anotação aberta, vai para a anterior ou a seguinte |
| Esc | Fecha o modal |

Os campos "Sua resposta", as marcas de visto e o estado dos blocos de resposta ficam salvos no
navegador (localStorage), na mesma máquina e no mesmo navegador.

Cada uma das 13 perguntas do capítulo tem, embaixo do campo de resposta, um bloco recolhível com
os pontos esperados: as respostas que atingem exatamente a pergunta, com o parágrafo ou a
publicação de onde saem. Ficam fechados por padrão, para você responder primeiro e conferir depois.

## Categorias de anotação

| Cor | Categoria | Conteúdo |
| --- | --- | --- |
| Âmbar | Ponto-chave | O que o parágrafo está realmente ensinando |
| Índigo | Insight | O que está por trás do texto e passa batido |
| Verde | Hoje | Como a situação aparece na vida de agora |
| Púrpura | Sobre Jeová | O que o relato revela a respeito de Deus |
| Teal | Pesquisa | Dado das publicações citadas nas perguntas |
| Tijolo | Participação | Pergunta pronta para dirigir à assistência |

## Estrutura

```
index.html              texto do capítulo + marcações
assets/css/style.css    estilo, temas claro e escuro
assets/js/verses.js     948 versículos da NWT (17 livros, 36 capítulos)
assets/js/notes.js      as 57 anotações, a trilha de 5 etapas, é aqui que se edita o conteúdo
assets/js/app.js        modais, filtros, roteiro, progresso
assets/img/             imagens do capítulo, baixadas do jw.org
```

### Como editar ou acrescentar uma anotação

1. No `index.html`, envolva o trecho: `<span data-n="a30">trecho do texto</span>`.
2. No `notes.js`, crie a entrada correspondente:

```js
a30: {
  cat: "insight", para: "P6",
  quote: "trecho do texto",
  title: "Título curto da anotação",
  body: `<p>Conteúdo em HTML. Referências assim:
         <span class="scr" data-ref="1:22:5">Gênesis 22:5</span></p>`
},
```

O formato de `data-ref` é `livro:capítulo:versículos`, aceitando lista e intervalo:
`58:11:11,12,17-19`. A numeração de livros é a bíblica (1 = Gênesis, 58 = Hebreus).
Se precisar de um capítulo que ainda não está no `verses.js`, ele precisa ser acrescentado
ao arquivo (foi gerado a partir de wol.jw.org).

## Publicação

Está publicado em `dyfreire.github.io`, dentro de `estudos/abraao-moria/`, e listado nos dois
índices do site (raiz e `estudos/`).

Para atualizar: edite aqui, copie a pasta para o repositório do site e faça um commit em branch
própria (a main é protegida por hook local, então o caminho é branch, PR e merge).

```bash
rsync -a --exclude .git ./ /caminho/do/repo/estudos/abraao-moria/
```

Uma observação: o texto, as imagens e os versículos são propriedade da Watch Tower Bible and Tract
Society, e o repositório é público. Para uso pessoal isso é reprodução de estudo; se em algum
momento o alcance incomodar, o caminho é repositório privado ou uso apenas local.

## Fontes

Todo o conteúdo foi coletado de jw.org e wol.jw.org:

- [Capítulo 5, "Ele enfrentou seu maior desafio"](https://www.jw.org/pt/biblioteca/livros/ande-corajosamente-com-deus/dos-patriarcas-ao-tempo-dos-juizes/abraao-enfrentou-seu-maior-desafio/)
- [Despertai! 5/2012 p. 18, quadro "Abraão, uma pessoa real"](https://wol.jw.org/pt/wol/d/r5/lp-t/102012167)
- [Estudo Perspicaz, verbete "Abraão"](https://wol.jw.org/pt/wol/d/r5/lp-t/1200000060)
- [Imite a Sua Fé, cap. 3](https://wol.jw.org/pt/wol/d/r5/lp-t/1102013273)
- [A Adoração Pura de Jeová É Restaurada!, cap. 2](https://wol.jw.org/pt/wol/d/r5/lp-t/1102017162)
- [Despertai! 8/4/1988 p. 25, "Como as estrelas dos céus"](https://wol.jw.org/pt/wol/d/r5/lp-t/101988248)
- [A Sentinela fev. 2016, "Jeová o chamou de 'meu amigo'"](https://www.jw.org/pt/biblioteca/revistas/a-sentinela-estudo-fevereiro-2016/abraao-amigo-de-deus/)

As anotações coloridas são notas de preparação pessoal, não material publicado pelas Testemunhas
de Jeová.
