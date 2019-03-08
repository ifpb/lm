# [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

* [Syntax](#syntax)
* [Examples](#examples)

## Syntax
---

* [Media types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_types): `all`, `print`, `screen`, `speech`
* [Media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features): `width`, `height`, `orientation`
* [Logical operators](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Logical_operators): `and`, `not`, `only`

```css
@media print {
  /* rulesets */
}
@media screen {
  /* rulesets */
}
@media screen, print {
  /* rulesets */
}
@media screen and (min-width: 500px) {
  /* rulesets */
}
```

```css
@import 'style.css' print;
@import 'style.css' screen;
@import 'style.css' screen, print;
@import 'style.css' screen and (min-width: 500px);
```

```html
<link rel="stylesheet" href="style.css" media="print">
<link rel="stylesheet" href="style.css" media="screen">
<link rel="stylesheet" href="style.css" media="screen, print">
<link rel="stylesheet" href="style.css" media="screen and (min-width: 500px)">
```

## Examples
---

```css
h1 {
  text-align: center;
}

@media print {
  h1 {
    text-align: left;
  }
}
```

## References
---

* Doc: [WP](https://docs.webplatform.org/wiki/css/mediaqueries), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) e [W3C](https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)
* [A Guide To The State Of Print Stylesheets In 2018](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)
