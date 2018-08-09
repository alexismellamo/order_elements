const hashToObject = require('./hashToObject');

const hash = `{
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

describe('orderElements function', () => {
  describe('order elements by name', () => {
    it.only('works', () => {
      const response = {
        tommy: { name: 'Tommy', age: 34 },
        julian: { name: 'Julian', age: 28 },
        peter: { name: 'Peter', age: 54 },
        justin: { name: 'Justin', age: 27 },
        john: { name: 'John', age: 20 },
        marck: { name: 'Marck', age: 32 },
        steve: { name: 'Steve', age: 38 },
        bryan: { name: 'Bryan', age: 24 }
      };
      expect(hashToObject(hash)).toEqual(response);
    });
  });
});
