const { lists, items, users } = require('../models/queries/index');

exports.addList = (req, res, next) => {
  const listInfo = req.body;
  lists
    .insert(listInfo)
    .then(() => res.redirect('/'))
    .catch(err => next(err));
};

exports.addItem = (req, res, next) => {
  const itemInfo = req.body;
  items
    .insert(itemInfo)
    .then(() => res.redirect('/'))
    .catch(err => next(err));
};

exports.adduser = (req, res, next) => {
  const userInfo = req.body;
  users
    .insert(userInfo)
    .then(() => res.redirect('/'))
    .catch(err => next(err));
};
