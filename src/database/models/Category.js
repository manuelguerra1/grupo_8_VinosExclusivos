module.exports = (sequelize, DataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING(255),
    },
  };
  let config = {
    timestamps: true,
    tablename: 'categories',
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
    paranoid: true,
  };

  const Category = sequelize.define(alias, cols, config);
  
  Category.associate = function (models) {
    Category.hasMany(models.Product, {
      as: 'Product',
      foreignKey: 'category_id'
    })
  }

  return Category;
};