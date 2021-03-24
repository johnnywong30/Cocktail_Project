import Drink from './Drink'

const Beverages = ({drinks, onDelete, onToggle}) => {
    return (
        <>
            {drinks.map( (drink) => (
                <Drink key={drink.id} 
                       drink={drink} 
                       onDelete={onDelete}
                       onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Beverages
