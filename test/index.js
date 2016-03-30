var expect = require('expect.js')
var jvIsGen = require('../')

describe('Test Suite', function(){

  it('AAA', function(){
    var fun1 = function(){}
    var fun2 = function* (){}

    function fun3(){}
    function *fun4(){}

    expect(jvIsGen(fun1)).to.be(false)
    expect(jvIsGen(fun2)).to.be(true)
    expect(jvIsGen(fun3)).to.be(false)
    expect(jvIsGen(fun4)).to.be(true)
  })
})
