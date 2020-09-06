const functions = require('firebase-functions');

const Routes = require('./Routes');
const App = require('./App.js');

const routes = new Routes();
const app = new App(routes).server;


exports.app = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '1GB',
  })
  .https.onRequest(app);
