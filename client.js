// const conn = net.createConnection({ 
//   host: '127.0.0.1:4040', // change to IP address of computer or ngrok host if tunneling
//   port: 15419 //3000 // or change to the ngrok port if tunneling
// });

// conn.setEncoding('utf8'); // interpret data as text

// const conn = connect();
// setupInput(conn);
// module.exports = connect;

/************************************** */

const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const name = 'Name: RR';
  const up = 'Move: up';
  const right = 'Move: right';
  const down = 'Move: down';
  const left = 'Move: left';
  
  const conn = net.createConnection({ 
    host: IP, 
    port: PORT
  });

  conn.setEncoding('utf8'); 
  
  conn.write(`${name}`);

  setInterval(() => { conn.write(`${up}`)}, 500);
  setInterval(() => { conn.write(`${right}`)}, 500);
  setInterval(() => { conn.write(`${down}`)}, 500);
  setInterval(() => { conn.write(`${left}`)}, 500);
  
  conn.on('data', (data) => {
    console.log('Received: ' + data);
  });

  conn.on('connect', () => {
    console.log("You are connected :)");
  });
  return conn;
}

module.exports = connect;