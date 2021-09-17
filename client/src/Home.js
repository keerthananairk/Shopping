import React from 'react'


import  'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap'
import './Home.css'

function Home() {
    return (
        <div>
            
            
         
            <div style={{backgroundImage:'url("https://img.freepik.com/free-photo/happy-beautiful-young-woman-blue-dress-with-his-hand-holding-shopping-bags-finger-pointing-light-blue-with-copy-space_74952-576.jpg?size=626&ext=jpg")',height:"700px",backgroundSize:"cover",backgroundPosition:'center',backgroundRepeat:"no-repeat"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="big-text">The Dress Store</h1>
                            <p className="subline">Casually unique style..</p>
                         <a href="/store"><Button className="btn-dark">Start Shopping</Button></a>
                            
                        </div>
                    </div>
                </div>
               
            
            </div>
         
            
        </div>
    )
}

export default Home