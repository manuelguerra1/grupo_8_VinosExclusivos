module.exports = (sequelize, DataTypes) => {
    let alias = "Payment";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      method: {
        type: DataTypes.STRING(255),
      },
	  installments: {
		type: DataTypes.INTEGER,
	  },  
    };
    let config = {
      timestamps: true,
      created_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const Payment = sequelize.define(alias, cols, config);
  
    return Payment;
  };