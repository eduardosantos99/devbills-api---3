import mongoose, { mongo } from "mongoose"
import { CategorySchema } from "./category.schema"

const TrasactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    type: String,
    date: Date,
    category: CategorySchema,

}, { versionKey: false });

export const TransactionModel = mongoose.model('Transaction',TrasactionSchema )