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

describe('orderElements function', () => {
  describe('order elements by name', () => {
    it('works', () => {
      const response = JSON.stringify({
        bryan: { name: 'Bryan', age: 24 },
        john: { name: 'John', age: 20 },
        julian: { name: 'Julian', age: 28 },
        justin: { name: 'Justin', age: 27 },
        marck: { name: 'Marck', age: 32 },
        peter: { name: 'Peter', age: 54 },
        steve: { name: 'Steve', age: 38 },
        tommy: { name: 'Tommy', age: 34 }
      });

      expect(orderElements(people, 'name')).toEqual(response);
    });

    describe('order elements by age', () => {
      it('works', () => {
        const response = JSON.stringify({
          john: { name: 'John', age: 20 },
          bryan: { name: 'Bryan', age: 24 },
          justin: { name: 'Justin', age: 27 },
          julian: { name: 'Julian', age: 28 },
          marck: { name: 'Marck', age: 32 },
          tommy: { name: 'Tommy', age: 34 },
          steve: { name: 'Steve', age: 38 },
          peter: { name: 'Peter', age: 54 }
        });

        expect(orderElements(people, 'age')).toEqual(response);
      });
    });
  });
});
