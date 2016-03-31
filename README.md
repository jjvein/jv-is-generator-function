# jv-is-generator

### Introduction
The function\* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

### Usage

```js

var jvIsGen = require('jv-is-generator-function')
var log = console.log

var fun1 = function(){}
var fun2 = function* (){}

function fun3(){}
function *fun4(){}

var fun5 = Object.prototype.toString

//使用Generator 的构造函数来创建
var Generator = Object.getPrototypeOf(function*(){}).constructor
var fun6 = new Generator('a', 'yield a * 2')

log('fun1', jvIsGen(fun1))
log('fun2', jvIsGen(fun2))
log('fun3', jvIsGen(fun3))
log('fun4', jvIsGen(fun4))
log('fun5', jvIsGen(fun5))
log('fun6', jvIsGen(fun6))

```
