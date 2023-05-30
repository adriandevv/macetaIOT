const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const humedadTierra = Joi.string();
const humedadAmbiente = Joi.string()
const macetaId = Joi.number().integer();

const createPlantaSchema = Joi.object({
  nombre:nombre.required(),
  humedadTierra:humedadTierra.required(),
  humedadAmbiente:humedadAmbiente.required(),
  macetaId: macetaId.required()
});

const updatePlantaSchema = Joi.object({
 nombre,
 humedadAmbiente,
 humedadTierra,
});

const getPlantaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPlantaSchema, updatePlantaSchema, getPlantaSchema }
