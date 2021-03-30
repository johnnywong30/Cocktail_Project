import { BiDrink } from 'react-icons/bi'; 

const Icon = ({onClick}) => {
    return (
        <BiDrink style = {drinkStyle}
                 onClick = {onClick}
        />
    )
}

// CSS in JS
const drinkStyle = {
    color:'rgba(246, 77, 47, 0.733)', 
    cursor:'pointer',
}

export default Icon
