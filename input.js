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