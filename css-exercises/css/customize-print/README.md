# Estilizando texto

## Objetivo

O objetivo desta atividade consiste em abordar os seguintes temas:

- Reuso de CSS com *External Stylesheet*
- Importando estilos no CSS
- Declaração de estilo de texto: `text-align`, `font-weight`, `font-style`
- Estilizando media para impressão
- Criando media query básico

## Descrição

Um headhunter no intuito de avaliar os conhecimentos básicos de CSS sobre At-rules e Media Query, criou o seguinte desafio disponível no arquivo [site.zip](site.zip). **Obs.:** Os arquivos e diretórios do site apresentam a estrutura a seguir:

```
site
├── css
│   ├── master.css
│   ├── print.css
│   └── text.css
└── index.html
```

**INSTRUÇÃO 1.** Ative o arquivo `master.css` como folha de estilo do `index.html`.

**INSTRUÇÃO 2.** No arquivo `text.css`, tente aplicar o alinhamento central, negrito e itálico respectivamente nas classes `text-center`, `bold` e `italic`.

**INSTRUÇÃO 3.** No arquivo `master.css` importe os estilos definidos em `text.css`.

**INSTRUÇÃO 4.** Inclua a configuração da folha de estilo `print.css` como definição de impressão da página `index.html`.

**INSTRUÇÃO 5.** Faça com que o `index.html` quando exibido em alta resolução até a largura de 800px apresente o texto dentro da `div` em duas colunas, usando a declaração de estilo `columns: 2;`.

> [Alternativa de resposta](site-response/index.html).