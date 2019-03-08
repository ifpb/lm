# [Properties](https://docs.webplatform.org/wiki/css/properties)

* [Properties](#properties)
* [Shorthand Properties](#shorthand-properties)
* [Values and Units](#values-and-units)

## Properties
---

[`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size), 
[`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style), 
[`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight), 
[`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family), 
[`font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

[examples/font.html](examples/font.html):
```css
p {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  font-family: Times;
}
```

```html
<body>
  <p>Lorem ipsum dolor</p>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="font: italic bold 20px Times;">Lorem ipsum dolor</p>
</div>

## Shorthand Properties
---

[examples/font-shorthand.html](examples/font-shorthand.html):
```css
p {
  font: italic bold 20px Times;
}
```

```html
<body>
  <p>Lorem ipsum dolor</p>
</body>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="font: italic bold 20px Times;">Lorem ipsum dolor</p>
</div>

## Other Properties
---

* [Typography](../typography/)
* [Web Font](../web-font/)
* [Icons](../icon/)
* [Hyperlinks](../links/)
* [Box model](../box-model/)
* [Background](../background/)

## References
---

* Properties:
  * Doc: [WP](https://docs.webplatform.org/wiki/css/properties), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index) e [W3C](https://www.w3.org/TR/CSS2/propidx.html)<br>
  * Cheat Sheet: [smashing](https://www.smashingmagazine.com/2009/07/css-3-cheat-sheet-pdf/) ([pdf](https://www.smashingmagazine.com/wp-content/uploads/images/css3-cheat-sheet/css3-cheat-sheet.pdf)), [w3school](http://www.w3schools.com/cssref/), [tutorialspoint](http://www.tutorialspoint.com/css/css_references.htm), [1stwebdesigner](http://www.1stwebdesigner.com/freebies/css-cheat-sheets-designers/)
* Color
  * [Color Table](values.md#color)
  * [CSS values and units \| MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) (Numeric values, Percentages, Colors, Coordinate positions, Functions)
* [Value definition syntax \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax)