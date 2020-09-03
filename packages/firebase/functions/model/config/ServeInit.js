module.exports = class ServeInit {
  constructor(serviceAccount) {
    this.serviceAccount = serviceAccount;
    this.projectId = this.serviceAccount.project_id;
    this.databaseURL = `https://${this.projectId}.firebaseio.com`;
  }

  initialize() {
    process.env.GCLOUD_PROJECT = this.projectId;

    process.env.FIREBASE_CONFIG = {
      databaseURL: this.databaseURL,
      projectId: this.projectId,
    };
  }
};
