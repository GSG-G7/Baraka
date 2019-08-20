const tape = require('tape');
const connection = require('./../src/models/config/connection');
const bulidDb = require('./../src/models/config/build');



tape('init db test', t => {
  t.equal(1, 1, 'should pass');
  t.end();
});
