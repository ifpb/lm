# Problem

## First Web site to Zen Garden
---

* [Browse the first website using the line-mode browser simulator](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)
* Zen Garden (style: [1](http://www.csszengarden.com), [2](http://www.csszengarden.com/221/), [3](http://www.csszengarden.com/220/))

## [Obsolete and deprecated elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)
---

### [`<center>`: The Centered Text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center)

```html
<center>
  <p>Lorem ipsum dolor</p>
</center>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <center><p>Lorem ipsum dolor</p></center>
</div>

### [`<big>`: The Bigger Text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big)

```html
<p>Lorem ipsum dolor sit amet, <big>consectetur adipisicing elit.</big></p>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Lorem ipsum dolor sit amet, <big>consectetur adipisicing elit.</big></p>
</div>

### [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)

```html
<font size="20px" color="red" face="Helvetica">Lorem ipsum dolor</font>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
<font size="20px" color="red" face="Helvetica">Lorem ipsum dolor</font>
</div>

### [`<td bgcolor="">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-bgcolor)

```html
<table border="1" cellspacing="0">
  <tr>
    <td bgcolor="yellow"> Item 1.1</td>
    <td> Item 1.2</td>
  </tr>
</table>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <table border="1" cellspacing="0" style="display: table;">
    <tr>
      <td bgcolor="yellow"> Item 1.1</td>
      <td> Item 1.2</td>
    </tr>
  </table>
</div>

### [`<ul type="">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#attr-type)

```html
<ul type="square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <ul type="square">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>