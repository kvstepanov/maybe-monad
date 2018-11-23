import { Maybe } from './maybe'

const maybeNothing = Maybe.of()
maybeNothing.isNothing() //?

const maybeNull = Maybe.of(null) //?
maybeNull.isNothing() //?


const maybeOne = Maybe.of(1) //?
maybeOne.isNothing() //?
maybeOne.map(x => x + 1) //?


const maybeMaybe = Maybe.of(Maybe.of('Secret value'))
maybeMaybe.flatten()//?