const { Model, DataTypes, Sequelize } = require('sequelize');
const { PLANTA_TABLE } = require('./planta.model')
const MACETA_TABLE = 'maceta';
const { USER_TABLE } = require("./user.model")
const MacetaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  humedadTierra: {
    field: 'humedad_tierra',
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  temperaturaAmbiente: {
    field: 'temperatura_ambiente',
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  humedadAmbiente: {
    field: 'humedad_ambiente',
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  plantaId: {
    field: 'planta_id',
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PLANTA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Maceta extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.belongsTo(models.Planta, { as: 'planta' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MACETA_TABLE,
      modelName: 'Maceta',
      timestamps: false,
    };
  }
}

module.exports = { MACETA_TABLE, MacetaSchema, Maceta };
