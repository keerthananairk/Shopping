

import Login from './Login'
import Checkout from './CheckoutPage'
import Store from './Store'

import Payment from './Payment';
import Seller from './Seller'
import Admin from './Admin'

import Navbar from './Navbar'
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Switch,Link,Route } from 'react-router-dom';
import React from 'react'


const Home=()=>(
<div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/happy-beautiful-young-woman-blue-dress-with-his-hand-holding-shopping-bags-finger-pointing-light-blue-with-copy-space_74952-576.jpg?size=626&ext=jpg")', height: "700px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="big-text">The Dress Store</h1>
                    <p className="subline">Casually unique style..</p>
                    <Link to="/store"><Button className="btn-dark">Start Shopping</Button></Link>

                </div>
            </div>
        </div>
       
    </div>
)



class App extends React.Component{

  

  render(){
    return(
      
      <Router>
        <Navbar/>
       
        <Switch>
          <Route path="/store" component={Store}/>
          <Route path="/login" component={Login}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/sellerpage" component={Seller}/>
          <Route path="/admin" component={Admin}/>
          
        
        <Route path="/" component={Home}/>
        
        </Switch>
      </Router>
    );
  }
}
export default App;