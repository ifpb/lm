# Typography

* [Text and Font](#text-and-font)
  * [Color](#color)
  * [Font Family](#font-family)
  * [Font Size](#font-size)
  * [Font Style](#font-style)
  * [Font Weight](#font-weight)
  * [Text Decoration](#text-decoration)
  * [Text Transform](#text-transform)
  * [Text drop shadows](#text-drop-shadows)
* [Text Layout](#text-layout)
  * [Text Alignment](#text-alignment)
  * [Text Indent](#text-indent)
  * [Line height](#line-height)
  * [Letter spacing](#letter-spacing)
  * [Word spacing](#word-spacing)

## Text and Font
---

References:
- [CSS 2.2 Text \| W3C](https://www.w3.org/TR/CSS22/text.html)
- [CSS 2.2 Font \| W3C](https://www.w3.org/TR/CSS22/fonts.html)
- [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

### [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

> <b>Values:</b> [`<color>`](values.md#color)

#### Syntax

```css
/* <named-color> value */
color: red;

/* <hex-color> value */
color: #009900;

/* <rgb-color> value */
color: rgb(34, 12, 64);

/* <hsl-color> value */
color: hsl(30, 100%, 50%);
```

#### Example

| Style | Style | Preview |
|-|-|-|
| color: tomato; | `<named-color>` | <span style="color: tomato">Lorem ipsum</span> |
| color: #FF6347; | `<hex-color>` | <span style="color: #FF6347">Lorem ipsum</span> |
| color: rgb(255,99,71); | `<rgb-color>` | <span style="color: rgb(255,99,71)">Lorem ipsum</span> |
| color: hsl(9, 100%, 64%); | `<hsl-color>` | <span style="color: hsl(9, 100%, 64%)">Lorem ipsum</span> |
| color: rgba(255,99,71, .6); | `<rgba-color>` | <span style="color: rgba(255,99,71, .6)">Lorem ipsum</span> |

Fonte: [Tomato Color](http://www.color-hex.com/color/ff6347) (Shades, Tints, Triadic Colors, Analogous Colors, Monochromatic Colors, Complementary Color)

### [Font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

> <b>Values:</b> [[ [`<family-name>`](values.md#family-name) | [`<generic-family>`](values.md#generic-family) ] [, [ [`<family-name>`](values.md#family-name) | [`<generic-family>`](values.md#generic-family)] ]* ] | `inherit`<br>
><br>
>[`<family-name>`](values.md#family-name) = `<string>`<br>
>[`<generic-family>`](values.md#generic-family) = serif | sans-serif | cursive | fantasy | monospace<br>

#### Syntax

```css
/* A font family name and a generic family name */
font-family: Gill Sans Extrabold, sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
```

#### Font stacks / Fallback

```css
body {
  font-family: Ubuntu, Arial, sans-serif;
}
```

#### Example

| Style | Syntax | Preview |
|-|-|-|
| font-family: serif; | `<generic-family>` | <span style="font-family: serif">Lorem ipsum</span> |
| font-family: Times, serif; | `<family-name>`, `<generic-family>` | <span style="font-family: Times, serif;">Lorem ipsum</span> |
| font-family: "Time New Roman", serif; | `<family-name>`, `<generic-family>`  | <span style="font-family: 'Time New Roman', serif;">Lorem ipsum</span> |
| font-family: Ubuntu, Arial, sans-serif; | `<family-name>`, `<family-name>`, `<generic-family>`  | <span style="font-family: font-family: Ubuntu, Arial, sans-serif;">Lorem ipsum</span> |

### [Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

> <b>Values:</b> [ `<absolute-size>` | `<relative-size>` | [`<length>`](values.md#length) | `<percentage>` | inherit ]<br>
><br>
>`<absolute-size>` = xx-small | x-small | small | medium | large | x-large | xx-large<br>
>`<relative-size>` = larger | smaller<br>

#### Syntax

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8rem;

/* <percentage> values */
font-size: 80%;
```

#### Example

| Style | Syntax | Preview |
|-|-|-|
| font-size: small; | `<absolute-size>` | <span style="font-size: small;">Lorem ipsum</span> |
| font-size: large; | `<absolute-size>` | <span style="font-size: large;">Lorem ipsum</span> |
| font-size: larger; | `<relative-size>` | <span style="font-size: larger;">Lorem ipsum</span> |
| font-size: 16px; | `<length>` | <span style="font-size: 16px;">Lorem ipsum</span> |
| font-size: 1.5rem; | `<length>` | <span style="font-size: 1.5rem;">Lorem ipsum</span> |
| font-size: 1.5em; | `<length>` | <span style="font-size: 1.5em;">Lorem ipsum</span> |
| font-size: 150%; | `<percentage>` | <span style="font-size: 150%;">Lorem ipsum</span> |

### [Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)

> <b>Values:</b> normal \| italic \| oblique \| inherit

#### Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

#### Example

| Style | Preview |
|-|-|-|
| font-style: normal; | <span style="font-style: normal;">Lorem ipsum</span> |
| font-style: italic; | <span style="font-style: italic;">Lorem ipsum</span> |
| font-style: oblique; | <span style="font-style: oblique;">Lorem ipsum</span> |


### [Font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

> <b>Values:</b> normal \| bold \| bolder \| lighter \| 100 \| 200 \| 300 \| 400 \| 500 \| 600 \| 700 \| 800 \| 900

#### Syntax

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;
```

#### Example

| Style | Preview |
|-|-|-|
| font-weight: normal; | <span style="font-weight: normal;">Lorem ipsum</span> |
| font-weight: bold; | <span style="font-weight: bold;">Lorem ipsum</span> |
| font-weight: lighter; | <span style="font-weight: lighter;">Lorem ipsum</span> |
| font-weight: bolder; | <span style="font-weight: bolder;">Lorem ipsum</span> |
| font-weight: 100; | <span style="font-weight: 100;">Lorem ipsum</span> |
| font-weight: 200; | <span style="font-weight: 200;">Lorem ipsum</span> |
| font-weight: 300; | <span style="font-weight: 300;">Lorem ipsum</span> |
| font-weight: 400; | <span style="font-weight: 400;">Lorem ipsum</span> |
| font-weight: 500; | <span style="font-weight: 500;">Lorem ipsum</span> |
| font-weight: 600; | <span style="font-weight: 600;">Lorem ipsum</span> |
| font-weight: 700; | <span style="font-weight: 700;">Lorem ipsum</span> |
| font-weight: 800; | <span style="font-weight: 800;">Lorem ipsum</span> |
| font-weight: 900; | <span style="font-weight: 900;">Lorem ipsum</span> |

### [Text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

> <b>Values:</b> `<text-decoration-line>` || `<text-decoration-color>` || `<text-decoration-style>`<br>
> <br>
> `<text-decoration-line>` = none | [ underline || overline || line-through || blink ]<br>
> `<text-decoration-color>` = `<color>`<br>
> `<text-decoration-style>` = solid | double | dotted | dashed | wavy<br>

#### Syntax

```css
/* Keyword values */
text-decoration: none;                /* No text decoration */
text-decoration: underline;           /* Underlining */
text-decoration: underline red;       /* Red underlining */
text-decoration: underline wavy red;  /* Red wavy underlining */
```

#### Example

| Style | Preview |
|-|-|-|
| text-decoration: none; | <span style="text-decoration: none;">Lorem ipsum</span> |
| text-decoration: underline; | <span style="text-decoration: underline;">Lorem ipsum</span> |
| text-decoration: line-through; | <span style="text-decoration: line-through;">Lorem ipsum</span> |
| text-decoration: overline; | <span style="text-decoration: overline;">Lorem ipsum</span> |
| text-decoration: underline red; | <span style="text-decoration: underline red;">Lorem ipsum</span> |
| text-decoration: underline red wavy; | <span style="text-decoration: underline red wavy;">Lorem ipsum</span> |

### [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

> <b>Values:</b> none \| capitalize \| uppercase \| lowercase \| full-width

#### Syntax

```css
/* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
```

#### Example

| Style | Preview |
|-|-|-|
| text-transform: none; | <span style="text-transform: none;">Lorem ipsum</span> |
| text-transform: uppercase; | <span style="text-transform: uppercase;">Lorem ipsum</span> |
| text-transform: lowercase; | <span style="text-transform: lowercase;">Lorem ipsum</span> |
| text-transform: capitalize; | <span style="text-transform: capitalize;">Lorem ipsum</span> |

### [Text drop shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

References:
- [CSS3 Text Shadow Generator](https://css3gen.com/text-shadow/) 
- [12 Fun CSS Text Shadows You Can Copy and Paste](https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/)
- [CSS Text Effects From CodePen](https://freebiesupply.com/blog/css-text-effects-from-codepen/)
- [CSS-Tricks text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)

#### Syntax

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black; 

/* color | offset-x | offset-y | blur-radius */
text-shadow: #FC0 1px 0 10px; 

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558ABB;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y */
text-shadow: 5px 10px;

/* Global values */
text-shadow: unset;
```

#### Simple shadow

| Style | Preview |
|-|-|-|
| text-shadow: unset; | <span style="font-size: 1.5rem; text-shadow: unset;">Lorem ipsum</span> |
| text-shadow: 1px 1px 2px black; | <span style="font-size: 1.5rem; text-shadow: 1px 1px 2px black;">Lorem ipsum</span> |
| text-shadow: 10px 1px 2px black; | <span style="font-size: 1.5rem; text-shadow: 10px 1px 2px black;">Lorem ipsum</span> |
| text-shadow: 1px 11px 2px black; | <span style="font-size: 1.5rem; text-shadow: 1px 10px 2px black;">Lorem ipsum</span> |
| text-shadow: 1px 11px .5px black; | <span style="font-size: 1.5rem; text-shadow: 1px 10px .5px black;">Lorem ipsum</span> |
| color: rgba(0,168,255,0.5);<br>text-shadow: 2px -1px 0 rgba(255,0,180,0.5); | <span style="font-size: 1.5rem; color: rgba(0,168,255,0.5);text-shadow: 2px -1px 0 rgba(255,0,180,0.5); text-transform: uppercase; letter-spacing: 3px;">Lorem ipsum</span> |



#### Multiple shadow

Fonte: [O surpreendente text-shadow](https://medium.com/jaguaribetech/o-surpreendente-text-shadow-1e3a9599ae4f)
```css
.shadow {
  color: #f74646;
  font-weight: bolder;
  font-size: 6em;
  text-shadow: -2px 0 0 #fff, 
    -1px -1px 0 #fff,
    0 -2px 0 #fff,
    1px -1px 0 #fff,
    2px 0 0 #fff,
    1px 1px 0 #fff,
     0 2px 0 #fff,
    12px 16px 0 #00ac94;
}
```

Output:

<div style="text-align:center; color: #f74646; text-shadow: -2px 0 0 #fff, -1px -1px 0 #fff, 0 -2px 0 #fff, 1px -1px 0 #fff, 2px 0 0 #fff, 1px 1px 0 #fff,  0 2px 0 #fff, 12px 16px 0 #00ac94;  font-weight: bolder; font-size: 6em; border-radius: 0.3rem; border: solid 1px #dce6f0;">
  Lorem
</div>

Fonte: [CSS Text Effects From CodePen](https://freebiesupply.com/blog/css-text-effects-from-codepen/)
```css
.long-shadow {
  font-size:4rem; 
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFD9;
  text-shadow: #03a488 1px 1px, #05a488 2px 2px, #08a588 3px 3px, #0aa688 4px 4px, #0da788 5px 5px, #0fa788 6px 6px, #12a887 7px 7px, #14a987 8px 8px, #17a987 9px 9px, #1aaa87 10px 10px, #1cab87 11px 11px, #1fac87 12px 12px, #21ac87 13px 13px, #24ad87 14px 14px, #26ae87 15px 15px, #29ae87 16px 16px, #2baf87 17px 17px, #2eb087 18px 18px, #30b086 19px 19px, #33b186 20px 20px, #36b286 21px 21px, #38b386 22px 22px, #3bb386 23px 23px, #3db486 24px 24px, #40b586 25px 25px, #42b586 26px 26px, #45b686 27px 27px, #47b786 28px 28px, #4ab886 29px 29px, #4db886 30px 30px, #4fb986 31px 31px, #52ba85 32px 32px, #54ba85 33px 33px, #57bb85 34px 34px, #59bc85 35px 35px, #5cbd85 36px 36px, #5ebd85 37px 37px, #61be85 38px 38px, #63bf85 39px 39px, #66bf85 40px 40px, #69c085 41px 41px, #6bc185 42px 42px, #6ec285 43px 43px, #70c284 44px 44px, #73c384 45px 45px, #75c484 46px 46px, #78c484 47px 47px, #7ac584 48px 48px, #7dc684 49px 49px, #80c784 50px 50px, #82c784 51px 51px, #85c884 52px 52px, #87c984 53px 53px, #8ac984 54px 54px, #8cca84 55px 55px, #8fcb84 56px 56px, #91cb83 57px 57px, #94cc83 58px 58px, #96cd83 59px 59px, #99ce83 60px 60px, #9cce83 61px 61px, #9ecf83 62px 62px, #a1d083 63px 63px, #a3d083 64px 64px, #a6d183 65px 65px, #a8d283 66px 66px, #abd383 67px 67px, #add383 68px 68px, #b0d482 69px 69px, #b3d582 70px 70px, #b5d582 71px 71px, #b8d682 72px 72px, #bad782 73px 73px, #bdd882 74px 74px, #bfd882 75px 75px, #c2d982 76px 76px, #c4da82 77px 77px, #c7da82 78px 78px, #c9db82 79px 79px, #ccdc82 80px 80px, #cfdd82 81px 81px, #d1dd81 82px 82px, #d4de81 83px 83px, #d6df81 84px 84px, #d9df81 85px 85px, #dbe081 86px 86px, #dee181 87px 87px, #e0e181 88px 88px, #e3e281 89px 89px, #e6e381 90px 90px, #e8e481 91px 91px, #ebe481 92px 92px, #ede581 93px 93px, #f0e680 94px 94px, #f2e680 95px 95px, #f5e780 96px 96px, #f7e880 97px 97px, #fae980 98px 98px, #fce980 99px 99px, #ffea80 100px 100px, #00A388 0px 0px;
}
```

<div style="background: #FFEA80; height: 200px; text-align:center; font-size:4rem; font-weight: 600; text-transform: uppercase; color: #FFFFD9;text-shadow: #03a488 1px 1px, #05a488 2px 2px, #08a588 3px 3px, #0aa688 4px 4px, #0da788 5px 5px, #0fa788 6px 6px, #12a887 7px 7px, #14a987 8px 8px, #17a987 9px 9px, #1aaa87 10px 10px, #1cab87 11px 11px, #1fac87 12px 12px, #21ac87 13px 13px, #24ad87 14px 14px, #26ae87 15px 15px, #29ae87 16px 16px, #2baf87 17px 17px, #2eb087 18px 18px, #30b086 19px 19px, #33b186 20px 20px, #36b286 21px 21px, #38b386 22px 22px, #3bb386 23px 23px, #3db486 24px 24px, #40b586 25px 25px, #42b586 26px 26px, #45b686 27px 27px, #47b786 28px 28px, #4ab886 29px 29px, #4db886 30px 30px, #4fb986 31px 31px, #52ba85 32px 32px, #54ba85 33px 33px, #57bb85 34px 34px, #59bc85 35px 35px, #5cbd85 36px 36px, #5ebd85 37px 37px, #61be85 38px 38px, #63bf85 39px 39px, #66bf85 40px 40px, #69c085 41px 41px, #6bc185 42px 42px, #6ec285 43px 43px, #70c284 44px 44px, #73c384 45px 45px, #75c484 46px 46px, #78c484 47px 47px, #7ac584 48px 48px, #7dc684 49px 49px, #80c784 50px 50px, #82c784 51px 51px, #85c884 52px 52px, #87c984 53px 53px, #8ac984 54px 54px, #8cca84 55px 55px, #8fcb84 56px 56px, #91cb83 57px 57px, #94cc83 58px 58px, #96cd83 59px 59px, #99ce83 60px 60px, #9cce83 61px 61px, #9ecf83 62px 62px, #a1d083 63px 63px, #a3d083 64px 64px, #a6d183 65px 65px, #a8d283 66px 66px, #abd383 67px 67px, #add383 68px 68px, #b0d482 69px 69px, #b3d582 70px 70px, #b5d582 71px 71px, #b8d682 72px 72px, #bad782 73px 73px, #bdd882 74px 74px, #bfd882 75px 75px, #c2d982 76px 76px, #c4da82 77px 77px, #c7da82 78px 78px, #c9db82 79px 79px, #ccdc82 80px 80px, #cfdd82 81px 81px, #d1dd81 82px 82px, #d4de81 83px 83px, #d6df81 84px 84px, #d9df81 85px 85px, #dbe081 86px 86px, #dee181 87px 87px, #e0e181 88px 88px, #e3e281 89px 89px, #e6e381 90px 90px, #e8e481 91px 91px, #ebe481 92px 92px, #ede581 93px 93px, #f0e680 94px 94px, #f2e680 95px 95px, #f5e780 96px 96px, #f7e880 97px 97px, #fae980 98px 98px, #fce980 99px 99px, #ffea80 100px 100px, #00A388 0px 0px;">
  Lorem
</div>

## Text layout
---

### [Text Alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

> <b>Values:</b> start \| end \| left \| right \| center \| justify \| match-parent

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: start;
text-align: end;
```

#### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text-align: left;</td>
      <td style="text-align: left; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>text-align: center;</td>
      <td style="text-align: center; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>text-align: right;</td>
      <td style="text-align: right; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>text-align: justify;</td>
      <td style="text-align: justify; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
  </tbody>
</table>

### [Text indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)

> <b>Values:</b> `<length-percentage>`<br>
> <br>
> `<length-percentage>` = `<length>` | `<percentage>`

#### Syntax

```css
/* <length> values */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> value
   relative to the containing block width */
text-indent: 15%;
```

#### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text-indent: 3rem;</td>
      <td style="text-indent: 3rem; width: 200px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>text-indent: 20px;</td>
      <td style="text-indent: 20px; width: 200px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
  </tbody>
</table>

### [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

> <b>Value:</b> normal \| `<number>` \| `<length>` \| `<percentage>`

#### Syntax

```css
/* Keyword value */
line-height: normal;

/* <number> values */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;
```

#### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>line-height: normal;</td>
      <td style="line-height: normal; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>line-height: 3;</td>
      <td style="line-height: 3; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>line-height: 3em;</td>
      <td style="line-height: 3em; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>line-height: 300%;</td>
      <td style="line-height: 300%; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
  </tbody>
</table>

### [Letter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

> <b>Value:</b> normal \| `<length>`

#### Syntax

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
```

#### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>letter-spacing: normal;</td>
      <td style="letter-spacing: normal; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>letter-spacing: 0.1em;</td>
      <td style="letter-spacing: 0.1em; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>letter-spacing: 0.2em;</td>
      <td style="letter-spacing: 0.2em; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
  </tbody>
</table>

### [Word spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)

> <b>Value:</b> normal \| `<length>` \|  `<percentage>`

#### Syntax

```css
/* Keyword value */
word-spacing: normal;

/* <length> values */
word-spacing: 0.3em;

/* <percentage> values */
word-spacing: 110%;
```

#### Example

<table>
  <thead>
    <tr>
      <th>Style</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>word-spacing: normal;</td>
      <td style="word-spacing: normal; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>word-spacing: 0.1em;</td>
      <td style="word-spacing: 0.1em; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
    <tr>
      <td>word-spacing: 1em;</td>
      <td style="word-spacing: 1em; width: 240px">Lorem ipsum dolor amet, consectetur.</td>
    </tr>
  </tbody>
</table>

## [Font shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
---

> <b>Value:</b> [ [ `<font-style>` || `<font-variant>` || `<font-weight>` || `<font-stretch>` ]? `<font-size>` [ / `<line-height>` ]? `<font-family>` ] | caption | icon | menu | message-box | small-caption | status-bar<br>
> <br>
> `<font-stretch>` = normal \| ultra-condensed \| extra-condensed \| condensed \| semi-condensed \| semi-expanded \| expanded \| extra-expanded \| ultra-expanded<br>
> `<font-variant>` = normal \| small-caps 

#### Syntax

```css
/* `<font-size>` `<font-family>` */
font: 80% sans-serif;

/* `<font-style>` `<font-size>` `<font-family>` */
font: italic 1.5rem sans-serif;

/* `<font-style>` `<font-weight>` `<font-size>` `<font-family>` */
font: italic bold 1.5rem sans-serif;

/* `<font-style>` `<font-weight>` `<font-size>`/`<line-height>` `<font-family>` */
font: italic bold 1.5rem/1.5 sans-serif;

/* `<font-style>` `<font-variant>` `<font-weight>` `<font-size>`/`<line-height>` `<font-family>` */
font: italic small-caps bold 1.5rem/1.5 sans-serif;
```

#### Example

| Style | Preview |
|-|-|-|
| font: 80% sans-serif; | <span style="font-size: 1.5rem; font: 80% sans-serif;">Lorem ipsum<br>dolor</span> |
| font: italic 1.5rem sans-serif; | <span style="font-size: 1.5rem; font: italic 1.5rem sans-serif;">Lorem ipsum<br>dolor</span> |
| font: italic bold 1.5rem sans-serif; | <span style="font-size: 1.5rem; font: italic bold 1.5rem sans-serif;">Lorem ipsum<br>dolor</span> |
| font: italic bold 1.5rem/1.8 sans-serif; | <span style="font-size: 1.5rem; font: italic bold 1.5rem/1.8 sans-serif;">Lorem ipsum<br>dolor</span> |
| font: italic small-caps bold 1.5rem/1.8 sans-serif; | <span style="font-size: 1.5rem; font: italic small-caps bold 1.5rem/1.8 sans-serif;">Lorem ipsum<br>dolor</span> |
