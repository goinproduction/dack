/*
 * Custom Proptype valid array of length
 */
export const arrayOfLength = (expectedLength, props, propName, componentName) => {
  const arrayPropLength = props[propName].length;

  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
};
