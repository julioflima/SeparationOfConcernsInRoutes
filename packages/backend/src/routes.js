/* eslint-disable no-unused-expressions */
const { celebrate } = require('celebrate');
const express = require('express');

const SensorDTO = require('../model/SensorDTO');
const SensorRule = require('../rule/SensorRule');
const SensorController = require('../controller/SensorController');

const routes = express.Router();

routes.get('/sensor', celebrate(SensorDTO.getSensor()), SensorController.index);
routes.post('/sensor', celebrate(SensorDTO.postSensor()), SensorRule.date, celebrate(SensorDTO.ruleDate()), SensorController.store);
routes.delete('/sensor', celebrate(SensorDTO.deleteSensor()), SensorController.delete);

module.exports = routes;
