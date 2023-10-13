# Html Safe

Use this helper to indicate that a string should be rendered as HTML when the string is used in a template. To say this another way, strings marked with htmlSafe will not be HTML escaped.

<DocsDemo as |demo|>
  <demo.example @name="html-safe.hbs">
    {{html-safe "<b>Hello!</b>"}}
  </demo.example>
  <demo.snippet @name="html-safe.hbs"/>
</DocsDemo>