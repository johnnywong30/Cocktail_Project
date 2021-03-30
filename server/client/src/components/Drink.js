import { toggleInfo, deleteDrink } from '../redux/drinks'; 
import { useDispatch } from 'react-redux';

import useSound from 'use-sound';
// Sourced from: https://youtu.be/XxoOkmvMjmo
import drinkSfx from '../sounds/drink.mp3';

 
import Icon from './Icon'

const Drink = ({drink}) => {
    
    const [drinkSound] = useSound( 
        drinkSfx,
        {volume: 0.25}
    )

    const onClick = () => {
        dispatch(deleteDrink(drink.id))
        drinkSound()
    }

    const dispatch = useDispatch()
    return (
        <div className='drink' onDoubleClick={() => dispatch(toggleInfo(drink.id))}>
            <h3>{drink.name} 
                <Icon onClick={ () => onClick()}/>   
            </h3>
            {   drink.showInfo ? 
                <>
                    <p><i>Category</i> : {drink.category}</p>
                    <p><i>Alcoholic</i> : {drink.alcoholic}</p>
                    <br></br>
                    <p>Double click to minimize info.</p>
                </>
                :
                <p>Double click for more info.</p>
            }
        </div>
    )
}

export default Drink
