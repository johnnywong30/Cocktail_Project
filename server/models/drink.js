import { v4 as uuidv4 } from 'uuid';

// Model for a Drink
export default class Drink {
    constructor(drinkData) {
        this.id = uuidv4()
        this.name = drinkData.strDrink
        this.category = drinkData.strCategory
        this.alcoholic = drinkData.strAlcoholic
        this.showInfo = false;
    }
}