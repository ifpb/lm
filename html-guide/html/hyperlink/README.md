# Hyperlink

* [hyperlink structure](#hyperlink-structure)
* [target blank](#target-blank)
* [Absolute URL](#absolute-url)
* [Relative URL](#relative-url)
* [URL#ID](#urlid)
* [App links](#app-links)

## hyperlink structure
---

```
hyperlink = content + url

content = text, image...
```

```html
<a href="url">content</a>
```

```html
<a href="http://www.ifpb.edu.br/">ifpb</a>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem">
  <a href="http://www.ifpb.edu.br/">ifpb</a>
</div>

> Server: Github ➡ IFPB

## target blank
---

```html
<a href="http://www.ifpb.edu.br/" target="_blank">ifpb</a>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem">
  <a href="http://www.ifpb.edu.br/" target="_blank">ifpb</a>
</div>

## Absolute URL
---

### Desktop

```
/
└── home
    └── username
        └── site
            └── pages
                ├── contact.html
                └── index.html
```

<!-- TODO demo url absolute & relative -->

**index.html**

```html
<a href="/home/username/site/pages/index.html">home</a>
<a href="file:///home/username/site/pages/index.html">home</a>
```

**contact.html**

```html
<a href="/home/username/site/pages/contact.html">contact</a>
<a href="file:///home/username/site/pages/contact.html">contact</a>
```

### Server

```
/
└── var
    └── www
        └── site
            └── pages
                ├── contact.html
                └── index.html
```

> (/var/www/site/ = http://site.com/)

**index.html**

```html
<a href="/var/www/site/pages/index.html">home</a> 👎
<a href="file:///var/www/site/pages/index.html">home</a> 👎
<a href="http://site.com/pages/index.html">home</a> (external)
<a href="http://site.com/pages/">home</a> (external)
<a href="/pages/index.html">home</a> (internal)
<a href="/pages/">home</a> (internal)
```

**contact.html**

```html
<a href="/var/www/site/pages/contact.html">contact</a> 👎
<a href="file:///var/www/site/pages/contact.html">contact</a> 👎
<a href="http://site.com/pages/contact.html">contact</a> (external)
<a href="/pages/contact.html">contact</a> (internal)
```

**index.html ➡︎ contact.html**
```
(/var/www/site = http://site.com/)
/
└── var
    └── www
        └── site
            └── pages
                └── index.html

(/var/www/site = http://othersite.com/)
/
└── var
    └── www
        └── site
            └── pages
                └── contact.html
```

```html
<a href="http://othersite.com/pages/contact.html">contact</a> (http)
```

### Example
<!-- relative; absolute /, aboslute domain -->
```html
<a href="http://www.ifpb.edu.br">IFPB</a>
<a href="http://www.ifpb.edu.br/institucional/sobre-o-ifpb">Sobre o IFPB</a>
<a href="file://C:/WINDOWS/ifpb.png">Logo IFPB</a>
<a href="C:/WINDOWS/image.png">Logo IFPB</a>
<a href="ftp://ftp.gnu.org/pub/gnu/gimp.README">gimp.README</a>
```

## Relative URL
---

**index.html ➡︎ contact.html**
```
/
└── var
    └── www
        └── site
            └── pages
                ├── contact.html
                └── index.html
```

```html
<a href="contact.html">contact</a>
<a href="./contact.html">contact</a>
```

**index.html ➡︎ contact.html**
```
/
└── var
    └── www
        └── site
            ├── pages
            │   └── contact.html
            └── index.html
```

```html
<a href="pages/contact.html">contact</a>
<a href="./pages/contact.html">contact</a>
```

**index.html ➡︎ contact.html**
```
/
└── var
    └── www
        └── site
            ├── pages
            │   └── html
            │       └── contact.html
            └── index.html
```

```html
<a href="pages/html/contact.html">contact</a>
<a href="./pages/html/contact.html">contact</a>
```

**index.html ➡︎ contact.html**
```
/
└── var
    └── www
        └── site
            ├── pages
            │   └── contact.html
            └── public
                └── index.html
```

```html
<a href="../pages/contact.html">contact</a>
```

**index.html ➡︎ contact.html**
```
/
└── var
    └── www
        └── site
            ├── pages
            │   └── contact.html
            └── public
                └── html
                    └── index.html
```

```html
<a href="../../pages/contact.html">contact</a>
```

### Example

```html
<a href="home.html">home</a>
<a href="./home.html">home</a>
<a href="pages/home.html">home</a>
<a href="./pages/home.html">home</a>
<a href="../page/home.html">home</a>
```

## URL#ID
---

### Wikipedia Contents

```html 
<a href="https://en.wikipedia.org/wiki/HTML#History">HTML History</a>
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem">
  <a href="https://en.wikipedia.org/wiki/HTML#History">HTML History</a>
</div>

### Example

```html
<h1>Sumário</h1>

<ul>
  <li>Dolor ipsum</li>
  <li>Ipsum dolor</li>
</ul>

<h1>Dolor ipsum</h1>
<p>…</p>
<h1>Ipsum dolor</h1>
<p>…</p>
```

[`link-local/index.html`](link-local/):
```html
<h1>Sumário</h1>

<ul>
  <li>
    <a href="#dolor_ipsum">Dolor ipsum</a>          
  </li>
  <li>
    <a href="#ipsum_dolor">Ipsum dolor</a>
  </li>
</ul>

<h1 id="dolor_ipsum">Dolor ipsum</h1>
<p>…</p>
<h1 id="ipsum_dolor">Ipsum dolor</h1>
<p>…</p>
```

## App links
---

```html
<a target="_blank" href="mailto:cstsi@ifpb.edu.br">cstsi@ifpb.edu.br</a>
<a target="_blank" href="sms:83999999999">(83) 9.9999-9999</a>
<a target="_blank" href="tel:83999999999">(83) 9.9999-9999</a>
<a target="_blank" href="whatsapp://send?text=Solu%C3%A7%C3%A3o%20Tempor%C3%A1ria%20https%3A%2F%2Fvidadesuporte.com.br%2Fsuporte-a-serie%2Fsolucao-temporaria%2F">whatsapp</a>
```

## References
---

* Elements:
  * [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
* Attributes:
  * [global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes): `id`
  * [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes): `href`, `target`
