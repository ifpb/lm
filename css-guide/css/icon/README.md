# Icons

* Image Icon
  * [Flat Icon Image](#flat-icon-image)
* Font Icon
  * [Font Awesome](#font-awesome)
  * [Google Material Icons](#google-material-icons)

## [Flat Icon Image](https://www.flaticon.com)
---

Icons: [Facebook](https://www.flaticon.com/free-icon/facebook_145802#term=facebook&page=1&position=4), [Instagram](https://www.flaticon.com/free-icon/instagram_145805#term=instagram&page=1&position=7), [Twitter](https://www.flaticon.com/free-icon/twitter_179342#term=twitter&page=1&position=11)

[flat-icon/](flat-icon/):
```
site
├── css
│   └── master.css
├── img
│   ├── facebook.svg
│   ├── instagram.svg
│   └── twitter.svg
└── index.html
```

```css
ul {
  list-style-type: none;
}

li  {
  display: inline;
}

li img {
  width: 50px;
}
```

```html
<ul>
  <li>
    <a href="#">
      <img src="img/facebook.svg" alt="Logo Facebook">
    </a>
  </li>
  <li>
    <a href="#">
      <img src="img/instagram.svg" alt="Logo Instagram">
    </a>
  </li>
  <li>
    <a href="#">
      <img src="img/twitter.svg" alt="Logo Twitter">
    </a>
  </li>
</ul>
```

Output:

<iframe src="flat-icon/" width="100%" style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## [Font Awesome](https://fontawesome.com/)
---

Icon: [Facebook](https://fontawesome.com/icons/facebook?style=brands)

[font-awesome/](font-awesome/):
```
site
├── css
│   └── master.css
└── index.html
```

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
```

```html
<a href="#">
  <i class="fab fa-facebook"></i>
</a>
```

```css
a {
  font-size: 2rem;
  color: #3b5898;
  text-decoration: none;
}
```

Output:

<iframe src="font-awesome/" width="100%" style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## Google [Material Icon](https://material.io/icons/)
---

Icon: [School](https://material.io/icons/)

[material-icon/](material-icon/):
```
site
├── css
│   └── master.css
└── index.html
```

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

```html
<a href="#">
  <i class="material-icons">school</i>
</a>
```

```css
a {
  text-decoration: none;
}

.material-icons {
  color: #ccc;
  font-size: 3rem;
}

.material-icons:hover {
  color: #000;
}
```

Output:

<iframe src="material-icon/" width="100%" style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem;"></iframe>

## References
---

- Image Icon (Raster, Vector):
  - [Flat Icon](https://www.flaticon.com) (png, svg, eps, psd, base 64)
  - [Share Icon](https://www.shareicon.net)
  - [Material Design Icons](https://materialdesignicons.com)
- Font Icon:
  - [Font Static](http://fontastic.me)
  - [Material Icons](https://material.io/icons/)
    - [Icon Gallery](https://material.io/icons/#itempool)
  - [Font Awesome](http://fontawesome.io)
    - [Icon Gallery](https://fontawesome.com/icons?d=gallery)
    - [Facebook Logo](https://fontawesome.com/icons/facebook-square?style=brands)
  - [Glyphicons](http://glyphicons.com/)
  - [Octicons](https://octicons.github.com/)
  - [Nerd Font](https://nerdfonts.com)
  - [Weather Icon](https://erikflowers.github.io/weather-icons/)
  - [Skycons](https://darkskyapp.github.io/skycons/)
