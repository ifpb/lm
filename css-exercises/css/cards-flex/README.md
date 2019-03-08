# Cards em Flexbox

## Objetivo
---

O objetivo desta atividade consiste em abordar os seguintes tópicos:

- Criar um grid de `cards`
- Criar um layout usando as propriedades do Flexbox.
  
## Descrição
---
O Layout [Tabler](https://tabler.github.io/) possui no seu início um conjunto de `cards` conforme ilustra a *Figura 1*:
  
*Figura 1 - Layout em Flexbox*<br>
![Stats](assets/layout.png)

Tente usar os conceitos de Flexbox para criar os seis `card`, contudo, considere que:

  * O conteúdo dos `cards` deve ser:

  ```
   6% 43    New Tickets
  -3% 17    Closed Today
   9% 7     New Replies
   3% 27.3K Followers
  -2% $95   Daily Earnings
  -1% 621   Products
  ```

  * Os ícones utilizados são `fa-chevron-up` e `fa-chevron-down`
  * As cores seriam `#cd201f (.text-red)`, `#5eba00 (.text-green)` e `#6c757d (.text-muted)`.
  * A estrutura de cada `card` siga este padrão:

  ```html
  <div class="card">
    <div class="card-body text-center">
      <div class="text-right text-green">
        6%
        <i class="fa fa-chevron-up"></i>
      </div>
      <h1>43</h1>
      <div class="text-muted">New Tickets</div>
    </div>
  </div>
  ```

  * Em cada `card` as bordas devem apresentar esse estilo:

  ```css
  .card {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 3px;
  }
  ```

  * A fonte utilizada é a [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro).

<br>
<br>
<br>

> [Alternativa de resposta](site-response/)