const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const FirestoreInit = require('../model/FirestoreInit');
const serviceAccountKey = require('../model/serviceAccountKey.json');

// eslint-disable-next-line no-unused-expressions
new FirestoreInit(serviceAccountKey).admin;

const Sensor = require('../controller/Sensor');

const sensor = new Sensor();

const routes = express.Router();

routes.get('/sensor', sensor.index);

routes.get('/sensor', sensor.show);

routes.get(
  '/sensor',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  sensor.index
);

routes.get(
  '/sensor',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  sensor.show
);

routes.post(
  '/sensor',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      value: Joi.string().required(),
      date: Joi.string().required(),
      timestamp: Joi.string().required(),
    }),
  }),
  sensor.store
);

routes.delete(
  '/sensor',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().required(),
      timestamp: Joi.string().required(),
    }),
  }),
  sensor.delete
);

module.exports = routes;
