const router = require('express').Router();

const { client, server } = require('./error');
const { get, addList } = require('./home');

router.get('/', get);
router.post('/addList', addList);

router.all('*', client);
router.use(server);

module.exports = router;
