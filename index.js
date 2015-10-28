var ws = require("nodejs-websocket");
var httpProxy = require('http-proxy');

var useProxy = true;

var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

var proxy = httpProxy.createServer({
  ws: true,
  target: 'ws://localhost:8001'
}).listen(9001)

var connection = ws.connect( 'ws://localhost:' + ( useProxy ? '9001' : '8001' ) );

connection.on('connect', function() {
  connection.sendText(Array(100000).join('FOO|'))
})
