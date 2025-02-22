import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { TransactionModel } from "../database/schemas/transactions.schemas";
import { TransactionsService } from "../services/transactions.service";

export class TransactiosFatory {
    private static transactionsService: TransactionsService

    static getServiceInstance() {
        if(this.transactionsService) {
            return this.transactionsService
        }

        const repository = new TransactionsRepository(TransactionModel);
        const categoriesRepository = new CategoriesRepository(CategoryModel)
        const service = new TransactionsService(repository, categoriesRepository)

        this.transactionsService = service;

        return service;

    }
}

