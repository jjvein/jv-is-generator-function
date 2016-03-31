var expect = require('expect.js')
var jvIsGen = require('../')

describe('Test Suite', function(){

  it('variable function ', function(){
    var fun1 = function(){}
    var fun2 = function* (){}

    expect(jvIsGen(fun1)).to.be(false)
    expect(jvIsGen(fun2)).to.be(true)
})

  it('normal function', function(){
    function fun3(){}
    function *fun4(){}

    expect(jvIsGen(fun3)).to.be(false)
    expect(jvIsGen(fun4)).to.be(true)
  }),

  it('prototype function', function(){
    expect(jvIsGen({}.toString)).to.be(false)
  })

  it('Generator function constructor', function(){
    var Generator = Object.getPrototypeOf(function*(){}).constructor
    var fun6 = new Generator('a', 'yield a * 2')
    expect(jvIsGen(fun6)).to.be(true)   
  })
})
