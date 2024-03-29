import React from 'react';
import './styles/App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MyRouter from './Components/MyRouter';

const App = () => {

    return (
      <>
        <Header />
        <MyRouter />
        <Footer />
      </>
    );
};

export default App;
