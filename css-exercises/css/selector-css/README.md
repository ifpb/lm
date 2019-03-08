# Selecionando Elementos no HTML

## Objetivo

O objetivo desta atividade consiste em abordar os seguintes temas:

- Criar um selector para coletar elementos do HTML
- Usar o plugin [CSS Selector](https://github.com/lucachaves/css-selector-extension) para visualizar a seleção

## Descrição

Segundo a norma [Selectors Level 3](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#selectors) do W3C, a [tabela de seletores](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#selectors) exibe uma vasta gama de opções para obteção dos elementos de um HTML. A princípio esse recurso é bastante utilizado no CSS para aplicação de estilos nos *Rulesets*, contudo, outras linguagens e ferramentas também vem se beneficiando de seu potencial, como, por exemplo, o Javascript que pode resgatar elementos do HTML via seletores do CSS para sua devida manipulação ou tratamento de eventos.

Antes de iniciar a atividade é importante habilitar o plugin [CSS Selector](https://github.com/lucachaves/css-selector-extension) para visualizar o resultado de um seletor CSS. Então faça o download do arquivo [css-selector.zip](https://github.com/lucachaves/css-selector-extension/releases/download/1.0/css-selector.zip) e tente habilitar o plugin seguindo as instruções no [Chrome](https://developer.chrome.com/extensions/getstarted#manifest) ou [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Installing).

No intuito de testar os vários seletores, acesse a [página do CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) no Wikipedia e tente fazer a seleção dos seguintes elementos:

* Os títulos de nível 1
* Todos os títulos
* Todos os hyperlinks do artigo principal
* Selecione as anotações (`<div role="note">`)
* Selecione o primeiro hyperlink do menu, o de texto "Main page"
* O primeiro parágrafo do artigo principal
* A table "CSS priority scheme (highest to lowest)"
* As linhas pares do corpo da table "CSS priority scheme (highest to lowest)"
* Algum link quando o curso está em cima dele.

Uma dica legal é que as Ferramentas de Desenvolvedor geralmente conseguem traçar uma selector para as tags selecionadas, no chrome, na aba `Elements` você pode acessar o seletor de uma tag via seu menu suspensdo, na opção `Copy > Copy selector`. Outro recurso legal é que vc pode ter a aplicação de novos *Rulesets* em `Elements`, então, tente aplicar a cor de plano de fundo `#ccc` nas linhas pares do corpo da table "CSS priority scheme (highest to lowest)".

> [Alternativa de resposta](selectors.md)
