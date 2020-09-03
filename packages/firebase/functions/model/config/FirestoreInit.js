const admin = require('firebase-admin');

module.exports = class FirestoreInit {
  constructor(serviceAccount) {
    this.admin = admin;
    this.serviceAccount = serviceAccount;
    this.projectId = this.serviceAccount.project_id;
    this.databaseURL = `https://${this.projectId}.firebaseio.com`;

    this.initialize();
    this.configFirestore();
  }

  initialize() {
    this.admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
      databaseURL: this.databaseURL,
    });
  }

  configFirestore() {
    this.admin.firestore().settings({ timestampsInSnapshots: true });
  }
};
