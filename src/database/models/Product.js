module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      varietal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      year: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      origen_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      region_id:  {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING(255),
      } ,
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
    };
    let config = {
      timestamps: true,
      tablename: 'products',
      created_at: "created_at",
      updated_at: "updated_at",
      deleted_at: "deleted_at",
      paranoid: true,
      underscored: true
    };
  
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
      Product.belongsTo(models.Varietal, {
          as: 'Varietal',
          foreignKey: 'varietal_id'
      });

      Product.belongsTo(models.Origin, {
        as: 'Origin',
        foreignKey: 'origen_id'
      });

      Product.belongsTo(models.Region, {
        as: 'Region',
        foreignKey: 'region_id'
      });

      Product.belongsTo(models.Brand, {
        as: 'Brand',
        foreignKey: 'brand_id'
      });

      Product.belongsTo(models.Category, {
        as: 'Category',
        foreignKey: 'category_id'
      })

    }

    
  
    return Product;
  };