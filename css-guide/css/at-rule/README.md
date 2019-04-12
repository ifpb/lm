# [At-rules](https://docs.webplatform.org/wiki/css/atrules)

* [Meta-data Information](#meta-data-information)
  * [`@charset`](#charset)
  * [`@import`](#important)
* [Conditional Information](#conditional-information)
  * [`@media`](#media)
  * [`@document`](#document)
  * [`@support`](#support)
* [Descriptive Information](#descriptive-information)
  * [`@font-face`](#font-face)

## Meta-data Information
---

### [`@charset`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40charset)

```css
@charset "utf-8";

p {
  color: green;
}
```

### [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40import)

```
@import
├── css
│   ├── _color.css
│   ├── _text.css
│   └── main.css
└── index.html
```

[@import/index.html](@import/index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <h1 class="text-center">Lorem ipsum dolor</h1>
  <p class="blue">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</body>
</html>
```

[@import/css/main.css](@import/css/main.css)
```css
@import url('_color.css');
@import url('_text.css');
```

[@import/css/_color.css](@import/css/_color.css)
```css
.blue {
  color: blue;
}

.red {
  color: red;
}

.green {
  color: green;
}
```

[@import/css/_text.css](@import/css/_text.css)
```css
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="text-align: center;">Lorem ipsum dolor</h1>
  <p style="color: blue;">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>

## Conditional Information
---

(nested statements / conditional group rules / rulesets)

### [`@media`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media)

```css
p {
  text-align: center;
}

@media print {
  p {
    text-align: left;
  }
}
```

### [`@document`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40document)

Functions:
* `url()`, `url-prefix()`, `domain()`, `regexp()`

```css
@document url(http://www.w3.org/) {
  p {
    color: red;
  }
}
```

### [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports)

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}

@supports not (display: grid) {
  div {
    float: right;
  }
}
```

## Descriptive Information
---

### [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)

reference:
- [Web Font Guide](web-font.md)

```css
@font-face {
  font-family: 'Roboto';
  src: url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
}

p {
  font-family: 'Roboto', sans-serif;
}
```

## References
---

* Doc: [WP](https://webplatform.github.io/docs/css/atrules/) e [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)
