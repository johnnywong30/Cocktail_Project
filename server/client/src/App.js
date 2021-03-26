import { useState, useEffect } from 'react'
import useSound from 'use-sound';
import axios from 'axios';

import Header from './components/Header';
import Beverages from './components/Beverages';
import Footer from './components/Footer';

// I do not own this sound effect. 
// Sourced from https://youtu.be/XxoOkmvMjmo
import drinkSfx from './sounds/drink.mp3'; 

const App = () => {

    // State is immutable
    const [drinks, setDrinks] = useState([])

    const [drinkSound] = useSound(
        drinkSfx,
        { volume: 0.25}
    )

    // Delete a drink
    const deleteDrink = (id) => {
        setDrinks(drinks.filter( (drink) => drink.id !== id))
        drinkSound()
        // Add something to play Minecraft drinking sound
    }
    // Toggle Info
    const toggleInfo = (id) => {
        setDrinks(drinks.map(
            (drink) => drink.id === id ? {...drink, showInfo: !drink.showInfo} : drink
        ))
    }

    // Add a drink
    const addDrink = (data) => {
        setDrinks([...drinks, data.drink]);

    }

    // generate random drink on load
    useEffect(() => {
        // retrieve a Drink object from ExpressJS server
        axios.get('http://localhost:4000/random')
             .then(res => addDrink(res.data)) 
        // Side effect: every time the server refreshes, there is a new drink added
    }, [])

    return (
        <>
            <div className='container'>
                <Header onClick={addDrink}/>
                { drinks.length > 0 ?
                    (<Beverages drinks={drinks} 
                    onDelete={deleteDrink}
                    onToggle={toggleInfo}
                    />) : 
                    (<h3 className='ad'>No drinks left. You should order some more! </h3>)
                }
            </div>
            <Footer/>
        </>
        
        
  );
}



export default App;
