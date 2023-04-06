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
      creaded_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const Varietal = sequelize.define(alias, cols, config);
  
    return Varietal;
  };