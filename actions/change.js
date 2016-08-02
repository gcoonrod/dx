'use strict';

exports.action = {
  name:                   'change',
  description:            'change',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,
  middleware:             [],

  inputs: {
    change: {
      required: true
    }
  },

  run: function(api, data, next) {
    let error = null;

    api.tasks.enqueue('prepareChange', data.params.change, 'default', (error, toRun) => {
      if(error){
        data.response = error;
        return next(error);
      }

      next();
    });

  }
};
