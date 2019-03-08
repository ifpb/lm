# Analisando o efeito da cascata no CSS

## Objetivo
---

O objetivo desta atividade consiste em abordar os seguintes temas:

- Analisar a cascata do CSS;
- Relação do valor default de uma propriedade e herança com a cascata;

## Descrição
---

A cascata no CSS é o que permite definir uma ordem de atribuição entre as inúmeras declarações de propriedade de um elemento. Então quando declaramos uma propriedade de estilo em um elemento ela será ordenada seguindo a priore o seu grau de importância, especificidade ou posição no código conforme descrito na cascata do CSS. Além disso, o valor default da propriedade e a herança também são considerados nesse fluxo.

No intuito de analisar esse fluxo de cascata tente responder as questões a seguir.

## Questões
---

**Questão 1 -** Utilize essa [página](site-cascade/), que possui quatro títulos e nove parágrafos, para tentar preencher a tabela a seguir no intuito de explicar como a propriedade de estilo `color` é aplicado a cada um dos elementos do site, especificando quantas opções de cores o elemento possui, e definindo a declaração no grau de importância, especificidade e posição no código.

| Elemento | Ordem | Opções de cores | Importância | Especificidade (abcd) | Posição |
|-|-|-|-|-|-|
| `<h1>` | 1 título | | | | |
| `<h2>` | 2 título | | | | |
| `<p>` | 1 parágrafo | | | | |
| `<p>` | 2 parágrafo | | | | |
| `<p>` | 3 parágrafo | | | | |
| `<h2>` | 3 título | | | | |
| `<p>` | 4 parágrafo | | | | |
| `<p>` | 5 parágrafo | | | | |
| `<p>` | 6 parágrafo | | | | |
| `<p>` | 7 parágrafo | | | | |
| `<p>` | 8 parágrafo | | | | |
| `<h3>` | 4 título | | | | |
| `<p>` | 9 parágrafo | | | | |

**Questão 2 -** Perceba que na página a seguir o `<h1>` pode receber as cores `red` e `blue`, além da cor default, contudo, a cor do elemento é `blue` por ter sido declarado por último.

Então tente fazer até 5 alternativas de configurações no CSS para que esse elemento possua a cor `red` usando os conceitos de cascata.

[site/index.html](site/index.html):
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
  </style>
</head>
<body>
  <h1>Lorem ipsum</h1>
</body>
</html>
```

[site/css/style.css](site/css/style.css):
```css
h1 {
  color: red;
}
```

> [Alternativa de resposta](cascade.md).