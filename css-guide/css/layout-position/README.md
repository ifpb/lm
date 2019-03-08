# CSS Positioning

- [Static positioning](#static-positioning)
- [Relative positioning](#relative-positioning)
  - [top, bottom, left, and right](#top-bottom-left-and-right)
  - [z-index](#z-index)
- [Absolute positioning](#absolute-positioning)
  - [Positioning contexts (Closest positioned)](#positioning-contexts-closest-positioned)
- [Fixed positioning](#fixed-positioning)
- [Sticky positioning](#sticky-positioning)
- [Stretch a Box](#stretch-a-box)
  - [Absolute inside Absolute, with Fixed Dimensions](#absolute-inside-absolute-with-fixed-dimensions)
  - [Absolute Inside Relative, with Fixed Dimensions](#absolute-inside-relative-with-fixed-dimensions)
  - [Absolute Inside Relative Without a Specific Height](#absolute-inside-relative-without-a-specific-height)
- [Float](#float)

## Static positioning
---

[demo/static.html](demo/static.html):

```css
#two {
  background-color: #eee;
  position: static;
}
```

<iframe 
  src="demo/static.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Relative positioning
---

### top, bottom, left, and right

[demo/relative.html](demo/relative.html):

```css
#two {
  background-color: #eee;
  position: relative;
  top: 5.8vw;
  left: 5.8vw;
}
```

<iframe 
  src="demo/relative.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

### z-index

[demo/z-index.html](demo/z-index.html):

```css
#two {
  background-color: #eee;
  position: relative;
  top: 5.8vw;
  left: 5.8vw;
  z-index: -1;
}

#three {
  z-index: -2;
}
```

<iframe 
  src="demo/z-index.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Absolute positioning
---

[demo/absolute.html](demo/absolute.html):

```css
#two {
  background-color: #eee;
  position: absolute;
  top: 5.8vw;
  left: 5.8vw;
}
```

<iframe 
  src="demo/absolute.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

### Positioning contexts (Closest positioned)

[demo/static-absolute.html](demo/static-absolute.html):

```html
<div class="static parent">
  <div class="absolute child"></div>
</div>
```

```css
.static {
  position: static;
}

.absolute {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

<iframe 
  src="demo/static-absolute.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

[demo/rel-absolute.html](demo/rel-absolute.html):

```html
<div class="relative parent">
  <div class="absolute child"></div>
</div>
```

```css
.relative {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

<iframe 
  src="demo/rel-absolute.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

[demo/rel-rel-absolute.html](demo/rel-rel-absolute.html):

```html
<div class="relative grandparent">
  <div class="relative parent">
    <div class="absolute child"></div>
  </div>
</div>
```

```css
.relative {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

<iframe 
  src="demo/rel-rel-absolute.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Fixed positioning
---

[demo/fixed.html](demo/fixed.html):

```css
#two {
  background-color: #eee;
  position: fixed;
  top: 5.8vw;
  left: 5.8vw;
}
```

<iframe 
  src="demo/fixed.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Sticky positioning
---

[demo/sticky.html](demo/sticky.html):

```css
dt {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}
```

<iframe 
  src="demo/sticky.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Stretch a Box
---

### Absolute inside Absolute, with Fixed Dimensions

[demo/static-static-fixed-height.html](demo/static-static-fixed-height.html):

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: static;
  width: 200px;
  border: 3px solid #000;
}

.child {
  position: static;
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

<iframe 
  src="demo/static-static-fixed-height.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

### Absolute Inside Relative, with Fixed Dimensions

[demo/rel-absolute-fixed-heigh.html](demo/rel-absolute-fixed-height.html):

```css
.parent {
  position: relative;
  width: 200px;
  border: 3px solid #000;
}

.child {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

<iframe 
  src="demo/rel-absolute-fixed-height.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

### Absolute Inside Relative Without a Specific Height

[demo/rel-absolute-strech-height.html](demo/rel-absolute-strech-height.html):

```css
.parent {
  position: relative;
  width: 200px;
  height: 100px;
  border: 3px solid #000;
}

.child {
  position: absolute;
  width: 100px;
  top: 0px;
  bottom: 0px;
  background-color: blue;
}
```

<iframe 
  src="demo/rel-absolute-strech-height.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

## Float
---

[demo/float.html](demo/float.html)

```css
img {
  float: right;
}
```

<iframe 
  src="demo/float.html" 
  style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"
  width="100%"
  height="300"
  frameborder="0"
  allowfullscreen>
</iframe>

<!-- 
TODO
Flow Root 
https://css-tricks.com/display-flow-root/
-->

## References
---

- Propriedades: [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) (`static`\|`relative`\|`absolute`\|`sticky`\|`fixed`), `top`, `left`, `right`, `bottom`, `z-index`, `float`, `clear`
- [position \| CSS Tricks](https://css-tricks.com/almanac/properties/p/position/)
- [Learn CSS Layout](http://learnlayout.com/position.html)
- [All About Floats - CSS Tricks](https://css-tricks.com/all-about-floats/)
- [5 Things You Might Not Know About the CSS Positioning Types](https://scotch.io/bar-talk/5-things-you-might-not-know-about-the-css-positioning-types)
- [How browsers position floats – Monica Dinculescu](https://meowni.ca/posts/float-layout/)
- [CSS: Stretch a Box to Its Parent's Bounds](http://www.devign.me/css-stretch-a-box-to-its-parent-bounds)


<!-- 
Fixed page header overlaps in-page anchors
https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors
http://jsfiddle.net/FRpHE/225/
 -->