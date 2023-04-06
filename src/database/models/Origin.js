module.exports = (sequelize, DataTypes) => {
    let alias = "Origin";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      country: {
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
  
    const Origin = sequelize.define(alias, cols, config);
  
    return Origin;
  };