import React from 'react';
import AppNavBar from './components/AppNavBar';
import BooksList from './components/BooksList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap';
import BookModal from './components/BookModal';





function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />

        <Container>
          <BookModal />
          <BooksList />

        </Container>

        
      </div>
    </Provider>
  );
}

export default App;
