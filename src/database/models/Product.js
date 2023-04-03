module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      last_name: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      user_name: {
        type: DataTypes.STRING(255),
      },
      password: {
        type: DataTypes.STRING(255),
      },
      confirm_password: {
        type: DataTypes.STRING(255),
      },
      rol_id: {
        type: DataTypes.INTEGER,
      },
    };
    let config = {
      timestamps: true,
      creaded_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const User = sequelize.define(alias, cols, config);
  
    return User;
  };