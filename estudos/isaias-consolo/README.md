# Consolo em Isaías

Preparação do estudo de A Sentinela **“Encontre consolo no livro de Isaías”**
(edição de estudo de julho de 2026), para a semana de **14 a 20 de setembro de 2026**.

## A diferença desta página: o comentário já vem pronto

Em cada uma das 16 perguntas, o campo **não está vazio**. Ele já vem com um comentário
escrito em primeira pessoa, no tamanho de quem levanta a mão e fala por trinta segundos.
Você ajusta com as suas palavras, ou apaga e escreve o seu.

- A etiqueta ao lado do campo mostra se aquilo ainda é o **comentário base** ou já virou
  **seu comentário**.
- O link **voltar ao comentário base** desfaz a sua edição, com aviso antes.
- No fim da página, o contador mostra quantos dos 16 você já ajustou.

O comentário do §16 é de propósito um modelo com lacunas, porque a pergunta pede a sua
experiência pessoal.

## O que esta página é, e o que não é

Ela **não reproduz o artigo**. Cada parágrafo aparece em resumo, com as frases curtas
citadas que servem de gancho para as anotações. O texto completo fica no jw.org e no
JW Library.

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
| **Anotações** | Lista as 35 anotações agrupadas por tipo |
| **Complementos** | Abre de uma vez os blocos "Se alguém já comentou isso" |
| **60 min** | Roteiro cronometrado do estudo |
| **Resumo** | Os sete pontos altos e as frases de encerramento |
| Seção **Suas respostas** | Baixa e carrega seus comentários em arquivo, para outro aparelho |
| Etiqueta E1 a E5 | A etapa da trilha de ensino a que o parágrafo pertence |

## Conteúdo

- **35 anotações** em 6 categorias, ancoradas nos 16 parágrafos.
- **932 versículos** da NWT, de 15 livros, embutidos para funcionar sem internet.
- **5 etapas de direção**: Jeová consola como mãe; quando a vida muda de repente; quando
  a culpa esmaga; quando perdemos alguém; escolha o seu texto e guarde.
- **Roteiro de 60 minutos** com os cânticos 41 e 3, e o peso maior no bloco da culpa, que
  é o mais longo do artigo.

## Estrutura

```
index.html              resumos, perguntas oficiais, comentários base e marcações
assets/css/style.css    estilo, temas claro e escuro
assets/js/verses.js     932 versículos da NWT (15 livros, 33 capítulos)
assets/js/notes.js      as 35 anotações e a trilha de 5 etapas
assets/js/app.js        modais, filtros, comentário base, backup, progresso
assets/img/             as três imagens do artigo
```

Gerado com a skill `estudo-jw` (`~/.claude/skills/estudo-jw/`).

## Fontes

- [Artigo no jw.org](https://www.jw.org/pt/biblioteca/revistas/sentinela-estudo-julho-2026/Encontre-consolo-no-livro-de-Isa%C3%ADas/)
- [Bíblia, Tradução do Novo Mundo, no wol.jw.org](https://wol.jw.org/pt/wol/binav/r5/lp-t)

Os resumos, os comentários base e as anotações são notas de preparação pessoal, não
material publicado pelas Testemunhas de Jeová. O artigo, as imagens e o texto da Bíblia
são propriedade da Watch Tower Bible and Tract Society.
