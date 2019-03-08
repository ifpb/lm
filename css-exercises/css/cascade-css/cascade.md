# Resposta

## Cascata
---

| Elemento | Ordem | Opções de cores | Importância | Especificidade (abcd) | Posição |
|-|-|-|-|-|-|
| `<h1>` | 1 título  | 1 | | | |
| `<h2>` | 2 título  | 5 | **Important Author** | a:0 b:0 c:0 d:1 | master.css:27 |
| `<p>` | 1 parágrafo  | 7 | Normal Author | **a:0 b:0 c:1 d:1** |  master.css:37  |
| `<p>` | 2 parágrafo  | 7 | Normal Author | **a:1 b:0 c:0 d:0** | inline |
| `<p>` | 3 parágrafo  | 5 | Normal Author | **a:0 b:0 c:0 d:2** | master.css:32 |
| `<h2>` | 3 título  | 5 | **Important Author** | a:0 b:0 c:0 d:1 | master.css:27 |
| `<p>` | 4 parágrafo  | 9 | Normal Author | **a:0 b:1 c:0 d:0** | master.css:7 |
| `<p>` | 5 parágrafo  | 8 | Normal Author | **a:1 b:0 c:0 d:0** | inline |
| `<p>` | 6 parágrafo  | 6 | Normal Author | **a:0 b:0 c:1 d:0** | master.css:12 |
| `<p>` | 7 parágrafo  | 5 | Normal Author | a:0 b:0 c:0 d:2 | **master.css:32** |
| `<p>` | 8 parágrafo  | 6 | Normal Author | **a:0 b:0 c:1 d:0** | master.css:7 |
| `<h3>` | 4 título  | 3 | Normal Author | a:0 b:0 c:0 d:1 | **master.css:17** |
| `<p>` | 9 parágrafo  | 7 | Normal Author | **a:0 b:0 c:1 d:1** | master.css:52 |