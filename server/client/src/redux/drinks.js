import { createSlice } from '@reduxjs/toolkit';

export const drinkSlice = createSlice({
    name: "drinks",
    initialState: {
        drinks: []
    },
    reducers: {
        // action has a Drink object
        addDrink: (state, action) => {
            state.drinks = [...state.drinks, action.payload]
        },
        // action has an array of Drink objects
        addDrinks: (state, action) => {
            state.drinks = [...state.drinks, ...action.payload]
        },
        // action has id
        toggleInfo: (state, action) => {
            state.drinks = state.drinks.map( (drink) => drink.id === action.payload ? {...drink, showInfo: !drink.showInfo} : drink)
        }, 
        // action has id 
        deleteDrink: (state, action) => {
            state.drinks = state.drinks.filter( (drink) => drink.id !== action.payload)
            
        }
    }
});

// Action creators are generated for each case reducer function
export const { addDrink, addDrinks, toggleInfo, deleteDrink } = drinkSlice.actions;

export default drinkSlice.reducer;