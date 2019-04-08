# Values and Units

* [`<color>`](#color)
* [`<generic-family>`](#generic-family)
* [`<family-name>`](#family-name)
* [`<length>`](#length)

## [&lt;color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
---

```css
/* <named-color> */
color: white;
color: black;
color: red;
color: green;
color: blue;
color: cyan;
color: rebeccapurple;

/* <hex-color> (#rrggbb | #rgb | #rrggbbaa | #rgba)*/
color: #ffffff;
color: #000000;
color: #ff0000;
color: #00ff00;
color: #0000ff;
color: #00ffff;
color: #663399;
color: #639;
color: #66339977;
color: #6397;

/* <rgb-color> (rgb(), rgba()) */
color: rgb(255, 255, 255)
color: rgb(0, 0, 0)
color: rgb(255, 0, 0)
color: rgb(0, 255, 0)
color: rgb(0, 0, 255)
color: rgb(0, 255, 255)
color: rgb(102, 51, 153)
color: rgba(102, 51, 153, 0.5);

/* <hsl-color> (hsl(), hsla()) */
color: hsl(0, 0%, 100%);
color: hsl(0, 0%, 0%);
color: hsl(0, 100%, 50%);
color: hsl(120, 100%, 50%);
color: hsl(240, 100%, 50%);
color: hsl(180, 100%, 50%);
color: hsl(270, 50%, 40%);
color: hsla(270, 50%, 40%, 0.5);
```

### Color Table

| `<named-color>` | `<hex-color>` | `<rgb-color>` | `<hsl-color>` |
|-|-|-|-|
| <span style="color: white">white</span> | <span style="color: #ffffff">#ffffff</span> | <span style="color: rgb(255, 255, 255)">rgb(255, 255, 255)</span> | <span style="color: hsl(0, 0%, 100%)"> hsl(0, 0%, 100%)</span> |
| <span style="color: black">black</span> | <span style="color: #000000">#000000</span> | <span style="color: rgb(0, 0, 0)">rgb(0, 0, 0)</span> | <span style="color: hsl(0, 0%, 0%)"> hsl(0, 0%, 0%)</span> |
| <span style="color: red">red</span> | <span style="color: #ff0000">#ff0000</span> | <span style="color: rgb(255, 0, 0)">rgb(255, 0, 0)</span> | <span style="color: hsl(0, 100%, 50%)"> hsl(0, 100%, 50%)</span> |
| <span style="color: lime">lime</span> | <span style="color: #00ff00">#00ff00</span> | <span style="color: rgb(0, 255, 0)">rgb(0, 255, 0)</span> | <span style="color: hsl(120, 100%, 50%)"> hsl(120, 100%, 50%)</span> |
| <span style="color: green">green</span> | <span style="color: #008000">#008000</span> | <span style="color: rgb(0, 128, 0)">rgb(0, 128, 0)</span> | <span style="color: hsl(120, 100%, 25%)"> hsl(120, 100%, 25%)</span> |
| <span style="color: blue">blue</span> | <span style="color: #0000ff">#0000ff</span> | <span style="color: rgb(0, 0, 255)">rgb(0, 0, 255)</span> | <span style="color: hsl(240, 100%, 50%)"> hsl(240, 100%, 50%)</span> |
| <span style="color: cyan">cyan</span> | <span style="color: #00ffff">#00ffff</span> | <span style="color: rgb(0, 255, 255)">rgb(0, 255, 255)</span> | <span style="color: hsl(180, 100%, 50%)"> hsl(180, 100%, 50%)</span> |
| <span style="color: rebeccapurple">rebeccapurple</span> | <span style="color: #639">#639</span><br><span style="color: #663399">#663399</span><br><span style="color: #663399ff">#663399ff</span> | <span style="color: rgb(102, 51, 153)">rgb(102, 51, 153)</span><br><span style="color: rgba(102, 51, 153, 1)">rgba(102, 51, 153, 1)</span> | <span style="color: hsl(270, 50%, 40%)"> hsl(270, 50%, 40%)</span><br><span style="color: hsla(270, 50%, 40%, 1)"> hsla(270, 50%, 40%, 1)</span> |
| <span style="color: rgba(102, 51, 153, 0.5)">rebeccapurple 50%</span> | <span style="color: #6397">#6397</span><br><span style="color: #66339977">#66339977</span> | <span style="color: rgba(102, 51, 153, 0.5)">rgba(102, 51, 153, 0.5)</span> | <span style="color: hsla(270, 50%, 40%, 0.5)"> hsla(270, 50%, 40%, 0.5)</span> |

<!-- 
### Material Color
### Pastel Color 
-->

### Example 

```css
h1 {
  color: red;
}

p {
  color: rgb(255, 0, 0);
}
```

## [&lt;generic-family>]()
---

<div style="font-size: 2rem;">
  <span style="font-family: serif">Lorem</span>
  <span style="font-family: sans-serif">Lorem</span>
  <span style="font-family: monospace">Lorem</span>
  <span style="font-family: cursive">Lorem</span>
  <span style="font-family: fantasy">Lorem</span>
</div>

| `<generic-family>` | `<family-name>` |
|-|-|
| serif | Times, Times New Roman, Georgia, Century, Lucida, Didot |
| sans-serif | Arial, Arial Black, Open Sans, Lucida Sans, Trebuchet MS, Verdana, Helvetica, Helvetica Neue, Gill Sans, Futura, San Fransisco, Tahoma, Ubuntu |
| monospace | Courier, Courier New, Andale Mono, Monaco |
| cursive | Brush Script MT, Comic Sans MS, Apple Chancery, Zapfino, Bradley Hand, Savoye Let |
| fantasy | Impact, Papyrus, Luminari, Chalkduster, Chalkboard, Marker Felt, Trattatello, Cochin |

### Default fonts

| `<generic-family>` | Preview |
|-|-|
| serif | <span style="font-family: serif">Lorem ipsum</span> |
| sans-serif | <span style="font-family: sans-serif">Lorem ipsum</span> |
| monospace | <span style="font-family: monospace">Lorem ipsum</span> |
| cursive | <span style="font-family: cursive">Lorem ipsum</span> |
| fantasy | <span style="font-family: fantasy">Lorem ipsum</span> |

> Chrome > settings > Appearance > Customize fonts

## [&lt;family-name>]()
---

| `<family-name>` | `<generic-family>` | Preview |
|-|-|-|
| Times New Roman | serif | <span style="font-family: Times New Roman, serif">Lorem ipsum</span> |
| Georgia | serif | <span style="font-family: Georgia, serif">Lorem ipsum</span> |
| Arial | sans-serif | <span style="font-family: Arial, sans-serif">Lorem ipsum</span> |
| Arial Black | sans-serif | <span style="font-family: Arial Black, sans-serif">Lorem ipsum</span> |
| Trebuchet MS | sans-serif | <span style="font-family:  Trebuchet MS, sans-serif">Lorem ipsum</span> |
| Verdana | sans-serif | <span style="font-family: Verdana, sans-serif">Lorem ipsum</span> |
| Courier New | monospace | <span style="font-family: Courier New, monospace">Lorem ipsum</span> |
| Andale Mono | monospace | <span style="font-family: Andale Mono, monospace">Lorem ipsum</span> |
| Brush Script MT | cursive | <span style="font-family: Brush Script MT, monospace">Lorem ipsum</span> |
| Comic Sans MS | cursive | <span style="font-family: Comic Sans MS, sans-serif">Lorem ipsum</span> |
| Impact | fantasy | <span style="font-family: Impact, sans-serif">Lorem ipsum</span> |
|  Webdings | fantasy | <span style="font-family:  Webdings, sans-serif">Lorem ipsum</span> |

Font: [Web safe fonts (Core fonts for the Web)](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)

## [&lt;length>](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
---

### Relative length units

#### Font-relative lengths

| Unit | Description | Style | Syntax | Preview |
|-|-|-|-|-|
| ch | 0-width | font-size: 1ch; | `<abosolut-size>` | <span style="font-size: 1ch;">Lorem ipsum</span> |
| em | calculated font-size of the element | font-size: 1.5em; | `<abosolut-size>` | <span style="font-size: 1.5em;">Lorem ipsum</span> |
| rem | calculated font-size of the root element | font-size: 1.5rem; | `<abosolut-size>` | <span style="font-size: 1.5rem;">Lorem ipsum</span> |
| ex | x-heigth | font-size: 1ex; | `<abosolut-size>` | <span style="font-size: 1ex;">Lorem ipsum</span> |

#### Viewport-percentage lengths

| Unit | Description | Style | Syntax | Preview |
|-|-|-|-|-|
| vh | 1% of the height of the viewport | font-size: 1vh; | `<abosolut-size>` | <span style="font-size: 1vh;">Lorem ipsum</span> |
| vw | 1% of the width of the viewport | font-size: 1vw; | `<abosolut-size>` | <span style="font-size: 1vw;">Lorem ipsum</span> |
| vmin | smaller of vw and vh | font-size: 1vmin; | `<abosolut-size>` | <span style="font-size: 1vmin;">Lorem ipsum</span> |
| vmax | larger of vw and vh | font-size: 1vmax; | `<abosolut-size>` | <span style="font-size: 1vmax;">Lorem ipsum</span> |

### Absolute length units

| Unit | Description | Style | Syntax | Preview |
|-|-|-|-|-|
| px | pixel | font-size: 20px; | `<abosolut-size>` | <span style="font-size: 20px;">Lorem ipsum</span> |
| cm | centimeter | font-size: 1cm; | `<abosolut-size>` | <span style="font-size: 1cm;">Lorem ipsum</span> |
| mm | millimeter | font-size: 10mm; | `<abosolut-size>` | <span style="font-size: 10mm;">Lorem ipsum</span> |
| in | inch | font-size: .2in; | `<abosolut-size>` | <span style="font-size: .2in;">Lorem ipsum</span> |

### Example

#### Absolute Units

```css
p {
  font-size: 17px;
}
```

#### Relative Units

```css
h1 {
  font-size: 1.3rem;
}

p {
  font-size: 105%;
}
```

| tag | value | computed value |
|-|-|-|
| `body` | 16px | |
| `h1` | 1.3rem | 20.8px |
| `p` | 105% | 16.8px |

## References
---

* [CSS values and units \| MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) (Numeric values, Percentages, Colors, Coordinate positions, Functions)
* [Value definition syntax \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax)
* Color
  * CSS Color
    * [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)
    * [CSS color codes](https://www.rapidtables.com/web/css/css-color.html)
    * [Color Names](https://www.color-hex.com/color-names.html)
  * Tools
    * [Color name](http://www.color-hex.com/color-names.html)
    * Suport [#rrggbbaa](https://caniuse.com/#feat=css-rrggbbaa)
    * [Chrome DevTools: Color Picker](https://developers.google.com/web/tools/chrome-devtools/css/reference#color-picker)
    * Color Info
      * Tools
        * [rgbTo](http://rgb.to/)
        * [color-hex](http://www.color-hex.com/)
        * [colourco](http://www.colourco.de/)
        * Google Search
      * Rebecca Purple Info (#663399):
        * [color-hex](http://www.color-hex.com/color/663399) (Shades, Tints, Triadic Colors, Analogous Colors, Monochromatic Colors, Complementary Color, Related Colors)
        * [rgbTo](http://rgb.to/rgb/102,51,153)
  * [Color Model](https://en.wikipedia.org/wiki/Color_model)
    * [RGB](https://en.wikipedia.org/wiki/RGB_color_model) (additive color model)
    * [CMYK](https://en.wikipedia.org/wiki/CMYK_color_model) (subtractive color model)
    * [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [The Surprising Science Behind Colour Codes (RGB, Hex, HSL, CMYK, Pantone)](https://medium.com/pilcro/the-surprising-science-behind-colour-codes-6664c6f3b8a3)
  * [Pantone Colors](http://www.pantone-colours.com)
* Generic Family
  * [Font Family](https://www.w3.org/Style/Examples/007/fonts.en.html)
  * [Top 30 Best Sans Serif Fonts](http://www.vectordiary.com/fonts/top-30-best-sans-serif-fonts/)
  * [Top 30 Best Serif Fonts](http://www.vectordiary.com/fonts/top-30-best-serif-fonts/)
  * [Top 30 Modern Fonts](http://www.vectordiary.com/fonts/top-30-modern-fonts/)
  * [Outros](https://www.w3.org/Style/Examples/007/fonts.en.html#font-family)

<!-- TODO
Actual value
Computed value
Initial value
Resolved value
Specified value
Used value -->
