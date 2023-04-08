module.exports = (sequelize, DataTypes) => {
  let alias = "Brand";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  };
  let config = {
    timestamps: true,
    tablename: 'brands',
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
    paranoid: true,
    underscored: true
  };

  const Brand = sequelize.define(alias, cols, config);

  Brand.associate = function (models) {
    Brand.hasMany(models.Product, {
      as: 'Product',
      foreignKey: 'brand_id'
    })
  }

  return Brand;
};