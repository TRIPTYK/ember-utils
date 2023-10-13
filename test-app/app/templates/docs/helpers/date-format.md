# Date Format

Helper to format a date using `date-fns`. Default format is `dd/MM/yyyy`.

It accepts an ISO string or a date object.

<DocsDemo as |demo|>
  <demo.example @name="date-format.hbs">
    <p>Date1 : {{date-format "2022-03-14T11:45:33.079Z"}}</p>
    <p>Date2 : {{date-format this.date}}</p>
    <p>Date3 : {{date-format "2022-03-14T11:45:33.079Z" "yyyy"}}</p>
  </demo.example>
  <demo.snippet @name="date-format.hbs"/>
</DocsDemo>