module.exports = (sequelize, DataTypes) => {
  let alias = "Origin";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  };
  let config = {
    timestamps: true,
    tablename: 'origenes',
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
    paranoid: true,
    underscored: true
  };

  const Origin = sequelize.define(alias, cols, config);

  Origin.associate = function (models) {
    Origin.hasMany(models.Product, {
      as: 'Product',
      foreignKey: 'origen_id'
    })
  }

  return Origin;
};