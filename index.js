const path = require('path');
const serve = require('serve');

const server = serve(path.join(__dirname, 'test/fixtures'), {
  port: 8123,
  ignore: ['node_modules']
});