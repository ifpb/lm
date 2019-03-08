# Lists

* [Ordered List](#ordered-list)
* [Ordered List (type) ](#ordered-list-type)
* [Unordered List](#unordered-list)
* [Unordered List (nested)](#unordered-list-nested)
* [Definition List](#definition-list)

## Ordered List
---

[`types/index.html`](types/):
```html
<p>Developer Roles:</p>
<ol>
  <li>Web developer</li>
  <li>Desktop applications developer</li>
  <li>Mobile developer</li>
</ol>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Developer Roles:</p>
  <ol>
    <li>Web developer</li>
    <li>Desktop applications developer</li>
    <li>Mobile developer</li>
  </ol>
</div>

## Ordered List (type) 
---

[`types/index.html`](types/):
```html
<p>Developer Roles:</p>
<ol type="a">
  <li>Web developer</li>
  <li>Desktop applications developer</li>
  <li>Mobile developer</li>
</ol>
```
Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Developer Roles:</p>
  <ol type="a">
    <li>Web developer</li>
    <li>Desktop applications developer</li>
    <li>Mobile developer</li>
  </ol>
</div>

## Unordered List 
---

[`types/index.html`](types/):
```html
<p>Cursos da UAI:</p>
<ul>
  <li>Redes de Computadores</li>
  <li>Sistemas para Internet</li>
</ul>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Cursos da UAI:</p>
  <ul>
    <li>Redes de Computadores</li>
    <li>Sistemas para Internet</li>
  </ul>
</div>

## Unordered List (nested) 
---

[`types/index.html`](types/):
```html
<p>Conceitos do Front-End:</p>
<ul>
  <li>HTML
    <ul>
      <li>Tag</li>
      <li>Atributo</li>
      <li>Entidade</li>
      <li>Comentário</li>
    </ul>
  </li>
  <li>CSS</li>
</ul>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
<p>Conceitos do Front-End:</p>
  <ul>
    <li>HTML
      <ul>
        <li>Tag</li>
        <li>Atributo</li>
        <li>Entidade</li>
        <li>Comentário</li>
      </ul>
    </li>
    <li>CSS</li>
  </ul>
</div>

## Definition List 
---

[`types/index.html`](types/):
```html
<p>Tecnologias do Front-End:</p>
<dl>
  <dt>HTML</dt>
  <dd>Hyper Text Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascade Style Sheet</dd>
</dl>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <p>Tecnologias do Front-End:</p>
  <dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascade Style Sheet</dd>
  </dl>
</div>

## References
---

* Elements:
  * [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol), 
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul), 
  [`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
* Attributes:
  * [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#Attributes): `type`
