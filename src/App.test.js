import greeting from "./App";

//this helps for running each test easier
const testGreeting = (input, output) => {
  expect(greeting(input)).toBe(output);
};

test("simple greeting", () => {
  testGreeting("Bob", "Hello, Bob.");
  testGreeting("Allie", "Hello, Allie.");
});

test("null test", () => {
  testGreeting(null, "Hello, my friend.");
});

test("undefined test", () => {
  expect(greeting()).toBe("Hello, my friend.");
});

test("shouting back", () => {
  testGreeting("JERRY", "HELLO JERRY!");
  testGreeting("DAN", "HELLO DAN!");
});

test("two names given", () => {
  const names = ["Jill", "Jane"];
  testGreeting(names, "Hello, Jill and Jane.");
});

test("two names shouted", () => {
  const names = ["JANE", "TOMMY"];
  testGreeting(names, "HELLO JANE AND TOMMY!");
});

test("arbitrary amount of names", () => {
  const names = ["Amy", "Brian", "Charlotte"];
  testGreeting(names, "Hello, Amy, Brian, and Charlotte.");
});

test("normal and shouted names", () => {
  const names = ["Amy", "BRIAN", "Charlotte"];
  testGreeting(names, "Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test("mixed names arbitrary", () => {
  const names = ["Amy", "BRIAN", "CHARLES", "Charlotte"];
  testGreeting(names, "Hello, Amy and Charlotte. AND HELLO BRIAN AND CHARLES!");
});

test("comma handler", () => {
  const names = ["Bob", "Charlie, Dianne"];
  testGreeting(names, "Hello, Bob, Charlie, and Dianne.");
});

test("escape intentional commas", () => {
  const names = ["Bob", '"Charlie, Dianne"'];
  testGreeting(names, "Hello, Bob and Charlie, Dianne.");
});