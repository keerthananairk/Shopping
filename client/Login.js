import React,{useState, useEffect}from 'react'
import './Login.css'

import Axios from 'axios'
import{useSpring, animated} from 'react-spring';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
function Login() {

    
    const [signupFormStatus,setSignupFormStatus]=useState(false);
    const signinprops=useSpring({
        left:signupFormStatus ? -500:0 
        

    })
    const signupprops=useSpring({
        left:signupFormStatus ? 0:500
       

    })
    const signinBtnprops=useSpring({borderBottom:signupFormStatus ? 'solid 0px transparent':'solid 2px  #1059FF'})
    const signupBtnprops=useSpring({borderBottom:signupFormStatus ? 'solid 2px #1059FF':'solid 0px  transparent'})



     function signupClicked(){setSignupFormStatus(true)}
     function signinClicked(){setSignupFormStatus(false)}


    return (
    
           
        <div  style={{backgroundImage:'url("https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',height:"700px",backgroundSize:"cover",backgroundPosition:'center',backgroundRepeat:"no-repeat"}}>
        <div className="container">
        <div className="login-register-wrapper">
            <div className="nav-buttons">
                <animated.button onClick={signinClicked}id="signinBtn"  style={signinBtnprops}>Sign In</animated.button>
                <animated.button onClick={signupClicked}id="signupBtn" style={signupBtnprops}>Sign Up</animated.button>
                <div className="form-group"> 
                <animated.form action='' id='signinform'style={signinprops}><SigninForm/></animated.form>
                <animated.form action='' id='signupform'style={signupprops}><SignupForm/></animated.form>
                    <animated.div className="forgot-panel"style={signinprops} ><a href="/forgotpassword">Forgot Password?</a>
 
                    </animated.div>
                </div>
            </div>
            </div>
        </div>
        </div>
       
        
    );
}
function SigninForm(){
    const[username, setUsername]=useState('');
    const[password,setPassword]=useState('');
    
    const [loginStatus,setLoginStatus]=useState(false)

    Axios.defaults.withCredentials=true
    const login=()=>{
        Axios.post('http://localhost:7003/login', {username:username, password:password,
    }).then((response)=>{
        if(!response.data.auth){
            setLoginStatus(false)
        } else{
           setLoginStatus(true)
        }
    
    })
    }

    useEffect(()=>{
      Axios.get("http://localhost:7003/login").then((response)=>{
          if(response.data.loggedIn === true){
            <h1>Succesfully logged</h1>
          }
          console.log(response)
      })
    },[])
 
    return(
    <React.Fragment>
    <label for="username">Username</label>
    <input type="text" onChange={(e)=>{setUsername(e.target.value);}}/>
    <label for="password">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value);}}/>
    <Button onClick={login}>Login</Button>
    
    {loginStatus &&(
        <Link to="/payment"><Button>Continue to checkout</Button></Link>
    )}
    </React.Fragment>

    )
}

function SignupForm(){
    const[usernameReg, setUsernameReg]=useState('');
    const[passwordReg,setPasswordReg]=useState('');

    const register=()=>{
        Axios.post('http://localhost:7003/register', {username:usernameReg, password:passwordReg,
    }).then((response)=>{
        console.log(response)
    })
    }
    
     return(
        <React.Fragment>
            <label for="username">Username</label>
    <input type="text" onChange={(e)=>{setUsernameReg(e.target.value);}}/>
    <label for="email">Email</label>
    <input type="text" id='email'/>
    <label for="password">Password</label>
    <input type="text"  onChange={(e)=>{setPasswordReg(e.target.value);}}/>
    <label for="confirmpassword">confirm password</label>
    <input type="text" id='confirmpassword'/>
    <Button onClick={register}>Submit</Button>
    <input type="submit" value="submit" className='submit'/>
       </React.Fragment>
    )
}

export default Login 
