const http = require("http");
const app = require("../app");
const server = http.createServer(app);
const os = require("os");
const numCPUs = os.cpus().length;
const cluster = require("cluster");
const debug = require("debug");
const db = require('../models/index');

// console.log(numCPUs);


function normalizePort(val) {
    const port = parseInt(val, 10); 
  
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  }
  const port = normalizePort(process.env.PORT || '9000');

  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit', (worker) => {
      cluster.fork();
    });
  } else {

// server.listen(port,()=>{
//     console.log("server is starting");
// })

  // if we are not on master thread then start the master thread
    db.sequelize.sync({force:true}).then(function () {
      server.listen(port, function () {
        console.log(`Listening on port: ${server.address().port}`);
        debug('Express server listening on port ' + server.address().port);
      });
      server.on('error', onError);
      server.on('listening', onListening);
    });
  }

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  
  // HANDLE SERVER ERROR
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
      default:
        throw error;
    }
  }
  















