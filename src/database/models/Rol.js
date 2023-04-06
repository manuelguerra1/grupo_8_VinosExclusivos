module.exports = (sequelize, DataTypes) => {
    let alias = "Rol";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      rol_name: {
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
  
    const Rol = sequelize.define(alias, cols, config);
  
    return Rol;
  };