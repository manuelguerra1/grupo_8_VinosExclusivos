module.exports = (sequelize, DataTypes) => {
  let alias = "Region";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  };
  let config = {
    timestamps: true,
    tablename: 'regions',
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
    paranoid: true,
    underscored: true
  };
  
  const Region = sequelize.define(alias, cols, config);
  Region.associate = function (models) {
    Region.hasMany(models.Product, {
      as: 'Product',
      foreignKey: 'region_id'
    })
  }
  
  return Region;
};
