import { Category } from "./category.entity";


export enum TrasactionType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

type TransactionsProps = {
    _id?: string;
    title:string;
    amount: number;
    date: Date;
    category: Category;
    type: TrasactionType;
};

export class Transaction {
    public _id?: string;
    public title:string;
    public amount: number;
    public date: Date;
    public category: Category;
    public type: TrasactionType;

    constructor({ _id, type, date, amount, category, title }: TransactionsProps) {
        this._id = _id;
        this.title = title
        this.amount = amount;
        this.date = new Date(date);
        this.category = new Category(category);
        this.type = type;
    }
}