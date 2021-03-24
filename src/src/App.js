import { useState } from 'react'
import Header from './components/Header'
import Beverages from './components/Beverages'

const App = () => {
    // State is immutable
    const [drinks, setDrinks] = useState([
        {
            id: 1,
            text: 'Margarita',
            day: 'Mar 22',
            showInfo: false
        },
        {
            id: 2,
            text: 'Beer',
            day: 'Mar 23',
            showInfo: false
        },
        {
            id: 3,
            text: 'Vodka',
            day: 'Mar 21',
            showInfo: false
        },
        
    ])
    // Delete a drink
    const deleteDrink = (id) => {
        setDrinks(drinks.filter( (drink) => drink.id !== id))
        // Add something to play Minecraft drinking sound
    }
    // Toggle Info
    const toggleInfo = (id) => {
        setDrinks(drinks.map(
            (drink) => drink.id === id ? {...drink, showInfo: !drink.showInfo} : drink
        ))
    }
    return (
        <div className='container'>
        <Header/>
        { drinks.length > 0 ?
            (<Beverages drinks={drinks} 
                onDelete={deleteDrink}
                onToggle={toggleInfo}
            />) : 
            (<h3>No drinks left</h3>)
        }
        
        </div>
  );
}



export default App;
