'use strict';

exports.task = {
  name:          'processChange',
  description:   'processChange',
  frequency:     0,
  queue:         'default',
  plugins:       [],
  pluginOptions: {},

  run: function(api, params, next){
    // your logic here
    next();
  }
};
