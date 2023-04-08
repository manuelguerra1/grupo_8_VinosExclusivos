module.exports = (sequelize, DataTypes) => {
  let alias = "Varietal";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    varietal_name: {
      type: DataTypes.STRING(255),
    },
  };
  let config = {
    timestamps: true,
    tablename: 'varietales',
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
    paranoid: true,
  };
  
  const Varietal = sequelize.define(alias, cols, config);

  Varietal.associate = function (models) {
    Varietal.hasMany(models.Product, {
      as: 'Product',
      foreignKey: 'varietal_id'
    })
  }
  
  return Varietal;
};