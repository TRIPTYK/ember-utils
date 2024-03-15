function ensureModelProperties(model, modelConstructor, properties) {
  modelConstructor.eachAttribute(name => {
    if (properties.includes(name.toString()) && model[name.toString()] === undefined) {
      throw new Error(`Missing ${modelConstructor.modelName} attribute property in model: ${name.toString()} (value: undefined)`);
    }
  });
  modelConstructor.eachRelationship((name, meta) => {
    if (properties.includes(name.toString())) {
      const reference = model[meta.kind](meta.name);
      if (reference.value() === null) {
        throw new Error(`Missing ${modelConstructor.modelName} relationship property in model: ${name.toString()}`);
      }
    }
  });
  return model;
}

export { ensureModelProperties as default };
//# sourceMappingURL=ensure-model-properties.js.map
