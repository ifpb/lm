# [Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

- [Syntax](#syntax)
- [Opacity](#opacity)
- [Border inset](#border-inset)
- [Transform scale grow](#transform-scale-grow)
- [Transform scale shrink](#transform-scale-shrink)
- [Transform scale image](#transform-scale-image)
- [Transform translate](#transform-translate)
- [Filter blur](#filter-blur)
- [Filter contrast](#filter-contrast)
- [Filter sepia](#filter-sepia)
- [Filter gray scale](#filter-gray-scale)
- [Filter drop shadow](#filter-drop-shadow)
- [Background color](#background-color)
- [Background blend mode](#background-blend-mode)

## Syntax
---

> <b>Value:</b> [ none \| `<single-transition-property>` ] \|\| `<time>` \|\| `<single-transition-timing-function>` \|\| `<time>`<br>
> <br>
> `<single-transition-timing-function>`: linear \| ease \| ease-in \| ease-out \| ease-in-out \| cubic-bezier(`<number>`, `<number>`, `<number>`, `<number>`) \| step-start \| step-end \| steps(`<integer>`[, [ start \| end ] ]?) \| frames(`<integer>`)

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

[Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## Opacity
---

```css
.fade {
  opacity: 0.5;
  transition: opacity 1s;
  will-change: opacity;
}

.fade:hover {
  opacity: 1;
}
```

[demo/opacity.html](demo/opacity.html):

<iframe 
  src="demo/opacity.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Border inset
---

```css
.inset-border {
  transition: box-shadow 1s;
}

.inset-border:hover {
  box-shadow: inset 0 0 0 25px #53a7ea;
}
```

[demo/border-inset.html](demo/border-inset.html):

<iframe 
  src="demo/border-inset.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Transform scale grow
---

```css
.grow {
  transition: transform 1s;
  will-change: scale;
}

.grow:hover {
  transform: scale(1.2);
}
```

[demo/transform-grow.html](demo/transform-grow.html):

<iframe 
  src="demo/transform-grow.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Transform scale shrink
---

```css
.shrink {
  transition: transform 1s;
  will-change: transform;
}

.shrink:hover {
  transform: scale(0.8);
}
```

[demo/transform-shrink.html](demo/transform-shrink.html):

<iframe 
  src="demo/transform-shrink.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Transform scale image
---

```css
.img-scale {
  overflow: hidden;
}

.img-scale img {
  transition: transform 1s;
  will-change: transform
}

.img-scale img:hover {
  transform: scale(1.2);
}
```

[demo/transform-scale.html](demo/transform-scale.html):

<iframe 
  src="demo/transform-scale.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Transform translate
---

```css
.translate {
  transition: transform 1s;
  will-change: transform;
}

.translate:hover {
  transform: translateY(10px);
}
```

[demo/transform-translate.html](demo/transform-translate.html):

<iframe 
  src="demo/transform-translate.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Filter blur
---

```css
.blur {
  filter: blur(1px);
  transition: filter 1s;
}

.blur:hover {
  filter: blur(0px);
}
```

[demo/filter-blur.html](demo/filter-blur.html):

<iframe 
  src="demo/filter-blur.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Filter contrast
---

```css
.contrast {
  transition: filter .5s;
}

.contrast:hover {
  filter: contrast(120%);
}
```

[demo/filter-contrast.html](demo/filter-contrast.html):

<iframe 
  src="demo/filter-contrast.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Filter sepia
---

```css
.sepia {
  filter: sepia(100%);
  transition: filter 0.5s;
}

.sepia:hover {
  filter: sepia(0%);
}
```

[demo/filter-sepia.html](demo/filter-sepia.html):

<iframe 
  src="demo/filter-sepia.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Filter gray scale
---

```css
.gray-scale {
  filter: grayscale(100%);
  transition: filter 0.5s;
}

.gray-scale:hover {
  filter: grayscale(0%);
}
```

[demo/filter-gray-scale.html](demo/filter-gray-scale.html):

<iframe 
  src="demo/filter-gray-scale.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Filter drop shadow
---

```css
.drop-shadow {
  transition: filter 1s;
  will-change: transform;
}

.drop-shadow:hover {
  filter: drop-shadow(2px 2px 3px #000);
}
```

[demo/filter-drop-shadow.html](demo/filter-drop-shadow.html):

<iframe 
  src="demo/filter-drop-shadow.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Background color
---

```css
.chcolor {
  transition: background 1s;
  will-change: background;
}

.chcolor:hover {
  background:#53a7ea;
}
```

[demo/background-color.html](demo/background-color.html):

<iframe 
  src="demo/background-color.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

## Background blend mode
---

```css
.filter-blend {
  background-color: transparent;
  background-blend-mode: screen;
  transition: all 1s;
}

.filter-blend:hover {
  background-color: #f00;
}
```

[demo/background-blend-mode.html](demo/background-blend-mode.html):

<iframe 
  src="demo/background-blend-mode.html" 
  width="100%"
  height="250px"
  frameborder="0"
  allowfullscreen>
</iframe>

<!-- 
## Cross fading images
---

http://css3.bradshawenterprises.com/cfimg/
https://themarklee.com/2013/10/16/simple-crossfading-slideshow-css/ 
-->

## References
---

- [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [cubic-bezier.com](http://cubic-bezier.com/)
