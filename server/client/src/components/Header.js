import PropTypes from 'prop-types'
import Button from './Button'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Randomize Button will randomly change the current beverage shown

const Header = ( { title } ) => {

    // generate random drink on load
    useEffect(() => {
        console.log("fetch me")
        axios.get('http://localhost:4000/random')
            .then(res => console.log(res.data))
        // fetch('http://localhost:4000/random')
        //     .then(res => console.log(res))
        
    }, [])

    const onClick = () => {
        console.log("tryin to fetch")
        fetch('/random')
            .then(response => console.log(response.json()))
        // fetch('localhost:3000/random')
        //     .then(response => console.log(response))
            // .catch(error => console.log(error))
            // .then(data => console.log(data));
            // .then(response => response.json(response.data))
            // .then(data => console.log('worked'));
            
        // this works from straight up fetching, now how to fetch from my server?
        // fetch(API_URL)
        //        .then(response => response.json(response.data))
        //        .then(data => console.log(data));
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

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default Header
