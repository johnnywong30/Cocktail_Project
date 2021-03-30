# Cocktail_Project
MakeItHappen Assessment using React, Redux, and Express

By Johnny Wong

## Overview
This project aims to explore the basics of React, Redux, and Express to create a small application. React provides a scalable front-end design to display each component that make up the application. Redux helps manage the state of components through the use of actions, reducers, and the store. This project used Redux-Toolkit. The Express server retrieves data from the [Cocktail DB API](https://www.thecocktaildb.com/api.php) and sends it to the client to be displayed. 

## To Run
```bash
$ cd server
$ npm install
$ npm run client-install
$ npm run dev
```
The application can be found at [http://localhost:3000/](http://localhost:3000/) after it is finished loading.

## Details
After landing on the homepage, the user is advised to order some drinks. When clicking the order button, a random drink is retrieved from the [Cocktail DB API](https://www.thecocktaildb.com/api.php) and displayed on the page as a Drink. The user can double click on the Drink card to see more information about the Drink. The user can click the small margarita icon to "drink" it, playing a [sound effect](https://youtu.be/XxoOkmvMjmo) and removes it from the list. After the user orders at least 3 drinks, a surprise button appears. The surprise button retrieves a list of random drink from the [Cocktail DB API](https://www.thecocktaildb.com/api.php) and displays all of them, granting the user an assortment of drinks for free.

## Ideas to Polish the Project
- Use React Bootstrap for better styling
- Add a search feature so the user can query what other drinks are available
- Add the images of each drink displayed
- Add a bar tab feature to keep an arbitrary count of how much a user owes the bar
- Use MongoDB to store how much a user owes the bar

There are probably more ideas but there just is not enough time to think about them or implement these to begin with.

## To Do
- [x] Create React App
- [x] Use Axios to fetch Cocktail data
- [x] Create a "Model" representation of the data
- [x] Add drinking sound
- [x] Store the retrieved data inside a Redux Store and pass to the front end to be displayed
- [x] Styling
- [x] Set up a backend expressJS server that accepts from certain routes that will call the api and return the results which will then be returned to the caller and displayed to the front end. 
- [x] Write documentation