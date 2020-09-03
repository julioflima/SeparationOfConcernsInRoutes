/* eslint-disable no-unused-expressions */
const { celebrate } = require('celebrate');
const express = require('express');

const FirestoreInit = require('../model/config/FirestoreInit');
const serviceAccountKey = require('../model/config/serviceAccountKey.json');

new FirestoreInit(serviceAccountKey).admin;

const SensorDTO = require('../model/SensorDTO');
const SensorRule = require('../rule/SensorRule');
const SensorController = require('../controller/SensorController');

const routes = express.Router();

routes.get('/sensorTimestamps', celebrate(SensorDTO.getSensor()), SensorController.show);

routes.get('/sensor', celebrate(SensorDTO.getSensor()), SensorController.index);

routes.post('/sensor', SensorRule.date, celebrate(SensorDTO.postSensor()), SensorController.store);

routes.delete('/sensor', celebrate(SensorDTO.deleteSensor()), SensorController.delete);

module.exports = routes;
