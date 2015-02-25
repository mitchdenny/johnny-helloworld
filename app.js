var five = require('johnny-five');
var board = new five.Board();
var led = null;

board.on('ready', function() {
  console.log('Board ready: Hello world!');
});
