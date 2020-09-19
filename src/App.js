import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jumbo from './components/Jumbo';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Main from './components/pages/Main'

class App extends React.Component {

  render() {
    return (
      <>
        <Main />
        {/* <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
        {/* <Footer /> */}
        {/* </BrowserRouter> */}
      </>



    );

  }



}

export default App;
