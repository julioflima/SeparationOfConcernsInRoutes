const functions = require('firebase-functions');

const routes = require('./routes');
const App = require('./App.js');

const app = new App(routes).server;

exports.app = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '1GB',
  })
  .https.onRequest(app);
