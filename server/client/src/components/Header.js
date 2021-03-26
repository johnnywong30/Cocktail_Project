import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Button from './Button'


// Order Button will add a drink to the current list
const Header = ( { title, onClick } ) => {

    // State is immutable
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Order' 
                    onClick = { async () => {
                        // waiting for the response before incrementing count
                        const response = await axios.get('http://localhost:4000/random');
                        const data = await response.data;
                        onClick(data);            
                        increment()
                        console.log(count)
                    }}
            />
            { count < 5 ?
                <></>
                :
                <Button text='Surprise'
                        color='#b3b3ffce'
                        onClick = { async () => {
                            const response = await axios.get('http://localhost:4000/surprise');
                            const data = await response.data;
                            console.log(data.drinks) 
                            // mess around with adding each drink to the orders  
                            // data.drinks.forEach()
                            reset()
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
}

export default Header
