# Bootstrap

## References

- [Bootstrap Site](https://getbootstrap.com)
- [Bootstrap Awesome](https://github.com/therebelrobot/awesome-bootstrap)
- Templates:
  - [Bootstrap Awesome](https://github.com/therebelrobot/awesome-bootstrap#templates)
  - [Start Bootstrap](https://startbootstrap.com)
  - [Bootswatch](https://bootswatch.com)

## [Starter template](https://getbootstrap.com/docs/4.1/getting-started/introduction/#starter-template)
---

[start-template/](start-template/):
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
  </body>
</html>
```

## [Layout](https://getbootstrap.com/docs/4.1/layout/)
---

### [Container](https://getbootstrap.com/docs/4.1/layout/overview/#containers)

```html
<div class="container">
  <!-- Content here -->
</div>
```

### [Grid system](https://getbootstrap.com/docs/4.1/layout/grid/)

References:
- [Grid Options](https://getbootstrap.com/docs/4.1/layout/grid/#grid-options)


#### Breakpoints

<table>
  <thead>
    <tr>
      <th></th>
      <th>
        Extra small<br>
        <small>&lt;576px</small>
      </th>
      <th>
        Small<br>
        <small>&ge;576px</small>
      </th>
      <th>
        Medium<br>
        <small>&ge;768px</small>
      </th>
      <th>
        Large<br>
        <small>&ge;992px</small>
      </th>
      <th>
        Extra large<br>
        <small>&ge;1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th>Class prefix</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
    <tr>
      <th># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th>Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th>Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th>Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

### Examples

[grid-system/cols.html](grid-system/cols.html):
```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
</div>
```

[grid-system/cols-3-9.html](grid-system/cols-3-9.html):
```html
<div class="container">
  <div class="row">
    <div class="col-3">
      1 of 2
    </div>
    <div class="col-9">
      2 of 2
    </div>
  </div>
</div>
```

[grid-system/cols-responsive.html](grid-system/cols-responsive.html):
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-9">
      1 of 2
    </div>
    <div class="col-12 col-lg-3">
      2 of 2
    </div>
  </div>
</div>
```

## [Content](https://getbootstrap.com/docs/4.1/content/)
---


References:
- [Reboot](https://getbootstrap.com/docs/4.1/content/reboot/)
- [Typography](https://getbootstrap.com/docs/4.1/content/typography/)
- [Table](https://getbootstrap.com/docs/4.1/content/tables/)

[table/](table/):
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## [Component](https://getbootstrap.com/docs/4.1/components/)
---

References:
- [Buttons](https://getbootstrap.com/docs/4.1/components/buttons/)
- [Cards](https://getbootstrap.com/docs/4.1/components/card/)

[card/](card/):
```html
<div class="card">
  <img class="card-img-top" src="img/ubuntu.svg" alt="Logo Ubuntu">
  <div class="card-body">
    <h4 class="card-title"><a href="https://www.ubuntu.com/">Ubuntu</a></h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```

[card-table/](card-table/)


## Templates
---

- [Startbootstrap](https://startbootstrap.com)
  - Theme: [bootswatch](https://bootswatch.com)