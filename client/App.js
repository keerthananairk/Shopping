
import './App.css';
import Home from "./Home"
import Login from './Login'
import Header from './Header'
import Store from './Store'
import Checkout from './Checkout'
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';


const promise=loadStripe(
  "pk_test_51JYUMGSAtdoocnYsFowptmmJAJOVmDUAeTaoLMHgFxos5WPNJxxIhbsDyqXoldYAcIsJq1NTkESA6UoWJ1AV184B00Hb6Wusv7"
)

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Switch>
        <Route path="/home">
    
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
         <Elements stripe={promise}>   
        <Payment/>
        </Elements>
        </Route>
      </Switch>
        
      
    </div>
    </Router>
    
    
  );
}

export default App;