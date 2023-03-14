import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import Nav from './components/Navigation/Nav';
import Todolist from './components/Todolist/Todolist';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/products/Products';
import 'react-image-lightbox/style.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
          <Route path="/Todolist">
            <Todolist/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/" exact={true}>
            <div className="App">
              <header className="App-header content-left">
                <Home />
              </header>
              <div className='content-right'>
                <AddNewProduct/>
                <hr/>
              </div>           
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
