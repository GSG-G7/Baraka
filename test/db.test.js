const tape = require('tape');
const bulidDb = require('./../src/models/config/build');
const { get, insert } = require('../src/models/queries');

tape('init db test', t => {
  t.equal(1, 1, 'should pass');
  t.end();
});

tape('test post in data', t => {
  t.equal(1, 1, 'should pass');
  console.log(get.users());
  t.end();
});
