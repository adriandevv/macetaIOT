const { User, UserSchema } = require('./user.model');
const { Maceta, MacetaSchema } = require('./maceta.model');
const { Planta, PlantaSchema } = require('./planta.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Planta.init(PlantaSchema, Planta.config(sequelize));
  Maceta.init(MacetaSchema, Maceta.config(sequelize));

  User.associate(sequelize.models);
  Planta.associate(sequelize.models);
  Maceta.associate(sequelize.models);
}

module.exports = setupModels;
