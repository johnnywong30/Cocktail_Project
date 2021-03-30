import { useSelector } from 'react-redux';

import Drink from './Drink'

const Beverages = () => {
    const { drinks } = useSelector(state => state.drinks)
    return (
        <>
            {drinks.map( (drink) => (
                <Drink key={drink.id} 
                       drink={drink} 
                />
            ))}
        </>
    )
}

export default Beverages
