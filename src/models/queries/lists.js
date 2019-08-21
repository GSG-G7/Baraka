const connection = require('../config/connection');

const insert = name => {
  const sql = {
    text: 'INSERT INTO lists (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = 'SELECT * FROM lists ;';
  return connection.query(sql);
};

module.exports = {
  insert,
  selectAll
};
