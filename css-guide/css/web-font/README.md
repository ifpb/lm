# Web Font

* [Web Font (@font-face)](#web-font-font-face)
* Google Fonts
  * [Web](#google-fonts-web)
  * [Download](#google-fonts-download)
  * [Customize](#google-fonts-customize)
  * [Multiple Fonts](#google-fonts-multiple-fonts)

## Web Font (@font-face)
---

[../at-rule/@font-face/](../at-rule/@font-face/):
```
site
├── css
│   └── master.css
├── fonts
│   └── Roboto.woff2
└── index.html
```

```css
@font-face {
  font-family: 'Roboto';
  src: url('../fonts/Roboto.woff2');
}

p {
  font-family: 'Roboto', sans-serif;
}
```

## Google Fonts (Web)
---

[google/web/](google/web/):
```
site
├── css
│   └── master.css
└── index.html
```

```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
```

CSS: [https://fonts.googleapis.com/css?family=Roboto](https://fonts.googleapis.com/css?family=Roboto)

```css
p {
  font-family: 'Roboto', sans-serif;
}
```

## Google Fonts (Download)
---

[google/local/](google/local/):
```
site
├── css
│   └── master.css
├── fonts
│   └── Roboto-Regular.woff2
└── index.html
```

```css
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(../fonts/Roboto-Regular.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

p {
  font-family: 'Roboto', sans-serif;
}
```

`unicode-range`: [Basic Latin](https://codepoints.net/basic_latin), [Latin-1 Supplement](https://codepoints.net/latin-1_supplement)

## Google Fonts (Customize)
---

[google/styles/](google/styles/):
```
site
├── css
│   └── master.css
└── index.html
```

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
```

```css
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
```

## Google Fonts (Multiple Fonts)
---

[google/multiple/](google/multiple/):
```
site
├── css
│   └── master.css
└── index.html
```

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
```

```css
h1 {
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Open Sans', sans-serif;
}
```

## References
---

- Web Fonts:
  - [Web fonts \| MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
- Google Fonts:
  - [Font selection and synthesis](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#font_selection_and_synthesis)
  - [Roboto Description](https://fonts.google.com/specimen/Roboto?selection.family=Roboto)
  - [Repository](https://fonts.google.com)
  - [Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- Fonts Gallery:
  - [Adobe Typekit](https://typekit.com)
  - [Skyfonts](https://skyfonts.com)
  - [Font Squirrel](https://www.fontsquirrel.com/)
  - [My Fonts](https://www.myfonts.com)
  - [Font Spring](https://www.fontspring.com)
  - [Ubuntu Fonte](https://design.ubuntu.com/font/)
