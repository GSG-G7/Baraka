const connection = require('../config/connection');

const format = data => {
  const array = [];
  const array2 = [];
  let ele = 0;
  for (let i = 0; i < data.length; i += 1) {
    ele = data[i];
    if (array[ele.list_id - 1] === undefined) array[ele.list_id - 1] = [];
    array[ele.list_id - 1].push(ele);
  }
  for (let i = 0; i < array.length; i += 1) {
    array2.push({
      listname: array[i][0].listname,
      list_id: array[i][0].list_id,
      list: array[i]
    });
  }
  return array2;
};
const getFormattedData = () => {
  const sql = `SELECT items.id,items.name AS title, content,users.name AS username,list_id,lists.name AS listName FROM items INNER JOIN users ON users.id = items.user_id INNER JOIN lists ON lists.id = items.list_id ORDER BY items.list_id`;
  return connection
    .query(sql)
    .then(result => result.rows)
    .then(format)
    .catch(err => err);
};

module.exports = getFormattedData;
