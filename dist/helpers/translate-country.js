import { helper } from '@ember/component/helper';

const translateCountry = helper(function translateCountry([value, language]) {
  const lang = language ?? 'fr';
  const regionNamesInFrench = new Intl.DisplayNames([lang], {
    type: 'region'
  });
  if (Array.isArray(value)) {
    return value.map(country => regionNamesInFrench.of(country));
  }
  if (value.length > 2) {
    return value;
  }
  return regionNamesInFrench.of(value);
});

export { translateCountry as default };
//# sourceMappingURL=translate-country.js.map
