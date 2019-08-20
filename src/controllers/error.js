const client = (req, res) => {
  res.status(404).send('404 not found');
};
const server = (err, req, res, next) => {
  res.status(500).send('500 internal server error');
};
module.exports = { client, server };
