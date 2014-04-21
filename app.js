var scroll = require('scroll-core');
var app = scroll({
  model: {
    connection: __dirname + '/test/' //path to JSON data
  }
});

app.start(8181);
