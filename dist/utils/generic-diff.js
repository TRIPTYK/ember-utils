function genericDiff(models, array) {
  const persistedIds = array.filter(e => e.id !== undefined).map(e => e.id);
  const left = array.filter(e => e.id === undefined);
  const deleted = models.filter(model => !persistedIds.includes(model.id));
  return {
    deleted,
    left
  };
}

export { genericDiff as default };
//# sourceMappingURL=generic-diff.js.map
