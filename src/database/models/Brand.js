module.exports = (sequelize, DataTypes) => {
    let alias = "Brands";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      brand_name: {
        type: DataTypes.STRING(255),
      },
    };
    let config = {
      timestamps: true,
      creaded_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const Brands = sequelize.define(alias, cols, config);
  
    return Brands;
  };