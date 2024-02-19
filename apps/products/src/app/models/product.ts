import { Category } from "./category";
import { ProductStatus } from "./productStatus";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    description: string;
    code: string;
    status: ProductStatus;
}