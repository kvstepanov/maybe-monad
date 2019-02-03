import {
  Nothing, // singular instance of Nothing
  Just, // constructor (implemented to hide use of `new` keyword)
  maybe // returns default or calls function with Just's value
} from "../src/maybe";

const maybeJsonParse = s => {
  try {
    return Just(JSON.parse(s));
  } catch (e) {
    return Nothing;
  }
};

const maybeName = ({ name }) => (name == null ? Nothing : Just(name)); //?

const greet = name =>
  maybe(
    "Hello. What is your name?", // default for Nothing case
    n => `Hello ${n}. Great to see you again.`,
    name
  );

const greetFromData = d =>
  greet(
    maybeJsonParse(d)
      // using `map` here would cause nested Maybes
      .chain(maybeName)
  );

const invalidJson = "{";
const missingName = "{ color: purple }";
const susan = "{ name: Susan }";

greetFromData(invalidJson); //? "Hello. What's your name?"
greetFromData(missingName); //? "Hello. What's your name?"
greetFromData(susan); //? "Hello Susan. Great to see you again."

Just({ name: "Laurie" })
  .chain(maybeName)
  .toString(); //?

const validData = maybeJsonParse('{ "name": "Susan" }');
// validData.map(x => x.name).toString(); //?
validData.toString(); //?
validData.chain(maybeName).toString(); //?
validData.toString(); //?

maybeName({ name: "Bob" }).toString(); //?

Just("thing").chain(x => x.toUpperCase()); //?
