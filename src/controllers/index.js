const router = require('express').Router();

const { client, server } = require('./error');
const { get, post } = require('./home');

router.get('/', get);

router.all('*', client);
router.use(server);

module.exports = router;
