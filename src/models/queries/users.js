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

module.exports = {
  insert,
  selectAll
};
