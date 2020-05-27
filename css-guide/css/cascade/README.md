# Cascade

* [Cascade](#cascade)
* [Importance](#importance)
* [Specificity](#specificity)
* [Source order](#source-order)
* [Reference](#reference)

## Cascade
---

### [CSS Syntax \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

![css statement](https://developer.mozilla.org/@api/deki/files/6168/=css_syntax_-_statements_Venn_diag.png)<br>

### [How CSS works \| MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

![how css works](https://mdn.mozillademos.org/files/11781/rendering.svg)

### [Document Object Model (DOM)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model#document_object_model_dom)

![Document Object Model (DOM)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/full-process.png)

<!--
### [CSS Object Model (CSSOM)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model#css_object_model_cssom)
![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-construction.png)
![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-tree.png)
-->

### [Render-tree](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png)

<!--
### [Rendering](https://developers.google.com/web/fundamentals/performance/rendering/)
![](https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg)
-->

## [Importance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Importance)
---

### Declaration (Normal, Important)

#### Normal

```css
h1 {
  color: red;
}

h1 {
  color: green;
}
```

#### Important

```css
h1 {
  color: red !important;
}

h1 {
  color: green;
}
```

#### CSS Question

> What is the color of `<h1>` Element?

![important css](https://memeexplorer.com/cache/846.jpg)

### Style sheet (User Agent, Author, User)

#### User Agent Style Sheet

* [Firefox (Gecko)](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
* [Safari (WebKit)](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
* [Chrome (Blink)](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
* [Microsoft Edge (EdgeHTML)](https://gist.github.com/jonathantneal/abc52743caa0a019d359ec4ba2ce965b)
* [revert.css](https://github.com/sw4/revert.css)
* [normalize.css](https://necolas.github.io/normalize.css/)

#### Author Style Sheet

* `style`
* `<style>`
* `<link>`

#### User Style Sheet

* [Stylish Plugin](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en) ([Gallery](http://userstyles.org/))
* [Stylus Plugin](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en)

### Importance order

| Declaration | Style sheets | Importance degree |
|-|-|:-:|
| | User Agent | 1 |
| Normal | User | 2 |
| Normal | Author | 3 |
| Important | Author | 4 |
| Important | User | 5 |

## [Specificity](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity)
---

Specificity Value: **NNNN**

| Number |	Selector |
|-|-|
| Thousands |	style attribute |
| Hundreds | ID selector |
| Tens | class selector, attribute selector, pseudo-class  |
| Ones | element selector, pseudo-element |

### Example

[specificity/index.html](specificity/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    h1 {
      color: blue;
    }

    #title {
      color: orange;
    }
  </style>
</head>
<body>
  <h1 id="title" style="color: green;">Lorem ipsum</h1>
</body>
</html>
```

[specificity/css/style.css](specificity/css/style.css):
```css
h1 {
  color: red;
}
```

### CSS Question

> What is the color of `<h1>` Element?<br>
> Is it possible to inspect specificity?

| Style	| Selector | Thousands | Hundreds | Tens | Ones | Total |
|-|-|-|-|-|-|-|
| color: green | `style` | 1 | 0 | 0 | 0 | 1000 |
| color: orange | `#title` | 0 | 1 | 0 | 0 | 0100 |
| color: blue | `h1` | 0 | 0 | 0 | 1 | 0001 |
| color: red | `h1` | 0 | 0 | 0 | 1 | 0001 |

> If you disable the color green and orange, what is the `<h1>` color?<br>

![](https://i.imgflip.com/2a3fmn.jpg)
<a href="https://i.imgflip.com/2a3ggp.jpg" style="color: #fff">https://i.imgflip.com/2a3ggp.jpg</a>

## [Source order](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Source_order)
---

### Example 

[source-code/index.html](source-code/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    h1 {
      color: blue;
    }

    body {
      color: orange;
    }
  </style>
</head>
<body>
  <h1>Lorem ipsum</h1>
</body>
</html>
```

[source-code/css/style.css](source-code/css/style.css):
```css
h1 {
  color: red;
}
```

### CSS Question

> What is the color of `<h1>` Element?

## Reference
---

* Cascade: [W3C](https://www.w3.org/TR/CSS22/cascade.html), [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance), [WP](https://docs.webplatform.org/wiki/tutorials/inheritance_and_cascade)

