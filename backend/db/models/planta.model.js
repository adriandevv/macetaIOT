const { Model, DataTypes, Sequelize } = require('sequelize');
const {MACETA_TABLE} = require("./maceta.model")
const PLANTA_TABLE = 'planta';

const PlantaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  humedadTierra: {
    allowNull: false,
    field: 'humedad_tierra',
    type: DataTypes.INTEGER,
  },
  humedadAmbiente: {
    allowNull: false,
    field: 'humedad_ambiente',
    type: DataTypes.INTEGER,
  },
  macetaId: {
    field: 'maceta_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: MACETA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
  ,
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Planta extends Model {
  static associate(models) {
    this.belongsTo(models.Maceta, { as: 'maceta' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLANTA_TABLE,
      modelName: 'Planta',
      timestamps: false,
    };
  }
}

module.exports = { PLANTA_TABLE, PlantaSchema, Planta };
