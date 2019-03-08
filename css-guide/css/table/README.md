# Table

* [Collapsed](#collapsed)
* [Striped rows](#striped-rows)

## Collapsed
---

[table-collapse/index.html](table-collapse/index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/master.css">
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Oct 2017</th>
        <th>Oct 2016</th>
        <th>Change</th>
        <th>Programming Language</th>
        <th>Ratings</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>1</td>
        <td></td>
        <td>Java</td>
        <td>12.431%</td>
        <td>-6.37%</td>
      </tr>
      ...
      <tr>
        <td>5</td>
        <td>5</td>
        <td></td>
        <td>Python</td>
        <td>3.803%</td>
        <td>+0.03%</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

[table-collapse/css/master.css](table-collapse/css/master.css):
```css
table {
  border-collapse: collapse
}

td, th {
  border: 1px solid #000;
  padding: .4em 1em;
}
```

Output:

<iframe src="table-collapse/index.html" width="100%" style="border-radius: 0.3rem; border: solid 1px #dce6f0; padding: 0.8rem; height: 240px"></iframe>

## Striped rows
---

[table-striped-row/index.html](table-striped-row/index.html):
```html
<table>
  <thead>
    <tr>
      <th>Oct 2017</th>
      <th>Oct 2016</th>
      <th>Change</th>
      <th>Programming Language</th>
      <th>Ratings</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td></td>
      <td>Java</td>
      <td>12.431%</td>
      <td>-6.37%</td>
    </tr>
    ...
    <tr>
      <td>5</td>
      <td>5</td>
      <td></td>
      <td>Python</td>
      <td>3.803%</td>
      <td>+0.03%</td>
    </tr>
  </tbody>
</table>
```

[table-striped-row/css/master.css](table-striped-row/css/master.css):
```css
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

table td,
table th {
  padding: 1%;
}

table thead th {
  border-bottom: 2px solid #ddd;
}

table tbody tr {
  border-bottom: 1px solid #ddd;
}

table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

table tbody tr:hover {
  background-color: #d3d3d3;
  font-weight: bold;
}
```

Output:

<iframe src="table-striped-row/index.html" width="100%" style="border-radius: 0.3rem; border: solid 1px #dce6f0; height: 420px;"></iframe>