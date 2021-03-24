import PropTypes from 'prop-types'
import Button from './Button'

// Randomize Button will randomly change the current beverage shown

const Header = ( { title } ) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Randomize' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Cocktail Project'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black',
// }


export default Header
