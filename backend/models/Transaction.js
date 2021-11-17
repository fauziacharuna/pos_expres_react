// import sequelize
import {Sequelize} from "sequelize";
// import connection
import db from "../config/database.js";
// import Order from "./Order.js";
// import Item from "./Item.js";
// init DataTypes
const {DataTypes} = Sequelize;
// Define schema
const Transaction = db.define('Transactions', {
    // Define attributes
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    item_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    order_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    order_total_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    notes: {
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },

}, {
    // Freeze Table Name
    freezeTableName: true
});
Transaction.associate = models => {
    Transaction.belongsTo(models.Order, {
        foreignKey: 'id',
        localKey: 'order_id'
    })
}
// Export model Item
export default Transaction;
