import { Timestamp } from "firebase/firestore";
import { Preference } from "./Meal.types";

export type UserDoc = {
	uid: string
	email: string,
	displayName: string
	createdMealIds: string[] | null
	preferences: UserPreferences
	createdAt: Timestamp
	updatedAt: Timestamp
}

export type UserPreferences = {
	mealsPerDay: 1 | 2,
	foodPreferences: Preference[],
	generateFrom: 'ownDishes' | 'allDishes',
}
