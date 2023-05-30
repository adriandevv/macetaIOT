const { Model, DataTypes, Sequelize } = require('sequelize');

const PLANTA_TABLE = 'planta';

const PlantaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  codigo: {
    type: DataTypes.STRING,
  },
  minHumedadTierra: {
    field: 'minimo_humedad_tierra',
    type: DataTypes.INTEGER,
  },
  maxHumedadTierra: {
    field: 'maximo_humedad_tierra',
    type: DataTypes.INTEGER,
  },
  minTemperaturaAmbiente: {
    field: 'minimo_Temperatura_ambiente',
    type: DataTypes.INTEGER,
  },
  maxTemperaturaAmbiente: {
    field: 'maximo_temperatura_ambiente',
    type: DataTypes.INTEGER,
  },
  minHumedadAmbiente: {
    field: 'minimo_humedad_ambiente',
    type: DataTypes.INTEGER,
  },
  maxHumedadAmbiente: {
    field: 'maximo_temperatura_ambiente',
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Planta extends Model {
  static associate(models) {
    this.hasOne(models.Maceta, {
      as: 'maceta',
      foreignKey: 'plantaId'
    });
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
