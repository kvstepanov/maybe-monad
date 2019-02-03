const Nothing = {
  chain: () => Nothing,
  toString: () => `Nothing`
};

const isNothing = value => value === Nothing;

const isNullOrUndef = value => value === undefined || value === null;

const Just = value => ({
  value,
  map: f => Just(f(value)),
  chain: f => f(value),
  toString: () => `Just(${value})`
});

const Maybe = value => (isNullOrUndef(value) ? Nothing : Just(value));
Maybe.of = Maybe;

const maybe = (defaultValue, f, value) =>
  isNothing(value) ? defaultValue : value.chain(f);

export { Nothing, Just, Maybe, maybe };
