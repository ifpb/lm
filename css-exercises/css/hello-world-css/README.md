# Criando seu primeiro estilo

## Objetivo

O objetivo desta atividade consiste em abordar os seguintes temas:

- Uso de CSS: Inline, Internal, External, Mixed
- Properties: `color`, `font-size`, `text-align`, `background-color`, `font-style`, `font-weight`
- Selectors: tipo (elementname), classe (.classname), id (#idname)

## Descrição

O objetivo desta atividade consiste em criar os primeiros passos com a linguagem de estilo CSS no HTML.

## CSS Local vs CSS Interno

Tomando como partida o código fonte do arquivo [exe0.html](site/exe0.html), observe que o `<body>` possui a seguinte estrutura:

```
<body>
  <h1>Linguagem de Marcação</h1>
  <p>Isto é um parágrafo.</p>
  <p>Isto é outro parágrafo</p>
</body>
```

Então, tente definir o estilo de modo inline (local na tag) para mudar a cor e o tamanho da fonte dos contéudos dos elementos `<h1>` e `<p>`:

* h1 - color (blue) / font-size (16px)
* p - color (red) / font-size (12px)

Agora usando o arquivo [exe1.html](site/exe1.html), que possui conteúdo semelhante ao [exe0.html](site/exe0.html), tente fazer a mesma estilização só que de modo interno.

## Seletor de Id

Algumas vezes, diante de inúmeras tags do mesmo tipo, é necessário estilizar algum tag específica. Então, considere o conteúdo do arquivo [exe2.html](site/exe2.html):

```
<body>
  <h1>Linguagem de Marcação</h1>
  <p id="para">Isto é um parágrafo.</p>
  <p>Isto é outro parágrafo</p>
</body>
```

Para mudar a cor do texto do elemento que possuir o atributo `id="para"` para a cor `green`.

## CSS Externo e Seletor de Classe

O CSS Externo é uma ótima alternativa de reutilização de estilo entre várias páginas HTML. Então, para experimentar esta opção de configuração de estilo, crie uma pasta chamada `css` e nela gere o arquivo `estilo.css` para ser referenciado pelo arquivo [exe3.html](site/exe3.html):

```
<body>
  <h1>Linguagem de Marcação</h1>
  <p>Isto é um parágrafo.</p>
  <p class="texto">Isto é outro parágrafo</p>
  <p class="texto italico">Isto também é um parágrafo</p>
</body>
```

Para estilizar a estrutura apresentada, o arquivo `css` deverá conter os seguintes estilos:

* o texto do h1 estar centralizado (align center), na cor branca (color white), com font-size igual 16px e com background-color gray.
* os elementos com a classe "texto" devem ter a color red.
* os elementos com a classe "italico" devem estar em itálico (font-style italic).
* Apenas na palavra "também", mude sua color (blue) e o font-weight (bold). Use o elemento <spam> para isolar a palavra.

> Alternativa de resposta: [exe0.html](site-response/exe0.html), [exe1.html](site-response/exe1.html), [exe2.html](site-response/exe2.html), [exe3.html](site-response/exe3.html).
