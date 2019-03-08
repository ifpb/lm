# [How to apply your CSS to your HTML](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)

* [Inline styles](#inline-styles)
* [Internal stylesheet](#internal-stylesheet)
* [External stylesheet](#external-stylesheet)
* [Mixed stylesheet](#mixed-stylesheet)

## Inline styles
---

### CSS Declaration

```
            declaration
          ┌──────┴───────┐
<p style="font-size: 20px;">Lorem ipsum dolor</p>
          └───┬───┘  └─┬─┘
          property   value
```

### Example

[`stylesheets/inline/index.html`](stylesheets/inline/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1 style="color: blue;">Lorem ipsum</h1>
  <p style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: blue;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>  
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue;">Lorem ipsum</h1>
  <p style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="color: blue;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

## Internal stylesheet
---

### CSS rulesets

```
 selector
   ┌┴┐     declaration
    p { ┌──────┴───────┐
        font-size: 20px;
    }   └───┬───┘  └─┬─┘
        property   value
```

### Declaration block

```css
p {
  font-size: 20px;
  text-align: justify;
}
```

### Group of selectors

```css
p, h1 {
  color: blue;
}
```

### Example

[`stylesheets/internal/index.html`](stylesheets/internal/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    p {
      font-size: 20px;
      text-align: justify;
    }
    p, h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>  
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue">Lorem ipsum</h1>
  <p style="font-size: 20px; color: blue; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

## External stylesheet
---

### Structure

```html
<link rel="stylesheet" href="css/master.css">
```

### Example

```
site
├── css
│   └── master.css
└── index.html
```

[`stylesheets/external/index.html`](stylesheets/external/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/master.css">
</head>
<body>
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>  
```

[`stylesheets/external/css/master.css`](stylesheets/external/css/master.css):
```css
p {
  font-size: 20px;
  text-align: justify;
}
p, h1 {
  color: blue;
}
```

Output:

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: blue">Lorem ipsum</h1>
  <p style="font-size: 20px; color: blue; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: blue; text-align: justify;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>


## Mixed stylesheet
---

```
site
├── css
│   └── master.css
└── index.html
```

[`stylesheets/mixed/index.html`](stylesheets/mixed/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/master.css">
  <style>
    p {
      font-size: 20px;
      text-align: justify;
    }
    p, h1 {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Lorem ipsum</h1>
  <p style="color: green;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p>Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p>Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</body>
</html>  
```

[`stylesheets/mixed/css/master.css`](stylesheets/mixed/css/master.css):
```css
p {
  font-size: 17px;
  color: blue;
}
```

<div style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;">
  <h1 style="color: red">Lorem ipsum</h1>
  <p style="font-size: 20px; color: green; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  <p style="font-size: 20px; color: red; text-align: justify;">Eveniet amet laudantium aperiam nisi ratione at, blanditiis...</p>
  <p style="font-size: 20px; color: red; text-align: justify;">Culpa possimus obcaecati laudantium nesciunt consequatur...</p>
</div>

### CSS Question
> 

> What is the color of the first and last paragraph in the Inline, Internal, External and Mixed Stylesheet? Why?

## References
---

* [How to apply your CSS to your HTML \| MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)
* [Style rule syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Basic_rule_syntax)
* Attributes:
  * [global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes): `style`
* Elements:
  * [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)