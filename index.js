"use strict"

var objToStr = Object.prototype.toString
var funcToStr = Function.prototype.toString

var reg = /^\s*function\*/

exports = module.exports = function(func){

  if(typeof func !== 'function') return false

  
  var str =  objToStr.call(func) 
  if(str === '[object Function]' || str === '[object GeneratorFunction]') {
        return reg.test(funcToStr.call(func))
   }
   return false
}

