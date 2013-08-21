# Figgy

Just a simple module to do configuration files my way, without having to
copy/paste from the same project hundreads of times. Not designed for any use
cases other than my own.

# Installation

```
npm install figgy
```

# Usage

All configs are loaded in a config object stored on the figgy module.

```javascript
//basic usage
var figgy = require('figgy')

var config = figgy.load('main', process.argv[2] || 'config.json')
```

As long as figgy.load has been run, you can use `figgy.get('main')` in any
other module and retrieve the contents of the 'main' config

## figgy.load(name, filename, chdir, filter)

Arguments
* `name` : The name of the config you want to set the config to
* `filename` : The filename of the config. This gets required, so any 
* `chdir` (optional): Chdir to the path relative to the config file. This can be
  useful since if you have paths in your config, they will most likely 
  be relative to the config file itself, rather than the executable path
  (defaults to false)
* `filter` (optional): Any post-config processing can be done in this callback

## figgy.set(name, config, filter)

Arguments
* `name` : The name of the config you want to set the config to
* `config` : A variable which to set the config to
* `filter` (optional): Any post-config processing can be done in this callback

## figgy.get(name)

Returns the config associated with the name passed

Arguments:
* `name` : The name of the config you want to retrieve
