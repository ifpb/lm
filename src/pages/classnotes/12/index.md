import Code from '../../../components/Code.jsx';
import HyperText from '../../../components/HyperText.jsx';

# Formulários

## Elementos do Formulário

### single-line text field

<HyperText>
  <input type="text" name="cpf" />
</HyperText>

```html
<input type="text" name="cpf" />
```

required:

<HyperText>
  <form>
    <input type="text" name="cpf" required />{'*'}
  </form>
</HyperText>

```html
<input type="text" name="cpf" required />*
```

placeholder:

<HyperText>
  <input type="text" name="cpf" placeholder="000.000.000-00" />
</HyperText>

```html
<input type="text" name="cpf" placeholder="000.000.000-00" />
```

value:

<HyperText>
  <input type="text" name="cpf" value="000.000.000-00" />
</HyperText>

```html
<input type="text" name="cpf" value="000.000.000-00" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

### label field

<HyperText src="/codes/form/elements/label.html" />
<Code src="/codes/form/elements/label.html" lang="html" />

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

### password field

<HyperText>
  <input type="password" name="password" />
</HyperText>

```html
<input type="password" name="password" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)

### radio button field

<HyperText src="/codes/form/elements/radioButton.html" />
<Code src="/codes/form/elements/radioButton.html" lang="html" />

<HyperText src="/codes/form/elements/radioButtonGroup.html" />
<Code src="/codes/form/elements/radioButtonGroup.html" lang="html" />

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

### checkbox field

<HyperText src="/codes/form/elements/checkbox.html" />
<Code src="/codes/form/elements/checkbox.html" lang="html" />

<HyperText src="/codes/form/elements/checkboxGroup.html" />
<Code src="/codes/form/elements/checkboxGroup.html" lang="html" />

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

### button field

<HyperText>
  <button>Create</button>
</HyperText>

```html
<input type="button" name="submit" value="Create" />
<input type="submit" name="submit" value="Create" />
<button>Create</button>
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)

### file field

<HyperText>
  <input type="file" name="file" />
</HyperText>

```html
<input type="file" name="file" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)

### [range field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

<HyperText>
  <input type="range" name="number" min="1" max="99" step="1" onInput={(event) => document.querySelector('input[name=number-value]').value = event.target.value} />
  <input type="text" name="number-value" value="20" size="3" />
</HyperText>

```html
<input type="range" name="number" min="1" max="100" step="1" />
<input type="text" name="number-value" value="20" size="3" />
```

### number field

<HyperText>
  <form>
    <input type="number" name="number" />
  </form>
</HyperText>

```html
<input type="number" name="number" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

### date field

<HyperText>
  <form>
    <input type="date" name="date" />
  </form>
</HyperText>

```html
<input type="date" name="date" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

### email field

<HyperText>
  <form>
    <input type="email" name="email" />
  </form>
</HyperText>

```html
<input type="email" name="email" />
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

### multi-line text field

<HyperText>
  <label for="message">Mensagem:</label><br />
  <textarea name="message" id="message" rows="3" cols="60">digite uma mensagem</textarea>
</HyperText>

```html
<label for="message">Mensagem:</label><br />
<textarea name="message" id="message" rows="3" cols="60">
digite uma mensagem</textarea
>
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

### combobox field

<HyperText src="/codes/form/elements/select.html" />
<Code src="/codes/form/elements/select.html" lang="html" />

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

## Formulário

### Estrutura do Formulário

[simple-form/index.html](/codes/form/simple-form/index.html):

<HyperText src="/codes/form/simple-form/index.html" />

```html
<main>
  <h1 style="color: #606c71">Contato</h1>
  <form action="sucesso.html" method="post">
    <fieldset>
      <div>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required /> *
      </div>
      <div>
        <label for="curso">Curso</label>
        <select name="curso" id="curso">
          <option value="" selected>escolha um curso</option>
          <option value="TSI">Sistemas para Internet</option>
          <option value="RC">Redes de Computadores</option>
        </select>
      </div>
    </fieldset>
    <input type="submit" value="Enviar" />
  </form>
</main>
```

### Formulário com Boostrap

[bootstrap-form/index.html](/codes/form/bootstrap-form/index.html):

<HyperText src="/codes/form/bootstrap-form/index.html" />

```html
<main class="container">
  <h1>Contato</h1>
  <form action="sucesso.html" method="post">
    <div class="form-group">
      <label for="nome">Nome</label>*
      <input type="text" class="form-control" id="nome" name="nome" required />
    </div>
    <div class="form-group">
      <label for="curso">Curso</label>
      <select class="form-control" name="curso" id="curso">
        <option value="" selected>escolha um curso</option>
        <option value="TSI">Sistemas para Internet</option>
        <option value="RC">Redes de Computadores</option>
      </select>
    </div>
    <input type="submit" value="Enviar" />
  </form>
</main>
```

[bootstrap-grid-form/index.html](/codes/form/bootstrap-grid-form/index.html):

<HyperText src="/codes/form/bootstrap-grid-form/index.html" />

```html
<main class="container">
  <h1>Contato</h1>
  <form action="sucesso.html" method="post">
    <div class="row">
      <div class="form-group col-sm-6">
        <label for="nome">Nome</label>*
        <input
          type="text"
          class="form-control"
          id="nome"
          name="nome"
          required
        />
      </div>
      <div class="form-group col-sm-6">
        <label for="curso">Curso</label>
        <select class="form-control" name="curso" id="curso">
          <option value="" selected>escolha um curso</option>
          <option value="TSI">Sistemas para Internet</option>
          <option value="RC">Redes de Computadores</option>
        </select>
      </div>
    </div>
    <input type="submit" value="Enviar" />
  </form>
</main>
```
