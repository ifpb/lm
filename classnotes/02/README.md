# Introdução ao CSS

  - [Dilema da Estilização](#dilema-da-estilização)
    - [`<center>`](#center)
    - [`<font>`](#font)
  - [Declaração do CSS](#declaração-do-css)
    - [Inline stylesheet](#inline-stylesheet)
    - [Internal stylesheet](#internal-stylesheet)
    - [External stylesheet](#external-stylesheet)
  - [Sintaxe do CSS](#sintaxe-do-css)
    - [Propriedades](#propriedades)
    - [Seletores](#seletores)
      - [Elemento](#elemento)
      - [`#id`](#id)
      - [`.class`](#class)
      - [Descendant combinator](#descendant-combinator)
    - [Função](#função)
      - [`rgb()`, `rgba()`](#rgb-rgba)

## Dilema da Estilização

- [Browser WWW](https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)
- [Primeira Página da Web](http://info.cern.ch/hypertext/WWW/TheProject.html)

### [`<center>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center)

```html
<center>
  <p>Lorem ipsum dolor</p>
</center>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <center><p>Lorem ipsum dolor</p></center>
</div>

### [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)

```html
<font size="20px" color="red" face="Helvetica">Lorem ipsum dolor</font>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
<font size="20px" color="red" face="Helvetica">Lorem ipsum dolor</font>
</div>

## Declaração do CSS

---

### Inline stylesheet

```
            declaration
          ┌──────┴───────┐
<p style="font-size: 20px;">Lorem ipsum dolor</p>
          └───┬───┘  └─┬─┘
          property   value
```

Exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1 style="color: blue;">Lorem ipsum</h1>
  <p style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: blue;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue;">Lorem ipsum</h1>
  <p style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: blue;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

### Internal stylesheet

```
 selector
   ┌┴┐     declaration
    p { ┌──────┴───────┐
        font-size: 20px;
    }   └───┬───┘  └─┬─┘
        property   value
```

Exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    p {
      font-size: 20px;
      text-align: justify;
    }
    p, h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue">Lorem ipsum</h1>
  <p style="font-size: 20px; color: blue; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

### External stylesheet

```
site
├── css
│   └── master.css
└── index.html
```

```html
<link rel="stylesheet" href="css/master.css">
```

Exemplo:

[`stylesheets/external/index.html`](stylesheets/external/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/master.css">
</head>
<body>
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>
```

[`stylesheets/external/css/master.css`](stylesheets/external/css/master.css):
```css
p {
  font-size: 20px;
  text-align: justify;
}
p, h1 {
  color: blue;
}
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue">Lorem ipsum</h1>
  <p style="font-size: 20px; color: blue; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

## Sintaxe do CSS

---

### Propriedades

```css
p {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  font-family: Times;
}
```

> Shorthand Properties: `font: italic bold 20px Times;`

```html
<body>
  <p>Lorem ipsum dolor</p>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="font: italic bold 20px Times;">Lorem ipsum dolor</p>
</div>

### Seletores

#### Elemento

```css
h1 {
  color: blue;
}

span {
  font-weight: bold;
  font-size: 1.2rem;
  color: tomato;
}

div {
  color: tomato;
}
```

```html
<h1>Lorem ipsum dolor</h1>
<p>Lorem ipsum, <span>dolor</span> sit amet consectetur adipisicing elit. Id, quia...</p>
<div>
  <p>Expedita, officia rem, non nulla harum ut fugit optio explicabo temporibus eligendi...</p>
  <p>Perferendis eaque ullam harum illum quas repudiandae dolore minima labore quod...</p>
</div>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue;">Lorem ipsum dolor</h1>
  <p>Lorem ipsum, <span style="font-weight: bold; font-size: 1.2rem; color: tomato;">dolor</span> sit amet consectetur adipisicing elit. Id, quia...</p>
  <div style="color: tomato;">
    <p>Expedita, officia rem, non nulla harum ut fugit optio explicabo temporibus eligendi...</p>
    <p>Perferendis eaque ullam harum illum quas repudiandae dolore minima labore quod...</p>
  </div>
</div>

#### `#id`

```css
p {
  color: green;
}

#first {
  color: red;
}
```

```html
<body>
  <h1>Lorem ipsum</h1>
  <p id="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: #606c71;">Lorem ipsum</h1>
  <p style="color: red;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: green;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="color: green;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

#### `.class`

```css
p {
  color: green;
}

.color-red {
  color: red;
}
```

```html
<body>
  <h1>Lorem ipsum</h1>
  <p class="color-red">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
  <p class="color-red">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: #606c71;">Lorem ipsum</h1>
  <p style="color: red;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: green;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
  <p style="color: red;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
</div>

#### Descendant combinator

[examples/descendant-combinator.html](examples/descendant-combinator.html):
```css
header ul {
  list-style-type: none;
}
```

```html
<body>
  <header>
    <ul>
      <li><a href="#">Menu 1</a></li>
      <li><a href="#">Menu 2</a></li>
    </ul>
  </header>
  <main>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </main>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <header>
    <ul style="list-style-type: none;">
      <li><a href="#">Menu 1</a></li>
      <li><a href="#">Menu 2</a></li>
    </ul>
  </header>
  <main>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </main>
</div>

### Função

#### `rgb()`, `rgba()`

```css
h1 {
  color: rgb(255, 0, 0);
}

p {
  color: rgba(255, 0, 0, .5);
}
```

```html
<h1>Lorem ipsum dolor</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quia...</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: rgb(255, 0, 0);">Lorem ipsum dolor</h1>
  <p style="color: rgba(255, 0, 0, .5);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quia...</p>
</div>
