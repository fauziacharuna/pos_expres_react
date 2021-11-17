// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// import Transaction from "./Transaction.js";

// init DataTypes
const { DataTypes } = Sequelize;
// Define schema
const Order = db.define('Orders', {
  // Define attributes
  id:{
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  order_cust_name: {
    type: DataTypes.STRING,
    allowNull : true,
  },
  order_total_price: {
    type: DataTypes.DOUBLE,
    allowNull : true
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull : true
  },
  order_description : {
    type: DataTypes.STRING,
    allowNull: true
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
// Order.hasMany(Transaction, {
//   foreignKey: 'order_id',
// });
Order.associate = models => {
  Order.hasMany(models.Transaction, {
    foreignKey: 'order_id',
  })
}


// Export model Item
export default Order;
