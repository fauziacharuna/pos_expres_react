// Import model Transaction
import Transaction from "../models/Transaction.js";
import Order from "../models/Order.js";
// Get semua transaction
export const getTransaction = async (req, res) => {
    console.log(res.data);
    try {
        const transaction = await Transaction.findAll({
            include: {
                model: Order
            }
        });
        res.status(200).json({
            success: true,
            data: transaction,
            message: "Get All Transaction"
        })

    } catch (err) {
        console.log(err);
    }
}

// Get Item berdasarkan id
export const getItemById = async (req, res) => {
    try {
        const item = await Item.findOne({
            where: {
                id: req.params.id
            }
        });
        console.log('item', item)
        if (!item)
            return res.status(200).json({
                success: false,
                data: null,
                message: "Get item"
            })
        return res.status(200).json({
            success: true,
            data: item,
            message: "Get product"
        })
    } catch (err) {
        console.log(err);
    }
}

// Create product baru
export const createItem = async (req, res) => {
    try {
        await Item.create(req.body);
        res.json({
            "message": "Item Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product berdasarkan id
export const updateItem = async (req, res) => {
    try {
        const item = await Item.update(req.body, {
            where: {
                id: req.params.id
            }

        });
        console.log(item)
        if (!item){
            res.json({
                "message": "Item Not found!"
            });
        } else {
            res.json({
                "message": "Item Updated"
            });
        }


    } catch (err) {
        console.log(err);
    }
}

// Delete product berdasarkan id
export const deleteItem = async (req, res) => {
    try {
        const item = await Item.destroy({
            where: {
                id: req.params.id
            }
        });
        console.log(item)
        if (!item){
            res.json({
                "message": "Item not found"
            });
        } else {
            res.json({
                "message": "Item Deleted"
            });
        }

    } catch (err) {
        console.log(err);
    }
}
