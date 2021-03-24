import { BiDrink } from 'react-icons/bi' 

// Eventually have to turn drink to be just a Drink Object to fit the model requirement
const Drink = ({drink, onDelete, onToggle}) => {
    return (
        <div className='drink' onDoubleClick={() => onToggle(drink.id)}>
            <h3>{drink.text} 
                <BiDrink style={drinkStyle}
                         onClick={() => onDelete(drink.id)}
                /> 
            </h3>
            <p>{drink.day}</p>
            {   drink.showInfo ? 
                <p>Put info here</p>
                :
                <p>Double click for more info!</p>
            }
        </div>
    )
}

// CSS in JS
const drinkStyle = {
    color:'steelblue', 
    cursor:'pointer',
}

export default Drink
