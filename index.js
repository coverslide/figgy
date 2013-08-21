'use strict'

var path = require('path')

var config = {}

module.exports  = figgy

figgy.load = figgy

function figgy(name, filename, chdir, filter){
  if(typeof chdir == 'function'){
    filter = chdir
    chdir = false
  }

  var realpath = path.resolve(filename)
  var conf = require(realpath)

  if(chdir){
    //sometimes we want paths relative to the config file
    var dirname = path.dirname(realpath)
    process.chdir(dirname)
  }

  return figgy.set(name, conf, filter)
}

figgy.set = function(name, conf, filter){
  return config[name] = filter ? filter(conf) : conf
}

figgy.get = function(name){
  return config[name]
}
