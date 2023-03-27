import { helper } from '@ember/component/helper';

export function translateCountry([value, language]: [
  string[] | string,
  string?
]) {
  const lang = language ?? 'fr';
  const regionNamesInFrench = new Intl.DisplayNames([lang], { type: 'region' });
  if (Array.isArray(value)) {
    return value.map((country: string) => regionNamesInFrench.of(country));
  }
  if (value.length > 2) {
    return value;
  }
  return regionNamesInFrench.of(value);
}

export default helper(translateCountry);
