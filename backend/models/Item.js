// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import Transaction from "./Transaction.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Item = db.define('Items', {
  // Define attributes
  id:{
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull : false,
  },
  item_price: {
    type: DataTypes.DOUBLE,
    allowNull : false,
  },
  item_picture: {
    type: DataTypes.STRING
  },
  item_stock: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
Item.hasMany(Transaction, {
  foreignKey:'item_id',
});


// Export model Item
export default Item;
