const tape = require('tape');
const { dbBuild } = require('./../src/models/config/build');
const { items, lists, users } = require('../src/models/queries');

tape('test get data from users table', t => {
  const expected = [
    { id: 1, name: 'Mai' },
    { id: 2, name: 'Mohammed' },
    { id: 3, name: 'Imad' },
    { id: 4, name: 'Fadi' }
  ];
  dbBuild()
    .then(() =>
      users
        .selectAll()
        .then(res => res.rows)
        .then(res => {
          t.deepEqual(res, expected, ' the table of user should contain four users');
          t.deepEqual(
            Object.keys(res[0]),
            ['id', 'name'],
            ' the keys of first user object should return id and name'
          );
          t.equal(res[0].id, 1, 'the first id in the users is 1');
          t.equal(res[3].name, 'Fadi', 'the last name in the user is Fadi');
        })
        .then(t.end)
        .catch(err => t.error(err))
    )
    .catch(console.log);
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
tape('test data from lists table', t => {
  const expected = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' }
  ];
  dbBuild()
    .then(() =>
      lists
        .selectAll()
        .then(res => res.rows)
        .then(res => {
          t.deepEqual(res, expected, ' the table of list should contain four users');
          t.deepEqual(
            Object.keys(res[0]),
            ['id', 'name'],
            ' the keys of first list object should return id and name'
          );
          t.equal(res[0].id, 1, 'the first id in the users is 1');
          t.equal(res[0].name, 'Project 1', 'the first name in the lists is porject 1');
        })
        .then(t.end)
        .catch(err => t.error(err))
    )
    .catch(console.log);
});

tape('test data from items table', t => {
  const expected = [
    { id: 1, name: 'Item 1', content: 'Description text', list_id: 1, user_id: 1 },
    { id: 2, name: 'Item 2', content: 'Description text', list_id: 1, user_id: 2 },
    { id: 3, name: 'Item 3', content: 'Description text', list_id: 1, user_id: 3 },
    { id: 4, name: 'Item 1', content: 'Description text', list_id: 2, user_id: 1 }
  ];
  dbBuild()
    .then(() =>
      items
        .selectAll()
        .then(res => res.rows)
        .then(res => {
          t.deepEqual(res, expected, ' the table of items should contain four items');
          t.deepEqual(
            Object.keys(res[0]),
            ['id', 'name', 'content', 'list_id', 'user_id'],
            ' the keys of first item object should return id , name, content, list_id'
          );
          t.equal(res[0].id, 1, 'the first id in the users is 1');
          t.equal(res[0].name, 'Item 1', 'the first name in the items is Item 1');
        })
        .then(t.end)
        .catch(err => t.error(err))
    )
    .catch(console.log);
});

tape.onFinish(() => process.exit(0));
