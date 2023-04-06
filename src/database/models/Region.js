module.exports = (sequelize, DataTypes) => {
    let alias = "Region";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      region: {
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
  
    const Region = sequelize.define(alias, cols, config);
  
    return Region;
  };
