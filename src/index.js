// I used the hash as string
// because the problem says:
// Una regla a tener en cuenta muy importante es que de haber elementos repetidos,
//  deberá retornarse sólo el elemento cuya edad sea la mayor.
// so I cannot use an object from JavaScript
// because you cannot have duplicated keys
// so I used the string
// this test was hard because the input was on another programming language
// I hope my assumptions are right and I hope you have a good time reading my code

const orderElements = require('./orderElements');

const people = `{
  :tommy => { :name => "Tommy", :age => 34 },
  :julian => { :name => "Julian", :age => 28 },
  :peter => { :name => "Peter", :age => 54 },
  :justin => { :name => "Justin", :age => 27 },
  :john => { :name => "John", :age => 20 },
  :marck => { :name => "Marck", :age => 32 },
  :peter => { :name => "Peter", :age => 22 },
  :steve => { :name => "Steve", :age => 38 },
  :bryan => { :name => "Bryan", :age => 24 }
}`;

const orderedElementsByName = orderElements(people, 'name');
const orderedElementsByAge = orderElements(people, 'age');

console.log('orderedElements by name', orderedElementsByName);
console.log('orderedElements by age', orderedElementsByAge);
