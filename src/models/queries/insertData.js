const connection = require('../config/connection');

const lists = name => {
  const sql = {
    text: 'INSERT INTO lists (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};
const users = name => {
  const sql = {
    text: 'INSERT INTO lists (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};
const items = (name, content, listId, userId) => {
  const sql = {
    text: 'INSERT INTO lists (name) VALUES ($1, $2, $3, $4);',
    values: [name, content, listId, userId]
  };
  return connection.query(sql);
};
module.exports = {
  lists,
  items,
  users
};
