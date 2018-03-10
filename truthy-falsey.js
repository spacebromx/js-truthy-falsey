/*
There are 7 primitive data types in Javascript (as of 2018).
Each one can be converted into a truthy/falsey value depending
of the value it's assigned:

toBoolean conversion
Credit: Sam Bennett
https://www.youtube.com/watch?v=6hESXoxDtgo

==========================================================================================================
||  Argument Type ||    Result                                                                          ||
==========================================================================================================
||  Undefined    ||  Returns false                                                                      ||
||  Null         ||  Returns false                                                                      ||
||  Boolean      ||  Returns argument                                                                   ||
||  Number       ||  Returns false if argument is +0, -0 or NaN, otherwise, returns true                ||
||  String       ||  Returns false if argument is the empty String (length = 0), otherwise returns true ||
||  Symbol       ||  Returns true                                                                       ||
||  Object       ||  Returns true                                                                       ||
==========================================================================================================
*/

const undefinedValue = undefined;
const nullValue = null;
const myNumberZero = 0;
const myNumberOne = 1;
const myStringEmpty = '';
const myString = 'Hello world!';
const myObject = {};
const mySymbol = Symbol();

if (undefinedValue) {
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - Undefined is evaluated as falsey');
}

if (nullValue) {
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - Null is evaluated as falsey');
}

if (myNumberZero) { // 0
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - A number (+0 or -0) or NaN is evaluated as falsey');
}

if (myNumberOne) { // 1
  console.log('[✅ ] - A number (not +0 nor -0) nor NaN is evaluated as truthy');
} else {
  console.log('this is never gonna happen!!');
}

if (myStringEmpty) {
  console.log('this is never gonna happen');
} else {
 console.log('[🚫 ] - An empty String is evaluated as falsey'); 
}

if (myString) {
  console.log('[✅ ] - A non empty String is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen');
}

if (myObject) {
  console.log('[✅ ] - An object is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen'); 
}

if (mySymbol) {
  console.log('[✅ ] - A symbol is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen'); 
}

console.log('===========================');
console.log('Let the fun stuff begin! 😬');
console.log('===========================');

if ('Alan' || null) {
  console.log(`[✅ ] - 'Alan' || null is truthy`);
}

if ('' || null) {
  console.log('this is never gonna happen!!');
} else {
  console.log(`[🚫 ] - '' || null is falsey`);
}

if ('true' && 'false') {
  console.log(`[✅ ] - 'true' && 'false' is truthy`);
} else {
  console.log('this is never gonna happen!!');
}

if ('true' || false) {
  console.log(`[🚫 ] - 'true' || false is falsey`);
} else {
  console.log('this is never gonna happen!!');
}

if ('false' || {}) {
  console.log(`[✅ ] - 'false' || {} is truthy`);
} else {
  console.log('this is never gonna happen!!');
}

if (true && {}) {
  console.log(`[✅ ] - true && {} is truthy`);
} else {
  console.log('this is never gonna happen!!');
}