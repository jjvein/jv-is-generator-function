"use strict"

var jvIsGen = require('../')
var log = console.log

var fun1 = function(){}
var fun2 = function* (){}

function fun3(){}
function *fun4(){}
log(jvIsGen(fun1))
log(jvIsGen(fun2))
log(jvIsGen(fun3))
log(jvIsGen(fun4))
