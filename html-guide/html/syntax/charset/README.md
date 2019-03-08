# Charset

Reference:
  * [HTML Character Sets](https://www.w3schools.com/charsets/default.asp)
  * Unicode
    * [Unicode Character Code Charts](http://www.unicode.org/charts/)
    * [C1 Controls and Latin-1 Supplement (Range: 0080–00FF)](http://www.unicode.org/charts/PDF/U0080.pdf)
    * [Unicode Character Table](https://unicode-table.com/en/)
  * UTF-8
    * [UTF-8 encoding table and Unicode characters](http://www.utf8-chartable.de/unicode-utf8-table.pl)
    * [UTF-8 \| Wikipedia](https://en.wikipedia.org/wiki/UTF-8)
  * ISO-8859-1
    * [ISO 8859-1 (Latin-1) Table](https://cs.stanford.edu/~miles/iso8859.html)
    * [ISO/IEC 8859-1 \| Wikipedia](https://en.wikipedia.org/wiki/ISO/IEC_8859-1)

##  UTF-8

| Char | Name | HTML Code | Unicode Code Point | Dec | Hex | Bin |
|-|-|-|-|-|-|-|
| á | LATIN SMALL LETTER A WITH ACUTE | &amp;#225; | U+00E1 | 195 161 | 0xC3 0xA1 | 11000011 10100001 |
| � | REPLACEMENT CHARACTER | | U+FFFD | 239 191 189 | 0xEF 0xBF 0xBD | 11101111 10111111 10111101 |

## ISO-8859-1 

| Char | Name | HTML Code | Dec | Hex | Bin |
|-|-|-|-|-|-|
| á | LATIN SMALL LETTER A WITH ACUTE | &amp;#225; | 225 | 0xE1 | 11100001 |
| Ã | LATIN CAPITAL LETTER A WITH ACUTE | &amp;195; | 195 | 0xC3 | 11000011 |
| ¡ | INVERTED EXCLAMATION MARK | &amp;161; | 161 | 0xA1 | 10100001 |

### HTML Charset

| Write | Read | Example |
|-|-|-|
| UTF-8 | UTF-8 | [charset-utf8-utf8/index.html](charset-utf8-utf8/index.html) |
| UTF-8 | ISO-8859-1 | [charset-utf8-iso88591/index.html](charset-utf8-iso88591/index.html) |
| ISO-8859-1 | UTF-8 | [charset-iso88591-utf8/index.html](charset-iso88591-utf8/index.html) |