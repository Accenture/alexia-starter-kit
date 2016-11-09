'use strict';
/* global __dirname */
const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');

global.expect = chai.expect;
global.sinon = sinon;
global.chaiAsPromised = chaiAsPromised;

chai.use(chaiAsPromised);

global.rootRequire = name => {
  return require(`${__dirname}/../${name}`);
};
