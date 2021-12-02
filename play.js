const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 15419
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //data event
  conn.on ('data', function(message){
    console.log(message);

  });

  //connect event object
  conn.on ('connect', function(){
    console.log("Successfully connected")

    //publish name to server
    conn.writer('Name: arc');
  });

  return conn;
};
 module.exports = connect;
 
console.log("Connecting ...");
connect();

