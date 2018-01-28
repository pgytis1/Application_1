import { DishType } from './DishType';
import { Product } from './Product';

export interface Dish {
    id: number;
    name: string;
    grams: number;
    kcal: number;
    type: DishType;
    products?: Product[];
    preparation?: string;
}
