/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
const admin = require('firebase-admin');

const db = admin.firestore();

const nameCollection = 'ufc';

module.exports = class Sensor {
  async index(req, res) {
    const { name } = req.query;
    const files = [];
    const snapshots = [];
    try {
      const collections = await db.collection(nameCollection).doc(name).listCollections();
      const timestamps = collections.map((col) => col.id);

      for (const timestamp of timestamps) {
        snapshots.push(db.collection(nameCollection).doc(name).collection(timestamp).get());
      }

      const results = await Promise.all(snapshots);
      results.forEach((snapshot) => {
        snapshot.forEach((doc) => files.push(doc.data()));
      });

      res.send(files);
    } catch (error) {
      res.send(error);
    }
  }

  async show(req, res) {
    const { name } = req.query;
    try {
      const collections = await db.collection(nameCollection).doc(name).listCollections();
      const collectionIds = collections.map((col) => col.id);

      res.send(collectionIds);
    } catch (error) {
      res.send(error);
    }
  }

  async store(req, res) {
    const { name } = req.query;
    const { date, value, timestamp } = req.body;
    const data = { date, value, timestamp };

    try {
      const response = await db
        .collection(nameCollection)
        .doc(name)
        .collection(timestamp)
        .doc()
        .set(data);

      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  }

  async delete(req, res) {
    const deleteCollection = async (db, collectionPath, batchSize) => {
      const deleteQueryBatch = async (db, query, resolve) => {
        const snapshot = await query.get();

        const batchSize = snapshot.size;
        if (batchSize === 0) {
          resolve();
          return;
        }

        const batch = db.batch();
        snapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        await batch.commit();

        process.nextTick(() => {
          deleteQueryBatch(db, query, resolve);
        });
      };

      try {
        const collectionRef = db.collection(collectionPath);
        const query = collectionRef.orderBy('__name__').limit(batchSize);

        return new Promise((resolve, reject) => {
          deleteQueryBatch(db, query, resolve).catch(reject);
        });
      } catch (error) {
        throw error;
      }
    };

    try {
      const { name, timestamp } = req.query;
      const path = `/${nameCollection}/${name}/${timestamp}`;

      await deleteCollection(db, path, 1);

      res.status(200).send(`Collection "${timestamp}", of sensor ${name}  deleted!`);
    } catch (error) {
      throw error;
    }
  }
};
