import { z } from "zod";
import { TrasactionType } from "../entities/transactions.entity";

export const createTransactionSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TrasactionType),
    date: z.coerce.date(),
    categoryId: z.string().length(24),

}

const createdTransationObject= z.object(createTransactionSchema);
export type CreateTransactionDTO = z.infer<typeof createdTransationObject>

export const indexTransactionsSchema = {
    title: z.string().optional(),
    categoryId: z.string().length(24).optional(),
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionsSchema);
export type IndexTransactionsDTO = z.infer<typeof indexTransactionsObject>

export const getDashboardSchema = {
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
};

const getDashboradObject = z.object(getDashboardSchema);
export type GetDashBoardDTO = z.infer<typeof getDashboradObject>;

export const getFinancialEvolutionSchema = {
    year: z.string()
};

const getFinancialEvolutionObject = z.object(getFinancialEvolutionSchema) 
export type GetFinancialEvolutionDTO = z.infer<
typeof getFinancialEvolutionObject>
