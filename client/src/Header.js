import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom'
function Header() {
     
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="header">
            
           <a href="/store"><img className="header_logo" src="https://dcassetcdn.com/design_img/3836817/819057/24027770/13803yr9rrkt6vkb2yn9qryj7t_image.jpg" />/</a>
        
            <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>

        </div>
        <div className="header_nav">
            <div className="header_option">
              <span className="header_optionone">Hello</span>
              <a href="/login"><span className="header_optionTwo">Sign in</span></a>
            </div>
            <div className="header_option">

                <span className="header_optionone">Returns</span>
              <span className="header_optionTwo">&Orders</span>
                
            </div>
            <div>
              <a href="/admin"><span className="admin">Admin</span></a>
            </div>
            
            <Link to="/checkout"><button className="header_optionbasket">
             <ShoppingCartIcon/>
             <span className="header_optionTwo header_basketCount">{basket?.length}</span>
            </button>
            </Link>
  
        </div>
        </div>

    )
}

export default Header