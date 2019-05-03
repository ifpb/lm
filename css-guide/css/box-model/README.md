# Box Model

* [Display](#display)
* [Box Model](#box-model-1)
* [Border](#border)
* [Margin](#margin)
* [Padding](#padding)
* [Width](#width)
* [Height](#height)
* [Border Radius](#border-radius)
* [Box Shadow](#box-shadow)
* [Border Image](#border-image)
* [Border Collapse](#border-collapse)
* [Box Sizing](#box-sizing)
* [Overflow](#overflow)
* [Outline](#outline)

![Box Model](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)<br>
Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap)

## [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
---

| Display | Flow | Margin, Border, Padding | Height | Width |
|-|-|-|-|-|-|-|
| Inline | surrounding text without creating line breaks before | Ok |  |  |
| Block | stacked upon other boxes | Ok | Ok | Ok |
| Inline-block | surrounding text without creating line breaks before | Ok | Ok | Ok |
| none | turns off the display of an element | | | |

### Inline box

```html
<span>Lorem ipsum</span>
<span>dolor</span>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <span>Lorem ipsum</span>
  <span>dolor</span>
</div>

### Block box

```html
<p>Lorem ipsum</p>
<p>Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Lorem ipsum</p>
  <p>Lorem ipsum</p>
</div>

### Inline-block box

```css
ul li {
  display: inline-block;
}
```

```html
<ul>
  <li>Lorem ipsum</li>
  <li>dolor</li>
</ul>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <ul>
    <li style="display: inline-block;">Lorem ipsum</li>
    <li style="display: inline-block;">dolor</li>
  </ul>
</div>

## [Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
---

> <b>Value:</b> `<br-width>` || `<br-style>` || `<color>`<br>
> <br>
> `<br-width>` = `<length>` \| thin \| medium \| thick<br>
> `<br-style>` = none \| hidden \| dotted \| dashed \| solid \| double \| groove \| ridge \| inset \| outset

### Syntax
```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;
```

### Example

```css
#first {
  border: 2px dotted #000;
}

#last {
  border: 5px solid #000;
}
```

```html
<p id="first">Lorem ipsum</p>
<p id="last">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="border: 2px dotted #000;">Lorem ipsum</p>
  <p style="border: 5px solid #000;">Lorem ipsum</p>
</div>

### Shorthand and Longhand options

| Shorthand | Longhand |
|-|-|
| [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) | [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)<br>[`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)<br>[`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) |
| [`border-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) | [`border-top-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)<br>[`border-top-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)<br>[`border-top-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color) |
| [`border-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) | [`border-bottom-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)<br>[`border-bottom-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)<br>[`border-bottom-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color) |
| [`border-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) | [`border-right-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)<br>[`border-right-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)<br>[`border-right-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color) |
| [`border-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) | [`border-left-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)<br>[`border-left-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)<br>[`border-left-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color) |
| [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) | [`border-top-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)<br>[`border-right-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)<br>[`border-bottom-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)<br>[`border-left-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width) |
| [`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) | [`border-top-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)<br>[`border-right-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)<br>[`border-bottom-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)<br>[`border-left-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style) |
| [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) | [`border-top-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)<br>[`border-right-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)<br>[`border-bottom-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)<br>[`border-left-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color) |

<br>
```css
span {
  border: 2px solid #000;
  border-top: dotted;
  border-right: outset;
  border-bottom: dashed;
}
```

```html
<span>Lorem ipsum</span>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <span style="border: 2px solid #000; border-top: dotted; border-right: outset; border-bottom: dashed;">Lorem ipsum</span>
</div>

## [Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
---

> <b>Value:</b> [ `<length>` \| `<percentage>` \| auto ]{1,4}

### Syntax
```css
/* Apply to all four sides */
margin: 1em;
margin: -3px;

/* vertical | horizontal */
margin: 5% auto;

/* top | horizontal | bottom */
margin: 1em auto 2em; 

/* top | right | bottom | left */
margin: 2px 1em 0 auto;
```

### Example

```css
.margin {
  border: 5px solid #000;
  margin: 3rem;
}
```

```html
<p>Lorem ipsum</p>
<p class="margin">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Lorem ipsum</p>
  <p style="border: 5px solid #000; margin: 3rem;">Lorem ipsum</p>
</div>

### Shorthand and Longhand options

<table>
  <thead>
    <tr>
      <th>Shorthand</th>
      <th>Longhand</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">
          <code class="highlighter-rouge">margin</code>
        </a>
      </td>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">
          <code class="highlighter-rouge">margin-bottom</code>
        </a><br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left">
          <code class="highlighter-rouge">margin-left</code>
        </a><br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right">
          <code class="highlighter-rouge">margin-right</code>
        </a><br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top">
          <code class="highlighter-rouge">margin-top</code>
        </a><br>
      </td>
    </tr>
  </tbody>
</table>
<br>

```css
span {
  border: 2px solid #000;
  margin-left: 20px;
  margin-right: 1em;
}
```

```html
<p>Lorem <span>ipsum</span> dolor.</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Lorem <span style="border: 2px solid #000;margin-left: 20px; margin-right: 1em;">ipsum</span> dolor.</p>
</div>

## [Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
---

> <b>Value:</b> [ `<length>` \| `<percentage>` ]{1,4}

### Syntax

```css
/* Apply to all four sides */
padding: 1em;

/* vertical | horizontal */
padding: 5% 10%;

/* top | horizontal | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;
```

### Example

```css
p {
  border: 5px solid #000;
  padding: 3rem;
}
```

```html
<p>Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="border: 5px solid #000; padding: 3rem;">Lorem ipsum</p>
</div>

### Shorthand and Longhand options

| Shorthand | Longhand |
|-|-|
| [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) | [`padding-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)<br>[`padding-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)<br>[`padding-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)<br>[`padding-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top) |
<br>

```css
span {
  border: 2px solid #000;
  padding-left: 20px;
  padding-right: 1em;
  padding-top: 1em;
}
```

```html
<p>Lorem <span>ipsum</span> dolor.</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Lorem <span style="border: 2px solid #000;padding-left: 20px; padding-right: 1em; padding-top: 1em;">ipsum</span> dolor.</p>
</div>

## [Width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
---

> <b>Value:</b> [ `<length>` \| `<percentage>` \| auto ]

### Syntax

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;
```

### Example

```css
p {
  border: 5px solid #000;
}

.w_400 {
  width: 400px;
}

.m_auto {
  margin: auto;
}

.ml_auto {
  margin-left: auto;
}
```

```html
<p>Lorem ipsum</p>
<p class="w_400">Lorem ipsum</p>
<p class="w_400 m_auto">Lorem ipsum</p>
<p class="w_400 ml_auto">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="border: 5px solid #000;">Lorem ipsum</p>
  <p style="border: 5px solid #000; width: 400px;">Lorem ipsum</p>
  <p style="border: 5px solid #000; width: 400px; margin: auto;">Lorem ipsum</p>
  <p style="border: 5px solid #000; width: 400px; margin-left: auto;">Lorem ipsum</p>
</div>

### [`min-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) and [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)

```css
p {
  border: 5px solid #000;
  width: 40%;
  min-width: 200px;
}
```

```html
<p>Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="border: 5px solid #000;width: 40%; min-width: 200px;">Lorem ipsum</p>
</div>


## [Height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
---

> <b>Value:</b> [ `<length>` \| `<percentage>` \| auto ]

### Syntax

```css
/* <length> values */
height: 300px;
height: 25em;

/* <percentage> value */
height: 75%;
```

### Example

```css
p {
  border: 5px solid #000;
}

.h_100 {
  height: 100px;
}
```

```html
<p>Lorem ipsum</p>
<p></p>
<p class="h_100">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="border: 5px solid #000;">Lorem ipsum</p>
  <p style="border: 5px solid #000;"></p>
  <p style="border: 5px solid #000; height: 100px;">Lorem ipsum</p>
</div>

## [Border Radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
---

> <b>Value:</b> `<length-percentage>`{1,4} [ / `<length-percentage>`{1,4} ]?<br>
> <br>
> `<length-percentage>` = `<length>` | `<percentage>`

### Syntax

```css
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* (first radius values) / radius */
border-radius: 10px 5% / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;
```

### Example

```css
p {
  text-align: center;
  border: 5px solid #000;
  padding: .5rem;
  width: 200px;
}

.br_10 {
  border-radius: 10px;
}

.br_20_10 {
  border-radius: 20px 10px;
}
```

```html
<p class="br_10">Lorem ipsum</p>
<p class="br_20_10">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="text-align:center; border: 5px solid #000; padding: .5rem; width: 200px; border-radius: 10px;">Lorem ipsum</p>
  <p style="text-align:center; border: 5px solid #000; padding: .5rem; width: 200px; border-radius: 20px 10px;">Lorem ipsum</p>
</div>

### Shorthand and Longhand options

| Shorthand | Longhand |
|-|-|
| [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) | [`border-top-left-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)<br>[`border-top-right-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)<br>[`border-bottom-right-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)<br>[`border-bottom-left-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius) |
<br>

```css
border-radius: 1em/5em;

/* ... is equivalent to: */
border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* ... is equivalent to: */
border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

## [Box Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) 
---

> <b>Value:</b> none \| `<shadow>`<br>
> <br>
> `<shadow>` = inset? && `<length>`{2,4} && `<color>`?

### Syntax

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

### Example

```css
p {
  text-align: center;
  border: 5px solid #000;
  padding: .5rem;
  width: 200px;
}

.bs_short {
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.6);
}
```

```html
<p class="bs_short">Lorem ipsum</p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p style="text-align:center; border: 5px solid #000; padding: .5rem; width: 200px; border-radius: 10px; box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.6);">Lorem ipsum</p>
</div>

## [Border Image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)
---

> <b>Value:</b> `<border-image-source>` \|\| `<border-image-slice>` [ / `<border-image-width>` \| / `<border-image-width>`? / `<border-image-outset>` ]? \|\| `<border-image-repeat>`

### Syntax

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;
```

### Example

| Style | Preview |
|-|-|-|
| border-image: linear-gradient(red, blue) 7; | <span style="border-image: linear-gradient(red, blue) 7;">Lorem ipsum dolor</span> |
| border-image: linear-gradient(red, blue) 7 / 5px; | <span style="border-image: linear-gradient(red, blue) 7 / 5px;">Lorem ipsum dolor</span> |

### Shorthand and Longhand options

| Shorthand | Longhand |
|-|-|
| [`border-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) | [`border-image-source`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source)<br>[`border-image-slice`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice)<br>[`border-image-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width)<br>[`border-image-outset`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset)<br>[`border-image-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat) |


## [Border Collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)
---

> <b>Value:</b> collapse \| separate

### Syntax

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;
```

### Example

```css
table {
  width: 317px;
}

.separate {
  border-collapse: separate;
  border-spacing: 2px;
}

.collapse {
  border-collapse: collapse;
}

tr {
  border: 1px solid #000;
}
```

```html
<table class="separate">
  <tbody>
    <tr>
      <td>Item 1.1</td>
      <td>Item 1.2</td>
      <td>Item 1.3</td>
    </tr>
    <tr>
      <td>Item 2.1</td>
      <td>Item 2.2</td>
      <td>Item 2.3</td>
    </tr>
  </tbody>
</table>

<table class="collapse">
  <tbody>
    <tr>
      <td>Item 1.1</td>
      <td>Item 1.2</td>
      <td>Item 1.3</td>
    </tr>
    <tr>
      <td>Item 2.1</td>
      <td>Item 2.2</td>
      <td>Item 2.3</td>
    </tr>
  </tbody>
</table>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <table style="display: table; border-spacing: 2px; border-collapse: separate;margin-bottom: 1rem; border: 1px solid #000;">
    <tbody>
      <tr>
        <td style="border: 1px solid #000;">Item 1.1</td>
        <td style="border: 1px solid #000;">Item 1.2</td>
        <td style="border: 1px solid #000;">Item 1.3</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000;">Item 2.1</td>
        <td style="border: 1px solid #000;">Item 2.2</td>
        <td style="border: 1px solid #000;">Item 2.3</td>
      </tr>
    </tbody>
  </table>
  
  <table style="display: table;"> 
    <tbody>
      <tr>
        <td style="border: 1px solid #000;">Item 1.1</td>
        <td style="border: 1px solid #000;">Item 1.2</td>
        <td style="border: 1px solid #000;">Item 1.3</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000;">Item 2.1</td>
        <td style="border: 1px solid #000;">Item 2.2</td>
        <td style="border: 1px solid #000;">Item 2.3</td>
      </tr>
    </tbody>
  </table>
</div>

## [Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
---

![](https://mdn.mozillademos.org/files/13649/box-model-alt-small.png)<br>
Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap)

> <b>Value:</b> content-box \| border-box

### Syntax

```css
/* Keyword values */
box-sizing: content-box;
box-sizing: border-box;
```

- <b>content-box</b>
	- Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included
- <b>border-box</b>
	- The width and height properties (and min/max properties) includes content, padding and border


### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>box-sizing: content-box;</td>
      <td>
        <div style="box-sizing: content-box; border: 5px solid #000; width: 200px;">Lorem ipsum dolor</div>
      </td>
    </tr>
    <tr>
      <td>box-sizing: border-box;</td>
      <td>
        <div style="box-sizing: border-box; border: 5px solid #000; width: 200px;">Lorem ipsum dolor</div>
      </td>
    </tr>
  </tbody>
</table>

## [Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
---

> <b>Value:</b> visible \| hidden \| scroll \| auto

### Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>overflow: visible;</td>
      <td>
        <div style="overflow: visible; border: 1px solid #000; width: 200px; height: 4rem;">Lorem ipsum dolor amet, consectetur.</div>
      </td>
    </tr>
    <tr>
      <td>overflow: hidden;</td>
      <td>
        <div style="overflow: hidden; border: 1px solid #000; width: 200px; height: 4rem;">Lorem ipsum dolor amet, consectetur.</div>
      </td>
    </tr>
    <tr>
      <td>overflow: scroll;</td>
      <td>
        <div style="overflow: scroll; border: 1px solid #000; width: 200px; height: 4rem;">Lorem ipsum dolor amet, consectetur.</div>
      </td>
    </tr>
    <tr>
      <td>overflow: auto;</td>
      <td>
        <div style="overflow: auto; border: 1px solid #000; width: 200px; height: 4rem;">Lorem ipsum dolor amet, consectetur.</div>
      </td>
    </tr>
  </tbody>
</table>

## [Outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
---

> <b>Value:</b> [ `<outline-color>` || `<outline-style>` || `<outline-width>` ]
> <br>
> `<outline-color>` = `<color>`<br>
> `<outline-style>` = none \| hidden \| dotted \| dashed \| solid \| double \| groove \| ridge \| inset \| outset<br>
> `<outline-width>` = <length> \| thin \| medium \| thick<br>

### Syntax

```css
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;
```

### Example

| Style | Preview |
|-|-|-|
| outline: solid; | <span style="outline: solid;">Lorem ipsum dolor</span> |
| outline: #f66 dashed; | <span style="outline: #f66 dashed;">Lorem ipsum dolor</span> |
| outline: green solid 3px; | <span style="outline: green solid 3px;">Lorem ipsum dolor</span> |

## References
---

- [Box model recap](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap)
- [Styling borders using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Borders)
- Display
  - [Content sectioning \| W3C](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)
  - [Text content \| W3C](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content)
  - [Inline text semantics \| W3C](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)
- Box shadow
  - [Box Shadow Generator](https://www.cssmatic.com/box-shadow)
  - [Box Shadow \| CSS Tricks](https://css-tricks.com/almanac/properties/b/box-shadow/)
  - [CSS3 Box Shadows Effects](https://codepen.io/haibnu/pen/FxGsI)
  - [Material Design Box Shadows](https://codepen.io/sdthornton/pen/wBZdXq)
  - [18 Amazing Effects You can Create with CSS3 Box Shadows](https://www.hongkiat.com/blog/creative-css-shadows/)