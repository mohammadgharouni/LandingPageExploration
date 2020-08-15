import React from 'react';
import './App.css';
import CardSection from './containers/cardSection/cardSection';
import About from './containers/about/about';
import Explain from './containers/explain/explain';
import News from './containers/news/news';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
const App=()=>{

    return (
        <div className="App">

            <section className="header"><Header/></section>
            <section className="explain"><Explain/></section>
            <section className="cardSection"><CardSection/></section>
            <section className="about"><About/></section>
            <section className="news"><News/></section>
            <section className="footer"><Footer/></section>

        </div>
    );
}

export default App;
