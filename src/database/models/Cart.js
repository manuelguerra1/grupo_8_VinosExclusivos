module.exports = (sequelize, DataTypes) => {
    let alias = "Cart";
    let cols = { 
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
    },
    total: {
        type:DataTypes.DECIMAL,
    },

    payment_id: {
        type:DataTypes.INTEGER,
    },

    item_id: {
        type:DataTypes.INTEGER,
    },
        user_id: {
            type:DataTypes.INTEGER,
    }
};
    
    
        let config = {
          timestamps: true,
          created_at: "created_at",
          updated_at: "updated_at",
          deleted_at: "deleted_at",
          paranoid: true,
        };
      
        const Cart = sequelize.define(alias, cols, config);
      
        return Cart;
      };