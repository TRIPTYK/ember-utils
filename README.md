# @triptyk/ember-utils

Various utilities/helpers/service for ember in TRIPTYK projects.

## Helpers

### Truncate
Helpers that sanitize and truncate a text.

```hbs
{{truncate this.text this.sizeWords}}
```

### Includes
Helpers that check if a value is in array.

```hbs
{{includes this.array this.value}}
```

### Translate country
Helpers that translate a string or an array of code countries (i.e BE will be 'Belgique')

```hbs
{{translate-country this.arrayOfCode}}
{{translate-country this.code}}
```

### Is Even
Really need explanation ??

```hbs
{{is-even this.number}}
```

### html-safe
Helpers that check if html doesn't contain any code or characters that could break HTML of the page.

```hbs
{{html-safe this.html}}
```
