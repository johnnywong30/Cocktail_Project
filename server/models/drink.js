// Model for a Drink
export default class Drink {
    constructor(drinkData) {
        this.id = parseInt(drinkData.idDrink)
        this.name = drinkData.strDrink
        this.category = drinkData.strCategory
        this.alcoholic = drinkData.strAlcoholic
        this.showInfo = false;
    }
}