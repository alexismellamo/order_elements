# Order Elements

Se tiene el siguiente hash de elementos

```
people = {
  :tommy => { :name => "Tommy", :age => 34 },
  :julian => { :name => "Julian", :age => 28 },
  :peter => { :name => "Peter", :age => 54 },
  :justin => { :name => "Justin", :age => 27 },
  :john => { :name => "John", :age => 20 },
  :marck => { :name => "Marck", :age => 32 },
  :peter => { :name => "Peter", :age => 22 },
  :steve => { :name => "Steve", :age => 38 },
  :bryan => { :name => "Bryan", :age => 24 }
}
```


Realizar un método que reciba como parámetro el hash people y ordene los elementos del mismo de acuerdo a un segundo parámetro recibido donde sus posibles valores serán age o name para ordenar los elementos del hash por la edad o por el nombre respectivamente y como resultado se debe retornar el hash ordenado de acuerdo al segundo parámetro.

**Una regla a tener en cuenta muy importante es que de haber elementos repetidos, deberá retornarse sólo el elemento cuya edad sea la mayor.**



## Requirements

You need to have the following services installed in your computer:

* node > 8.11.3

### Mac OS

```
$ brew install node
```


### Clone the repo

```
$ git clone git@github.com:alexisllamas/order_elements.git
```

### Install node dependencies

```
$ yarn
```


```
$ yarn start
```

or you can use

```
$ npm start
```

### Run test!

```
$ yarn test
```


or you can use

```
$ npm test
```

## Tech Stack

* node
