import { Dish } from './Dish';

export interface Meal {
    id: number;
    name: string;
    dishes: Dish[];
}