# Intro To Testing 
## NPM, NODE, MOCHA

| Objectives |
| :--- |
| ... a knowledge base with testing and reasons why: `describe`, `it`, ... |
| ... a knowledge base with Node and NPM utilities, and why they are important |
| ... a knowledge of methods used for iteration |


### Outline

* Package Control 
	* NPM
* Mocha
	* assert, what is an assertion?
	* `describe`
	* `it`
	* `beforeEach` or some notion of `setup` and `teardown`

### Package Control: NPM

We begin with a friendly introduction to npm

```
$ npm init

```
will begin a `package.json` file. 


`package.json`

```
{
  "name": "lesson",
  "version": "0.0.1",
  "description": "a lesson on testing",
  "main": "index.js",
  "dependencies": {
    "mocha": "1.20.1",
    "chai": "~1.9.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "testing",
    "itterators"
  ],
  "author": "you",
  "license": "ISC"
}

```

note: how in here we've included our dependencies with `key` and `value` that are the `package` and `version`.


```
$ npm install

```

installs the packages.

```
$ npm install --save <package_name>

```

installs and saves it to the `package.json`.



### Mocha

We use a `require` for the `assert` module. For now `require` is just a utility for including require.

#### Walk through example

```
// include the assert module
var assert = require("assert")

// describe 'Array' is just for description
// in the test, but could be 
// different, i.e. 
// describe `My Array test`
describe('Array', function(){

   // just starting another group of tests
  describe('#indexOf()', function(){
  
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
```



