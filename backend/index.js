const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:5173', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});

// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.send('<h1>Hello world by adrian valencia hernandez</h1>');
// });

// // When the server receives a post request on /sendData
// app.post('/sendData', function (req, res) {

//     //send data to sockets.
//     io.sockets.emit('event', { message: "Hello from server!" })
    
//     res.send({});
// });

// // When a new connection is requested
// io.on('connection', function (socket) {
//     console.log('User Connected!');

//     // Send to the connected user
//     socket.emit('event', { message: 'Connected !!!!' });
    
//     // On each "status", run this function
//     socket.on('status', function (data) {
//         console.log(data);
//     });
// });

// // Listen to port 3000
// http.listen(3000, function () {
//     console.log('listening on *:3000');
// });