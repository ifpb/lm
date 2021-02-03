# Introdução ao HTML

  - [Linguagem de Marcação](#linguagem-de-marcação)
    - [Desafio](#desafio)
    - [Markdown](#markdown)
    - [HTML](#html)
    - [Comparação](#comparação)
  - [HTML](#html-1)
    - [Tags (Sintase)](#tags-sintase)
    - [Atributo de tag (Sintase)](#atributo-de-tag-sintase)
    - [Estrutura básica](#estrutura-básica)
    - [Hyperlink](#hyperlink)
    - [Imagem](#imagem)
    - [Lista](#lista)

## Linguagem de Marcação

---

### Desafio

```txt
Lorem ipsum dolor
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

Output:

<div style="border-radius: 0.3rem; background-color: #f3f6fa; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color:#000">Lorem ipsum dolor</h1>
  <p style="color:#000"><i>Lorem</i> ipsum <b>dolor</b> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

### Markdown

```md
# Lorem ipsum dolor

_Lorem_ ipsum **dolor** sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color:#000">Lorem ipsum dolor</h1>
  <p style="color:#000"><em>Lorem</em> ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

Referências:

- [Sintaxe](https://daringfireball.net/projects/markdown/syntax)
- [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Markdown Preview (vscode)](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview)

### HTML

```html
<h1>Lorem ipsum dolor</h1>
<p>
  <i>Lorem</i> ipsum <b>dolor</b> sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

Output:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color:#000">Lorem ipsum dolor</h1>
  <p style="color:#000"><i>Lorem</i> ipsum <b>dolor</b> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

Referências:

- [Sintaxe](https://www.w3.org/TR/html/)
- [HTML Reference - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### Comparação

| estrutura                                                      | .md             | .html |
| -------------------------------------------------------------- | --------------- | ----- |
| <span style="font-size: 2rem; font-weight: bold;">Title</span> | \#              | \<h1> |
| paragraph                                                      | quebra de linha | \<p>  |
| <i>Italic</i>                                                  | \*              | \<i>  |
| <b>Bold</b>                                                    | \*\*            | \<b>  |

## HTML

---

### Tags (Sintase)

Estrutura:

```
openning              closing
  tag      content      tag
  ┌┴┐┌────────────────┐┌─┴─┐
  <p>Lorem ipsum dolor.</p>
  └────────────────────────┘
          Element
```

Exemplos:

- Cabeçalho: `<title>`, `<link>`, `<style>`, `<meta>`
- Texto: `<p>`, `<b>`, `<i>`, `<h1-6>`
- Lista: `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
- Hiperlink: `<a>`
- Tabela: `<table>`, `<tr>`, `<th>`, `<td>`
- Imagem: `<img>`
- Mais exemplos: [HTML Reference - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### Atributo de tag (Sintase)

Estrutura:

```
     attribute
   ┌─────┴────┐
<p lang="pt-BR">Lorem ipsum dolor.</p>
```

Exemplos:

- Global: `lang`, `id`, `class`
- Específico:
  - `<img>`: `src`, `alt`
  - `<ol>`: `start`, `type`
  - `<table>`: `border`
  - `<meta>`: `name`, `content`

```html
<meta name="description" content="A description of the page" />
```

### Estrutura básica

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
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

### Hyperlink

```
hyperlink = content + url

content = text, image...
```

```html
<a href="url">content</a>
```

```html
<a href="http://www.ifpb.edu.br/">ifpb</a>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem">
  <a href="http://www.ifpb.edu.br/">ifpb</a>
</div>

### Imagem

```html
<img src="url" alt="text alternative" />
```

**index.html ➡︎ image.png**

```
/
└── var
    └── www
        └── site
            └── pages
                ├── index.html
                └── img
                    └── image.png
```

```html
<img src="img/image.png" alt="Image Description" />
<img src="/var/www/site/pages/img/image.png" alt="Image Description" />
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <img src="assets/ifpb-logo.png" alt="Image Description">
</div>

### Lista

```html
<p>Developer Roles:</p>
<ol>
  <li>Web developer</li>
  <li>Desktop applications developer</li>
  <li>Mobile developer</li>
</ol>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Developer Roles:</p>
  <ol>
    <li>Web developer</li>
    <li>Desktop applications developer</li>
    <li>Mobile developer</li>
  </ol>
</div>
