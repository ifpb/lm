# Selectors

## Group of Selectors 

```css
elementname-1, elementname-2
```

```css
h1, p
```

## [Basic selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Basic_selectors)

| Name | Pattern | Example | |
|-|-|-|-|
| [Universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) | `*` |  `*` | |
| [Type selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) | `E` | `p` | |
| [Class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) | `E.classname` <br> `.classname` | `p.odd` <br> `odd` | |
| [ID selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) | `E#idname` <br> `#idname` | `p#first-paragraph` <br> `#first-paragraph` | |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `E[attr]` | `p[lang]` | contain attribute |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr]` | `[lang]` |  contain attribute |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr=value]` | `[lang="pt-BR"]` |  value is exactly value |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr~=value]` | `[class~="odd"]` |  value is a whitespace-separated list of words, one of which is exactly value |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr|=value]` | `[lang|="BR"]` |  value can be exactly value or can begin with value immediately followed by a hyphen |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr^=value]` | `[lang^="pt"]` |  value value is prefixed (preceded) by value |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr$=value]` | `[lang$="BR"]` |  value is suffixed (followed) by value |
| [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | `[attr*=value]` | `[class*="odd"]` |  value contains at least one occurrence of value within the string |

## [Combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators)

| Name | Pattern | Example |
|-|-|-|
| [Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors) | `A + B` | `h1 + p` |
| [General sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors) | `A ~ B` | `h1 ~ p` |
| [Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) | `A > B` | `ul > li` |
| [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors) | `A B` | `ul li` |

## [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

| Name | Pattern | Example |
|-|-|-|
| active pseudo-class | [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) | `a:active` |
| checked pseudo-class | [`:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) | `input:checked` |
| focus pseudo-class | [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) | `input:focus` |
| first-child pseudo-class | [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) | `ul > li:first-child` |
| hover pseudo-class | [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) | `a:hover` |
| last-child pseudo-class | [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) | `ul > li:last-child` |
| link pseudo-class | [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) | `a:link` |
| nth-child pseudo-class | [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) | `ul > li:nth-child(2)` |
| nth-of-type pseudo-class | [`:nth-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) | `body > p:nth-of-type(1)`
| visited pseudo-class | [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) | `a:visited`

## [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

| Name | Pattern | Example |
|-|-|-|
| after pseudo-element | [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) | `p::after` |
| before pseudo-element | [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) | `p::before` |
| first-letter pseudo-element | [`::first-letter`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) | `p::first-letter` |
| first-line pseudo-element | [`::first-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) | `p::first-line` |
| selection pseudo-element | [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) | `p::selection` |

Fonte: [Selectors Level 3 \| W3C](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#selectors)