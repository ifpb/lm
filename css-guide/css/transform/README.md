# [Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

- [Syntax](#syntax)
- [scale](#scale)
- [rotate](#rotate)
- [translate](#translate)
- [skew](#skew)
- [matrix](#matrix)
- [perspective](#perspective)

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
---

```css
/* Keyword values */
transform: none;

/* Function values */
transform: scale(2);
transform: rotate(45deg);
transform: skew(40deg);

/* Multiple function values */
transform: scale(2) rotate(45deg);
```

## [scale](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)
---

```css
scale(sx)
scale(sx, sy)
scaleX(sx)
scaleY(sy)
```

[demo/scale.html](demo/scale.html):

<iframe 
  src="demo/scale.html" 
  width="100%"
  height="470"
  frameborder="0"
  allowfullscreen>
</iframe>

## [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
---

```css
rotate(a)
rotateX(a)
rotateY(a)
rotateZ(a)
rotate3d(x, y, z, a)
```

[demo/rotate.html](demo/rotate.html):

<iframe 
  src="demo/rotate.html" 
  width="100%"
  height="470"
  frameborder="0"
  allowfullscreen>
</iframe>

## [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
---

```css
translate(tx)
translateX(tx)
translateY(tx)
translateZ(tx)
translate(tx, ty)
translate3d(tx, ty, tz)
```

[demo/translate.html](demo/translate.html):

<iframe 
  src="demo/translate.html" 
  width="100%"
  height="330"
  frameborder="0"
  allowfullscreen>
</iframe>

## [skew](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew)
---

```css
skew(ax)
skewX(ax)
skewY(ax)
skew(ax, ay)
```

[demo/skew.html](demo/skew.html):

<iframe 
  src="demo/skew.html" 
  width="100%"
  height="310"
  frameborder="0"
  allowfullscreen>
</iframe>

## [matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)
---

```css
matrix(a, b, c, d, tx, ty)
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

[demo/matrix.html](demo/matrix.html):

<iframe 
  src="demo/matrix.html" 
  width="100%"
  height="200"
  frameborder="0"
  allowfullscreen>
</iframe>

<!-- 
## [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective)
---

```css
perspective(d)
```

[demo/perspective.html](demo/perspective.html):

<iframe 
  src="demo/perspective.html" 
  width="100%"
  height="200"
  frameborder="0"
  allowfullscreen>
</iframe> 

## Multiple function
---

-->


## References
---

- [Using CSS transforms \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/#funcdef-rotate3d)
- [transform \| CSS Tricks](https://css-tricks.com/almanac/properties/t/transform/)
- [The CSS3 matrix() Transform for the Mathematically Challenged](http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/)
- [Alternative Units for CSS3 Rotation Transforms (grad, rad, turn)](https://www.impressivewebs.com/alternative-units-css3-rotate-transforms/)
- [Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/) ([CSS triggers: Layout, Paint, Composite](https://csstriggers.com))