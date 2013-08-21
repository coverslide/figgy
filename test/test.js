'use strict'

var tape = require('tape')
var figgy = require('../index.js')
var path = require('path')

process.chdir(path.dirname(module.filename))

tape('basic usage', function(t){
  figgy('default', 'fixtures/config.json')

  var conf = figgy.get('default')

  t.equal(conf.prop1, 10)
  t.equal(typeof conf.prop2, 'undefined')

  var mod = figgy.set('modified', conf, filter)

  t.equal(conf.prop2, mod.prop2)
  t.equal(mod.prop2, 'default_prop_2')

  t.equal(path.basename(process.cwd()), 'test', 'ensure chdir hasn\'t happened yet')

  figgy.load('chdir', 'fixtures/config.json', true)

  t.equal(path.basename(process.cwd()), 'fixtures', 'chdir OK')

  // TODO: make this whole test less lame

  t.end()
})

function filter(obj){
  if(!obj.prop2)
    obj.prop2 = 'default_prop_2'

  return obj
}
