# Translate country

Translates a country code to it's name in a provided language.

<DocsDemo as |demo|>
  <demo.example @name="translate-country.hbs">
        <p>Translate BE in FR : {{translate-country "BE"}}</p>
        <p>Translate FR in FR: {{translate-country "FR"}}</p>
        <p>Translate FR in DE: {{translate-country "FR" "DE"}}</p>
  </demo.example>
  <demo.snippet @name="translate-country.hbs"/>
</DocsDemo>