const connection = require('./../config/connection');

const lists = () => {
  const sql = 'SELECT * from lists ;';
  return connection.query(sql);
};
const users = () => {
  const sql = 'SELECT * from users ;';
  return connection.query(sql);
};
const items = () => {
  const sql = 'SELECT * from items ;';
  return connection.query(sql);
};
module.exports = {
  lists,
  users,
  items
};
