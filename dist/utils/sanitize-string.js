const arrayOfNotAlphanumeric = ['&', '(', ')', '!', '+', ':', '<', '>'];
function sanitizeString(fullText) {
  let validateFullText = fullText.replaceAll('-', '_');
  for (const notAlphanumeric of arrayOfNotAlphanumeric) {
    if (fullText.includes(notAlphanumeric)) {
      const FullTextWithoutInvalidCaracter = fullText.replaceAll(notAlphanumeric, '');
      validateFullText = FullTextWithoutInvalidCaracter;
    }
  }
  return validateFullText;
}

export { sanitizeString as default };
//# sourceMappingURL=sanitize-string.js.map
