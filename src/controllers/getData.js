const { lists, items, users } = require('../models/queries/index');

exports.getLists = (req, res, next) =>
  lists
    .selectAll()
    .then(result => result.rows)
    .catch(err => next(err));

exports.getItems = (req, res, next) =>
  items
    .selectAll()
    .then(result => result.rows)
    .catch(err => next(err));

exports.getUsers = (req, res, next) =>
  users
    .selectAll()
    .then(result => result.rows)
    .catch(err => next(err));
