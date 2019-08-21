const connection = require('../config/connection');

const insert = itemData => {
  // eslint-disable-next-line camelcase
  const { name, content, list_id, user_id } = itemData;
  const sql = {
    text: 'INSERT INTO items (name, content, list_id, user_id) VALUES ($1, $2, $3, $4);',
    // eslint-disable-next-line camelcase
    values: [name, content, list_id, user_id]
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
