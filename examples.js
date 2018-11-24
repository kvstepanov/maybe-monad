import { Maybe } from './maybe'

const prop = obj => prop => obj[prop]

const maybeNothing = Maybe.of()
maybeNothing.isNothing() //?

const maybeNull = Maybe.of(null) //?
maybeNull.isNothing() //?

const maybeOne = Maybe.of(1) //?
maybeOne.isNothing() //?
maybeOne.map(x => x + 1) //?
maybeOne.flatten() //?

const maybeMaybe = Maybe.of(Maybe.of('Secret value'))
maybeMaybe.flatten()//?
maybeMaybe.flatMap(x => x) //?

const someObj = {}

const maybeObj = Maybe.of(someObj).map(prop('any')) //?

maybeObj.isNothing() //?


