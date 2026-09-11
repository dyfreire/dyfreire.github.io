# Gibeonitas, estudo interativo

Preparação do estudo de A Sentinela **“O que aprendemos com os gibeonitas”**
(edição de estudo de julho de 2026), para a semana de **7 a 13 de setembro de 2026**.

**No ar em:** https://dyfreire.github.io/estudos/gibeonitas/

## O que esta página é, e o que não é

Ela **não reproduz o artigo**. Cada parágrafo aparece em resumo, com as frases curtas
citadas que servem de gancho para as anotações. O texto completo fica no jw.org e no
JW Library, que é o que você usa na reunião. O que está aqui é a camada de preparação:
anotações, respostas esperadas, perguntas de seguimento, versículos e roteiro.

## Como usar

```bash
open index.html                 # direto no arquivo
python3 -m http.server 8000     # ou servindo localmente
```

| Elemento | O que faz |
| --- | --- |
| Trecho colorido | Abre a anotação daquele ponto |
| Referência bíblica sublinhada | Abre o texto da Tradução do Novo Mundo, offline |
| **Cores** | Legenda; clique numa categoria para ligar ou desligar o realce |
| **Anotações** | Lista as 40 anotações agrupadas por tipo |
| **Respostas** | Abre ou fecha de uma vez os 19 blocos de resposta e os 9 de seguimento |
| **60 min** | Roteiro cronometrado do estudo |
| **Resumo** | Os oito pontos altos e as frases de encerramento |
| Etiqueta E1 a E4 | A etapa da trilha de ensino a que o parágrafo pertence |

Respostas digitadas, marcas de visto e tema ficam salvos no navegador.

## Conteúdo

- **40 anotações** em 6 categorias (ponto-chave, insight, hoje, sobre Jeová, pesquisa,
  participação), ancoradas nos 17 parágrafos e nas três perguntas finais.
- **578 versículos** da NWT, de 12 livros, embutidos para funcionar sem internet.
- **4 etapas de direção**: fé e humildade, paciência diante da injustiça, lealdade à
  adoração verdadeira, e o retrato de Jeová que se forma no fim.
- **Roteiro de 60 minutos** com os cânticos 88 e 148 e a distribuição dos parágrafos.

## Estrutura

```
index.html              resumos, perguntas oficiais e marcações
assets/css/style.css    estilo, temas claro e escuro
assets/js/verses.js     578 versículos da NWT (12 livros, 18 capítulos)
assets/js/notes.js      as 40 anotações, a trilha de 4 etapas
assets/js/app.js        modais, filtros, roteiro, progresso
assets/img/             as duas imagens do artigo
```

Gerado com a skill `estudo-jw` (`~/.claude/skills/estudo-jw/`).

## Fontes

- [Artigo no jw.org](https://www.jw.org/pt/biblioteca/revistas/sentinela-estudo-julho-2026/O-que-aprendemos-com-os-gibeonitas/)
- [Bíblia, Tradução do Novo Mundo, no wol.jw.org](https://wol.jw.org/pt/wol/binav/r5/lp-t)

Os resumos e as anotações são notas de preparação pessoal, não material publicado pelas
Testemunhas de Jeová. O artigo, as imagens e o texto da Bíblia são propriedade da Watch
Tower Bible and Tract Society.
