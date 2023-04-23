# CSS Flexible Box Layout Module (Flexbox)

* [Flexbox Terminology](#flexbox-terminology)
* Flex Container
  * [Display](#display)
  * Orientation
    * [Direction](#flex-container---orientation-direction)
    * [Wrap](#flex-container---orientation-wrap)
    * [Direction & Wrap](#flex-container---orientation-direction--wrap)
  * Alignment
    * [Content (Justify)](#flex-container---alignment-content-justify)
    * [Items](#flex-container---alignment-items)
    * [Content](#flex-container---alignment-content)
* Flex Item
  * [Alignment Self](#flex-container---alignment-self)
  * [Ordering](#flex-item---ordering)
  * Flexibility
    * [Grow](#flex-item---flexibility-grow)
    * [Shrink](#flex-item---flexibility-shrink)
    * [Basis](#flex-item---flexibility-basis)
    * [Shorthand](#flex-item---flexibility-shorthand)
* [Demo](#demo)

## Flexbox Terminology
---

![](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)<br>
Reference: [W3C](https://www.w3.org/TR/css-flexbox-1/)

Terminology:
* Flex container
* Flex item
* Main axis (main-start, main-end)
* Cross axis (cross-start, cross-end)

## [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
---

> <b>Name:</b> display<br>
> <b>Value:</b> flex \| inline-flex<br>
> <b>Initial:</b> inline<br>

### Example

[display/index.html](display/index.html):
<iframe src="display/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Orientation Direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
---

> <b>Name:</b> flex-direction<br>
> <b>Value:</b> row \| row-reverse \| column \| column-reverse<br>
> <b>Initial:</b> row

### Example

[directions/index.html](directions/index.html):
<iframe src="directions/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Orientation Wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
---

> <b>Name:</b> flex-wrap<br>
> <b>Value:</b> nowrap | wrap | wrap-reverse<br>
> <b>Initial:</b> nowrap

### Example

[wraps/index.html](wraps/index.html):
<iframe src="wraps/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Orientation Direction & Wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
---

> <b>Name:</b> flex-flow<br>
> <b>Value:</b> `<flex-direction>` || `<flex-wrap>`<br>
> <b>Initial:</b> individual properties

### Example

[directions-wraps/index.html](directions-wraps/index.html):
<iframe src="directions-wraps/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Alignment Content (Justify)](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
---

> <b>Name:</b> justify-content<br>
> <b>Value:</b> flex-start | flex-end | center | space-between | space-around<br>
> <b>Initial:</b> flex-start

### Example

[justify-contents/index.html](justify-contents/index.html):
<iframe src="justify-contents/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Alignment Items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
---

> <b>Name:</b> align-items<br>
> <b>Value:</b> flex-start | flex-end | center | baseline | stretch<br>
> <b>Initial:</b> stretch

### Example

[alignment-items/index.html](alignment-items/index.html):
<iframe src="alignment-items/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Container - Alignment Content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
---

> <b>Name:</b> align-content<br>
> <b>Value:</b> flex-start | flex-end | center | space-between | space-around | stretch<br>
> <b>Initial:</b> stretch

### Example

[alignment-content/index.html](alignment-content/index.html):
<iframe src="alignment-content/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Alignment Self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
---

> <b>Name:</b> align-self<br>
> <b>Value:</b> auto | flex-start | flex-end | center | baseline | stretch<br>
> <b>Initial:</b> auto

### Example

[alignment-self/index.html](alignment-self/index.html):
<iframe src="alignment-self/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Ordering](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
---

> <b>Name:</b> order<br>
> <b>Value:</b> `<integer>`<br>
> <b>Initial:</b> 0<br>

### Example

[ordering/index.html](ordering/index.html):
<iframe src="ordering/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Flexibility Grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
---

> <b>Name:</b> flex-grow<br>
> <b>Value:</b> `<integer>`<br>
> <b>Initial:</b> 0<br>

### Example

[flexibility-grow/index.html](flexibility-grow/index.html):
<iframe src="flexibility-grow/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Flexibility Shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
---

> <b>Name:</b> flex-shrink<br>
> <b>Value:</b> `<integer>`<br>
> <b>Initial:</b> 1<br>

### Example

[flexibility-shrink/index.html](flexibility-shrink/index.html):
<iframe src="flexibility-shrink/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Flexibility Basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
---

> <b>Name:</b> flex-basis<br>
> <b>Value:</b> content | `<width>`<br>
> <b>Initial:</b> auto<br>

### Example

[flexibility-basis/index.html](flexibility-basis/index.html):
<iframe src="flexibility-basis/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Flex Item - Flexibility Shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
---

> <b>Name:</b> flex<br>
> <b>Value:</b> none | [ `<flex-grow>` `<flex-shrink>`? || `<flex-basis>` ]<br>
> <b>Initial:</b> 0 1 auto<br>

### Example

[flexibility/index.html](flexibility/index.html):
<iframe src="flexibility/index.html" style="width: 100%; border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## Demo
---

* [Menu](demo/menu/) ([css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-examples))
* [Cards](demo/cards/) ([Article](https://codeburst.io/build-a-minimalist-html-card-in-just-53-lines-of-code-with-flexbox-b40801927eb5), [Source](https://github.com/bmorelli25/flexbox-card-tutorial))
* [Holy Grail Layout](demo/holy-grail-layout/) ([css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-examples))

## References
---

* [CSS Flexible Box Layout Module Level 1 \| W3C](https://www.w3.org/TR/css-flexbox-1/)
* [CSS Box Alignment Module Level 3 \| W3C](https://www.w3.org/TR/css-align-3/)
* [CSS Flexible Box Layout \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Basic concepts of flexbox \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A Complete Guide to Flexbox \| css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Flexible Box Layout Module \| Can I Use](https://caniuse.com/#feat=flexbox)
* [Build a Minimalist HTML Card in just 53 lines of code (with Flexbox)](https://codeburst.io/build-a-minimalist-html-card-in-just-53-lines-of-code-with-flexbox-b40801927eb5)
* [How Flexbox works — explained with big, colorful, animated gifs](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)
* [Flexbox - The Ultimate CSS Flex Cheatsheet (with animated diagrams!)](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)
* [Learn CSS Flexbox in 5 Minutes](https://medium.freecodecamp.org/learn-css-flexbox-in-5-minutes-b941f0affc34)
* [Flexbox Cheat Sheet](https://yoksel.github.io/flex-cheatsheet/)
* [Flexbox - A friendly tutorial for modern CSS layouts](https://internetingishard.com/html-and-css/flexbox/)
* [Flexbox - Use Flexbox para levar a criação de layouts CSS ao próximo nível](http://desenvolvimentoparaweb.com/css/flexbox/)
* [Guia Flexbox](https://origamid.com/projetos/flexbox-guia-completo/)
* [Flexbox in CSS \| cssreference](https://cssreference.io/flexbox/)
* [Flexbox - Align last itemin grid to the left](https://haizdesign.com/css/flexbox-align-last-item-grid-left/)
* Animated Flexbox ([1](https://codepen.io/osublake/full/dMLQJr), [2](https://codepen.io/osublake/pen/dMLQJr))
* [The Complete Illustrated Flexbox Tutorial](https://medium.freecodecamp.org/the-complete-illustrated-flexbox-tutorial-d35c085dbf35) 👍
* [Flexbox — The Animated Tutorial](https://medium.com/@js_tut/flexbox-the-animated-tutorial-8075cbe4c1b2)
* [CSS Flex—An Interactive Tutorial](https://medium.freecodecamp.org/css-flex-an-interactive-tutorial-19ff6e93558)
* [Flexbox Playground](https://ifpb.github.io/lm/css-exercises/css/portfolio-initial/)
* [Flex Guide](https://flexbox.malven.co/)
* [Meet the first visual flexbox builder](https://flexbox.webflow.com/)
* [Flexbox — The Animated Tutorial](https://jstutorial.medium.com/flexbox-the-animated-tutorial-8075cbe4c1b2)

<script>
  const iframes = Array.from(document.querySelectorAll('iframe'))
  for (const iframe of iframes) {
    const height = parseInt(iframe.contentDocument.body.offsetHeight) + 32
    iframe.style.height = `${height}px`
  }
</script>
