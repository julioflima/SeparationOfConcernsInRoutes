const { celebrate } = require('celebrate');
const express = require('express');

const SensorDTO = require('../model/SensorDTO');
const SensorRule = require('../rule/SensorRule');
const SensorController = require('../controller/SensorController');

module.exports = class Routes {
  constructor() {
    this.routes = express.Router();

    return this.map();
  }

  map() {
    this.routes.get('/sensor', celebrate(SensorDTO.getSensor()), SensorController.index);
    this.routes.post('/sensor', celebrate(SensorDTO.postSensor()), SensorRule.date, celebrate(SensorDTO.ruleDate()), SensorController.store);
    this.routes.delete('/sensor', celebrate(SensorDTO.deleteSensor()), SensorController.delete);
  }
};
