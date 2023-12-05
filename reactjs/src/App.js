import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// screens
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import BasketScreen from './screens/BasketScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <main className='main'>
          <div className='content'>
            <Route path='/item/:id' component={ItemScreen} />
            <Route path='/basket/:id?' component={BasketScreen} />
            <Route path='/' exact={true} component={HomeScreen} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
