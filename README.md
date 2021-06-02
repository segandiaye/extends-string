# extended-string

[![NPM version](http://img.shields.io/npm/v/extended-string.svg)](https://www.npmjs.org/package/extended-string)
[![Build Status](https://travis-ci.org/segandiaye/extended-string.svg?branch=main)](https://travis-ci.org/segandiaye/extended-string)

This is a tool that provides extra String methods. It allows to perform some actions more easily with `Strings` types which makes it simpler, more flexible, more practical and less effort.

## Installation

```sh
# Using npm
npm install --save extended-string
```

### Usage

```js
const Str = require('extended-string');

// Syntax : Str(string).countOccurencesOf(word)
Str('This is an example!').countOccurencesOf('is'); // expected output: 2
// Syntax : Str(string).encryptInOccurencesFormat()
Str('This is an example!').encryptInOccurencesFormat(); // expected output: 1T1h2i2s32a1n2e1x1m1p1l1!
Str('aabdccczxxxxx').encryptInOccurencesFormat(); // expected output: 2a1b1d3c1z5x

// Syntax : Str(string).removeByIndex(index)
Str('This is an example!').removeByIndex(2); // expected output: Ths is an example!
// Syntax : Str(string).removeWord(word)
Str('This is one of one an example!').removeWord('one'); // expected output: This is  of one an example!
// Syntax : Str(string).removeWordAll(word)
Str('This is one of one an example!').removeWordAll('one'); // expected output: This is  of  an example!

// Syntax : Str(string).reverse()
Str('This is an example!').reverse(); // expected output: !elpmaxe na si sihT

// Syntax : Str(string).add(index, word)
Str('This is an example!').add(8, 'one of '); // expected output: This is one of an example!
// Syntax : Str(string).addInHead(word)
Str('This is an example!').addInHead('Hi! '); // expected output: Hi! This is an example!
// Syntax : Str(string).addInEnd(word)
Str('This is an example!').addInEnd('!'); // expected output: This is an example!!

// Syntax : Str(string).upperByIndex(index)
Str('this is an example!').upperByIndex(0); // expected output: This is an example!
// Syntax : Str(string).upperWord(word)
Str('this is an example!').upperWord('is'); // expected output: thIS is an example!
// Syntax : Str(string).upperWordAll(word);
Str('this is an example!').upperWordAll('is'); // expected output: thIS IS an example!

// Syntax : Str(string).lowerByIndex(index)
Str('THIS IS AN EXAMPLE!').lowerByIndex(0); // expected output: tHIS IS AN EXAMPLE!
// Syntax : Str(string).lowerWord(word)
Str('THIS IS AN EXAMPLE!').lowerWord('IS'); // expected output: THis IS AN EXAMPLE!
// Syntax : Str(string).lowerWordAll(word)
Str('THIS IS AN EXAMPLE!').lowerWordAll('IS'); // expected output: THis is AN EXAMPLE!

// Syntax : Str(string).splice(start, countEnd, word)
Str('This is an example!').splice(0, 9, 'I am the new'); // expected output: I am the new example!
```
