import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDrink, addDrinks } from '../redux/drinks'
import axios from 'axios'
import PropTypes from 'prop-types'

import Button from './Button'


// Order Button will add a drink to the current list
const Header = ( { title, onClick, onSurprise} ) => {
    const dispatch = useDispatch()

    // State is immutable
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(count - 3)
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Order' 
                    onClick = { async () => {
                        // waiting for the response before incrementing count
                        const response = await axios.get('http://localhost:4000/random');
                        const data = await response.data;
                        // dispatch is synchronous, need to learn redux 
                        // middleware to deal with memory leaks
                        dispatch(addDrink(data.drink));          
                        increment();                       
                    }}
            />
            { count < 3 ?
                <></>
                :
                <Button text='Surprise'
                        color='#b3b3ffce'
                        onClick = { async () => {
                            const response = await axios.get('http://localhost:4000/surprise');
                            const data = await response.data;
                            // dispatch is synchronous, need to learn redux 
                            // middleware to deal with memory leaks
                            dispatch(addDrinks(data.drinks));
                            reset();
                        }}
                />
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Cocktail Project'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onSurprise: PropTypes.func,
}

export default Header
