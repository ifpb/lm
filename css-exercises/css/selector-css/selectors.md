# Resposta

## Seletores

* Os títulos de nível 1: `h1`
* Todos os títulos: `h1, h2, h3, h4, h5, h6`
* Todos os hyperlinks do artigo principal: `#bodyContent a`
* Selecione as anotações (`<div role="note">`): `div[role="note"]`
* Selecione as anotações (`<div role="note">`) que estão após um título de nível 2: `h2+div[role="note"]`
* Selecione o primeiro hyperlink do menu, o de texto "Main page": `#p-navigation li:first-child a`
* O primeiro parágrafo do artigo principal: `#bodyContent p:first-of-type`
* A table "CSS priority scheme (highest to lowest)": `#mw-content-text > div > table:nth-child(52)`
* As linhas pares do corpo da table "CSS priority scheme (highest to lowest)": `#mw-content-text > div > table:nth-child(52) tbody tr:nth-child(2n)`

## Ruleset

```css
#mw-content-text > div > table:nth-child(52) tbody tr:nth-child(2n) {
  background-color: #ccc;
}
```