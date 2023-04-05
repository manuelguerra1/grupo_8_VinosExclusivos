module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING(255),
      },
    };
    let config = {
      timestamps: true,
      created_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const Category = sequelize.define(alias, cols, config);
  
    return Category;
  };