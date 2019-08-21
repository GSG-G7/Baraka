const connection = require('../config/connection');

const insert = (name, content, listId, userId) => {
  const sql = {
    text: 'INSERT INTO lists (name) VALUES ($1, $2, $3, $4);',
    values: [name, content, listId, userId]
  };
  return connection.query(sql);
};
const selectAll = () => {
  const sql = 'SELECT * from items ;';
  return connection.query(sql);
};
module.exports = {
  insert,
  selectAll
};
