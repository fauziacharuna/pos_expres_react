import express from "express";
import {getItems, createItem, getItemById,updateItem, deleteItem} from "../controller/Item.js";

const itemRouter = express.Router();

itemRouter.get('/items', getItems);
itemRouter.post('/items', createItem);
itemRouter.get('/item/:id', getItemById);
itemRouter.put('/item/:id', updateItem);
itemRouter.delete('/item/:id', deleteItem);



export default itemRouter