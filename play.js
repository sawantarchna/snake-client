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

//const connect = require("./client");

// const connection = {
//   w: "Move: up",
//   a: "Move: left",
//   s: "Move: down",
//   d: "Move: right"
// }

let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;      
  stdin.setRawMode(true);           
  stdin.setEncoding("utf8");        
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
//const conn = connect();
const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') {                         
    process.exit();
  } else if (key === 'w'){
    setTimeout(() => {connection.write('Move: up');}, 500);
  } else if (key === 'a'){
    setTimeout(() => {connection.write('Move: left');}, 1000);
  } else if (key === 's'){
    setTimeout(() => {connection.write('Move: down');}, 1500);
  } else if (key === 'd'){
    setTimeout(() => {connection.write('Move: right');}, 2000);
  } 
};

// setupInput().on('data', (key) => {
//   handleUserInput(key);
// });

module.exports = setupInput; 

