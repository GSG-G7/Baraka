const app = require('./app');

app.listen(() => {
  console.log(`http://localhost:${app.get('port')}`);
});
