import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main'

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Alvaro Centeno",
  //     headerLinks: [
  //       { title: 'Home', path: '/' },
  //       { title: 'About', path: '/about' },
  //       { title: 'Contact', path: '/contact' }
  //     ],
  //     home: {
  //       title: 'Dive into the World of Coding',
  //       subTitle: 'A peak into my first projects ',
  //       text: '(check them out)'
  //     },
  //     about: {
  //       title: 'About Me',
  //     },
  //     contact: {
  //       title: 'Conact Me',
  //     }
  //   }
  // }

  render() {
    return (

      <Router>
        <Main />



      </Router>

      // <h1>hello</h1>

    );

  }



}

export default App;
