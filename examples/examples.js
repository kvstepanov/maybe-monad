import {
  Nothing, // singular instance of Nothing
  Just, // constructor (implemented to hide use of `new` keyword)
  maybe, // returns default or calls function with Just's value
  isNil,
  fromNullable
} from "../src/maybe";

const maybeJsonParse = s => {
  try {
    return Just(JSON.parse(s));
  } catch (e) {
    return Nothing;
  }
};

const maybeName = ({ name }) => fromNullable(name)

const greet = name =>
  maybe(
    "Hello. What is your name?", // default for Nothing case
    n => `Hello ${n}. Great to see you again.`,
    name
  );

const greetFromData = d =>
  greet(maybeJsonParse(d).chain(maybeName));

const invalidJson = "{";
const missingName = "{ \"color\": \"purple\" }";
const susan = "{ \"name\": \"Susan\" }";

greetFromData(invalidJson); //?
greetFromData(missingName); //?
greetFromData(susan); //?

Just({ name: "Laurie" })
  .chain(maybeName)
  .toString(); //?

const validData = maybeJsonParse('{ "name": "Susan" }');
// validData.map(x => x.name).toString(); //?
validData.toString(); //?
validData.chain(maybeName).toString(); //?
maybeName({ name: "Bob" }).toString(); //?
Just("thing").chain(x => x.toUpperCase()); //?
