const { getLists, getItems, getUsers } = require('./getData');

exports.get = (req, res, next) => {
  const lists = getLists(req, res, next);
  const items = getItems(req, res, next);
  const users = getUsers(req, res, next);
  Promise.all([lists, items, users]).then(() => {
    res.render('home', { title: 'Baraka', lists, items, users });
  });
};
