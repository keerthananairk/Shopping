
import './App.css';
import Home from "./Home"
import Login from './Login'
import Header from './Header'
import Store from './Store'
import Checkout from './Checkout'
import Payment from './Payment';
import Seller from './Seller'
import Admin from './Admin'
import Data from './ProductList';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Switch>
        <Route path="/">
    
          <Home/>
        </Route>
        <Route path="/Store">
        <Store/>
        </Route>
        <Route path="/checkout">
         <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
          </Route>
          <Route path="/payment">
         
        <Payment/>
         
        </Route>
        <Route path="/admin">
          <Admin/>
             </Route>
        <Route path="/sellerpage">
         <Seller/>          
        </Route>
        <Route path="/productlist">
          <Data/>
        </Route>
        
      </Switch>
        
      
    </div>
    </Router>
  );
}

export default App;