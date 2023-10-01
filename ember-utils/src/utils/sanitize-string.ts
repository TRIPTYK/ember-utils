const arrayOfNotAlphanumeric: string[] = [
  '&',
  '(',
  ')',
  '!',
  '+',
  ':',
  '<',
  '>',
];

export default function sanitizeString(fullText: string): string {
  let validateFullText: string = fullText.replaceAll('-', '_');

  for (const notAlphanumeric of arrayOfNotAlphanumeric) {
    if (fullText.includes(notAlphanumeric)) {
      const FullTextWithoutInvalidCaracter = fullText.replaceAll(
        notAlphanumeric,
        '',
      );
      validateFullText = FullTextWithoutInvalidCaracter;
    }
  }
  return validateFullText;
}
