module.exports = (sequelize, DataTypes) => {
    let alias = "Cart_product";
    let cols ={
      id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity:{
        type:DataTypes.INTEGER,
      },
      product_id:{
        type:DataTypes,INTEGER,
      },
      cart_id:{
        type:DataTypes.INTEGER,
      },
      created_at:{
        type:DataTypes.timestamps
      }

    };
    let config = {
      timestamps: true,
      creaded_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
    };
  
    const Cart_product = sequelize.define(alias, cols, config);
  
    return Cart_product;
  };