import { helper } from '@ember/component/helper';

export function translateCountry([value]: [string[] | string]) {
  const regionNamesInFrench = new Intl.DisplayNames(['fr'], { type: 'region' });
  if (Array.isArray(value)) {
    return value.map((country: string) => regionNamesInFrench.of(country));
  }
  if (value.length > 2) {
    return value;
  }
  return regionNamesInFrench.of(value);
}

export default helper(translateCountry);
