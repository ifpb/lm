# HTML Syntax

* [HTML Elements](#html-elements)
* [HTML DOCTYPE](#html-doctype)
* [HTML Attributes](#html-attributes)
* [HTML Entities](#html-entities)
* [HTML Comment](#html-comment)

## HTML Elements
---

### Structure

```
openning              closing
  tag      content      tag
  ┌┴┐┌────────────────┐┌─┴─┐
  <p>Lorem ipsum dolor.</p>
  └────────────────────────┘
          Element
```

#### Nesting elements

```html
<p>Lorem <strong>ipsum</strong> dolor.</p>
```

```html
<p>Lorem <strong>ipsum dolor.</p></strong> 👎
```

### Example

[`element/index.html`](element/index.html):
```html
<html>
<head>
  <title>Bem-vindos</title>
</head>
<body>
  <h1>Olá, turma!</h1>
  <p>Meu primeiro parágrafo</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: #606c71;">Olá, turma!</h1>
  <p>Meu primeiro parágrafo</p>
</div>

### References

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), [WP](https://docs.webplatform.org/wiki/html/elements) e [W3C](https://www.w3.org/TR/2014/REC-html5-20141028/index.html)
* [Title Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title): (Description, Attributes, Usage, Example, Specifications, Browser compatibility)
* Comparison of elements: [w3school](http://www.w3schools.com/tags/ref_html_dtd.asp), [triin](http://www.triin.net/temp/html-elements.html)
* [Obsolete and deprecated elements \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)
* [Dialog Element \| Can I Use](https://caniuse.com/#feat=dialog)
* Elements: `<!DOCTYPE>`,
  [`<html>`,](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) 
  [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head),
  [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title),
  [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body),
  [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements),
  [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

## HTML DOCTYPE
---

### HTML5

[`element/index.html`](element/index.html):
```html
<!DOCTYPE html>
<html>
<head>
  <title>Bem-vindos</title>
</head>
<body>
  <h1>Olá, turma!</h1>
  <p>Meu primeiro parágrafo</p>
</body>
</html>
```

### References

* [Recommended Doctype Declarations to use in your Web document \| W3C](https://www.w3.org/QA/2002/04/valid-dtd-list.html)
* [Doctypes and markup styles \| W3C](https://www.w3.org/wiki/Doctypes_and_markup_styles)
* [Quirks Mode and Standards Mode \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
* [DOCTYPE Examples](doctype/)

## HTML Attributes
---

### Structure

```
     attribute  
   ┌─────┴────┐
<p lang="pt-BR">Lorem ipsum dolor.</p>
```

#### Empty elements

```html
<meta name="description" content="A description of the page">
```

### Example

[`attribute/index.html`](attribute/index.html):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Olá, turma!</h1>
  <p>Meu primeiro parágrafo</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: #606c71;">Olá, turma!</h1>
  <p>Meu primeiro parágrafo</p>
</div>

### References

* HTML Attributes: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), [WP](https://docs.webplatform.org/wiki/html/attributes) e [W3C](https://www.w3.org/TR/2014/REC-html5-20141028/index.html)
* [Global Attributes \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
* [Meta attributes \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes)
* [HTML attributes \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html#Attributes)
* [Character Sets \| IANA](https://www.iana.org/assignments/character-sets/character-sets.xhtml)
* [Language Subtag Registry \| IANA](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
* [Charset Guide](charset/)
* Attributes:
  * [global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes): `lang`
  * [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta): `charset`

## HTML Entities
---

### Entity Table

| Char | Description | Unicode |Entity Name | Entity Code (Hex) |  Entity Code (Dec) |
|-|-|-|-|-|-|
| ! | EXCLAMATION MARK | U+00021 | &amp;excl; | &amp;#x00021; | &amp;#33; |
| & | AMPERSAND | U+00026 | &amp;amp; &amp;AMP; | &amp;#x00026; | &amp;#38; |
| < | LESS-THAN SIGN | U+0003C | &amp;lt; &amp;LT; | &amp;#x0003C; | &amp;#60; |
| > | GREATER-THAN SIGN | U+0003E | &amp;gt; &amp;GT; | &amp;#x0003E; | &amp;#62; |
| © | COPYRIGHT SIGN | U+000A9 | &amp;copy; &amp;COPY; | &amp;#x000A9; | &amp;#169; |
| á | LATIN SMALL LETTER A WITH ACUTE | U+000E1 | &amp;aacute; | &amp;#x000E1; | &amp;#225;|

### Example

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Para criar um parágrafo em HTML é necessário usar a tag &lt;p>.</p>
  <p>A entidade &amp;lt; no HTML cria o caracter <.</p>
  <p>Para exibir o © no HTML usamos a entidade &amp;copy;.</p>
</div>

[`entity/problem.html`](entity/problem.html):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <p>Para criar um parágrafo em HTML é necessário usar a tag <p>.</p>
  <p>A entidade &lt; no HTML cria o caracter <.</p>
  <p>Para exibir o © no HTML usamos a entidade &copy;.</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Para criar um parágrafo em HTML é necessário usar a tag </p><p>.</p>
  <p>A entidade &lt; no HTML cria o caracter <.</p>
  <p>Para exibir o © no HTML usamos a entidade &copy;.</p>
</div>

[`entity/index.html`](entity/index.html):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <p>Para criar um parágrafo em HTML é necessário usar a tag &lt;p>.</p>
  <p>A entidade &amp;lt; no HTML cria o caracter <.</p>
  <p>Para exibir o © no HTML usamos a entidade &amp;copy;.</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Para criar um parágrafo em HTML é necessário usar a tag &lt;p>.</p>
  <p>A entidade &amp;lt; no HTML cria o caracter <.</p>
  <p>Para exibir o © no HTML usamos a entidade &amp;copy;.</p>
</div>

### References

* [HTML 5 Entities \| W3C](https://dev.w3.org/html5/html-author/charref)
* [HTML 5.1 Entities \| W3C](https://www.w3.org/TR/html51/syntax.html#named-character-references)


## HTML Comment
---

### Structure

```html
<!-- HTML Comment -->
```

### Example

[`comment/index.html`](comment/index.html):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <!-- Cabeçalho -->
  <h1>Olá, turma!</h1>
  
  <!-- Conteúdo -->
  <p>Meu primeiro parágrafo</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <!-- Cabeçalho -->
  <h1 style="color: #606c71;">Olá, turma!</h1>
  <!-- Conteúdo -->
  <p>Meu primeiro parágrafo</p>
</div>
