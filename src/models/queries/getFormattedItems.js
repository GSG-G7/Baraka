const connection = require('../config/connection');

const format = data => {
  const array = [[]];
  let ele = 0;
  for (let i = 0; i < data.length; i += 1) {
    ele = data[i];
    if (array[ele.list_id - 1] === undefined) array[ele.list_id - 1] = [];
    array[ele.list_id - 1].push(ele);
  }
  return array;
};
const getFormattedData = () => {
  const sql = `select items.id,items.name AS title, content,users.name as username,list_id,lists.name from items inner join users ON users.id = items.user_id inner join lists on lists.id = items.user_id order by items.list_id`;
  return connection
    .query(sql)
    .then(result => result.rows)
    .then(format)
    .catch(err => err);
};
getFormattedData();
module.exports = getFormattedData;
