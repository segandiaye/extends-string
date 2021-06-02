# super-string

[![NPM version](http://img.shields.io/npm/v/super-string.svg)](https://www.npmjs.org/package/super-string)
[![Build Status](https://travis-ci.org/segandiaye/super-string.svg?branch=main)](https://travis-ci.org/segandiaye/super-string)

This is a tool that provides extra String methods. It allows to perform some actions more easily with `String` types which makes it simpler, more flexible, more practical and less effort.

## Installation

```sh
# Using npm
npm install --save super-string
```

### Usage

```js
const Str = require('super-string');

Str('This is an example!').countOccurencesOf('is'); // expected output: 2
Str('This is an example!').encryptInOccurencesFormat(); // expected output: 1T1h2i2s32a1n2e1x1m1p1l1!
Str('aabdccczxxxxx').encryptInOccurencesFormat(); // expected output: 2a1b1d3c1z5x

Str('This is an example!').removeByIndex(2); // expected output: Ths is an example!
Str('This is one of one an example!').removeWord('one'); // expected output: This is  of one an example!
Str('This is one of one an example!').removeWordAll('one'); // expected output: This is  of  an example!

Str('This is an example!').reverse(); // expected output: !elpmaxe na si sihT

Str('This is an example!').add(8, 'one of '); // expected output: This is one of an example!
Str('This is an example!').addInHead('Hi! '); // expected output: Hi! This is an example!
Str('This is an example!').addInEnd('!'); // expected output: This is an example!!

Str('this is an example!').upperByIndex(0); // expected output: This is an example!
Str('this is an example!').upperWord('is'); // expected output: thIS is an example!
Str('this is an example!').upperWordAll('is'); // expected output: thIS IS an example!

Str('THIS IS AN EXAMPLE!').lowerByIndex(0); // expected output: tHIS IS AN EXAMPLE!
Str('THIS IS AN EXAMPLE!').lowerWord('IS'); // expected output: THis IS AN EXAMPLE!
Str('THIS IS AN EXAMPLE!').lowerWordAll('IS'); // expected output: THis is AN EXAMPLE!

Str('This is an example!').splice(0, 9, 'I am the new'); // expected output: I am the new example!
```
