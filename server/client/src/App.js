import { useSelector } from 'react-redux';
import Header from './components/Header';
import Beverages from './components/Beverages';
import Footer from './components/Footer';

const App = () => {
    const { drinks } = useSelector(state => state.drinks)
    return (
        <>
            <div className='container'>
                <Header />
                { drinks.length > 0 ?
                    (<Beverages />)
                     : 
                    (<h3 className='ad'>No drinks left. You should order some more! </h3>)
                }
            </div>
            <Footer/>
        </>
  );
}

export default App;
