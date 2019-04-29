import React from 'react';
import AppNavBar from './components/AppNavBar';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap';
import BookDisplay from './components/BookDisplay';
import SavedBooks from './components/SavedBooks';
import DisplaySearch from './components/DisplaySearch';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <AppNavBar />

          <Container>

          <Route path="/saved" component={SavedBooks}/>

          <Route exact path="/" 
          component={BookDisplay}      
          />

          <Route exact path='/'
          component={DisplaySearch}
          />

          </Container>
        </Router>
        
      </div>
    </Provider>
  );
}

export default App;
