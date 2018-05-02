'use strict';

const muu = require('./lib/muumuu').default;

// Create the default instance to be exported
var muuInstance = muu.CREATE();

muuInstance.muu = muu;

muuInstance.create = function create(config) {
  return muu.CREATE(config);
}

module.exports = muuInstance;

// Allow use of default import syntax in TypeScript
module.exports.default = muuInstance;
