const tape = require('tape');
const { dbBuild } = require('./../src/models/config/build');
const { lists, items, users } = require('../src/models/queries');

tape('init db test', t => {
  t.equal(1, 1, 'should pass');
  t.end();
});

tape('test post in data', t => {
  t.equal(1, 1, 'should pass');
  // console.log(get.users());
  t.end();
});

tape('test get data from users table', t => {
  const expected = [
    { id: 1, name: 'Mai' },
    { id: 2, name: 'Mohammed' },
    { id: 3, name: 'Imad' },
    { id: 4, name: 'Fadi' },
    { id: 5, name: 'kalb' }
  ];
  dbBuild()
    .then(() =>
      users
        .insert('kalb')
        .then(
          users
            .selectAll()
            .then(res => res.rows)
            .then(res => {
              t.deepEqual(res, expected, 'the table of users should contain 5 users');
              t.deepEqual(
                Object.keys(res[0]),
                ['id', 'name'],
                ' the keys of first user object should return id and name'
              );
              t.equal(res[0].id, 1, 'the first id in the users is 1');
              t.equal(res[3].name, 'Fadi', 'the last name in the user is Fadi');
            })
            .then(t.end)
        )
        .catch(err => t.error(err))
    )
    .catch(console.log);
});
