import { configureStore } from '@reduxjs/toolkit' 
import drinksReducer from './drinks'

export default configureStore({
    reducer: {
        drinks: drinksReducer
    }
})