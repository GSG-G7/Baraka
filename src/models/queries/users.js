const connection = require('../config/connection');

const insert = name => {
  const sql = {
    text: 'INSERT INTO users (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = 'SELECT * from users ;';
  return connection.query(sql);
};
const find = name => {
  const sql = {
    text: 'SELECT id from users WHERE users.name = $1 ;',
    values: [name]
  };
  return connection
    .query(sql)
    .then(result => result.rows[0].id)
    .then(console.log)
    .catch(err => -1);
};
module.exports = {
  insert,
  selectAll,
  find
};
