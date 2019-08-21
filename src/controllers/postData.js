const { lists, items, users } = require('../models/queries/index');

exports.addList = (req, res, next) => {
  const listInfo = req.body;
  lists
    .insert(listInfo.list)
    .then(() => res.redirect('/'))
    .catch(next);
};

const adduser = name => {
  users
    .find(name)
    .then(id => {
      // 1 or 0
      if (!id) users.insert(name).then(() => users.find(name).then(console.log));
      return id;
    })
    .catch(err => err);
};
users.find('asd').then(console.log);
exports.addItem = (req, res, next) => {
  const itemInfo = req.body;
  // console.log(itemInfo);
  adduser(itemInfo.item_user).catch(next);
  // items
  //   .insert(itemInfo)
  //   .then(() => res.redirect('/'))
  //   .catch(err => next(err));
};
