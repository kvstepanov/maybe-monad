/**
 * Nothing - represent absence of value
 */
const Nothing = {
  map: _ => Nothing,
  chain: _ => Nothing,
  toString: () => `Nothing`
};

/**
 * Just - represents a value
 * @param {*} value
 */
const Just = value => ({
  value,
  map: f => Just(f(value)),
  chain: f => f(value),
  toString: () => `Just(${value})`
});

/**
 * Checks is value is type of Nothing
 * @param {*} value
 */
const isNothing = value => value === Nothing;

/**
 * Checks if value is null or undefined
 * @param {*} value
 */
const isNil = value => value == null;

/**
 * Creates Maybe by returning Just constructor or Nothing
 * @param {*} value
 */
const fromNullable = value => (isNil(value) ? Nothing : Just(value));

/**
 * Maybe with default value
 * @param {*} defaultValue - default value for Nothing case
 * @param {function} f - function to be chained
 * @param {*} value - Maybe value
 */
const maybe = (defaultValue, f, value) =>
  isNothing(value) ? defaultValue : value.chain(f);

export { Nothing, Just, fromNullable, maybe };
