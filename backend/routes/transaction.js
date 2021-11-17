import express from "express";
import {getTransaction} from "../controller/Transaction.js";

const transactionRouter = express.Router();
transactionRouter.get('/transactions', getTransaction);

export default transactionRouter;