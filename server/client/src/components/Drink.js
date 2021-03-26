import { BiDrink } from 'react-icons/bi' 

const Drink = ({drink, onDelete, onToggle}) => {
    return (
        <div className='drink' onDoubleClick={() => onToggle(drink.id)}>
            <h3>{drink.name} 
                <BiDrink style={drinkStyle}
                         onClick={() => onDelete(drink.id)}
                /> 
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

// CSS in JS
const drinkStyle = {
    color:'steelblue', 
    cursor:'pointer',
}

export default Drink
