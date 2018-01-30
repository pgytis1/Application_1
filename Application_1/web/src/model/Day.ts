import { Days } from './enums';
import { Meal } from './Meal';

export interface Day {
    id: number;
    name: Days;
    meals: Meal[];
}