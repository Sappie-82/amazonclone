import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{basket,user},dispatch]=useStateValue();

  const handleAuthentication = ()  => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src='http://rb.gy/q0zobq' alt='' />
      </Link>
        
        <div className='header_search' >
            <input className='header_searchInput'></input>
            <SearchIcon className='header_searchicon'/>
        </div>
        <div className='header_nav'>
        <Link to={!user &&'/login'}>
            <div onClick={handleAuthentication} className='header_bar'>
              
              <span className='header_barlineone'>hello ,{user?.email}</span>
              <span className='header_barlinetwo'>{user ? 
              'Sign Out' : 'Sign In'}</span>
              
            </div>
            </Link>
            <Link to={'/orders'}>
            <div className='header_bar'>
              <span className='header_barlineone'>Return</span>
              <span className='header_barlinetwo'>& Orders</span>
            </div>
            </Link>
            <div className='header_bar'>
                <span className='header_barlineone'>your</span>
                <span className='header_barlinetwo'>Prime</span>
            </div>
        </div>
        <div className='header_optionbasket'>
          <Link to='/checkout'><ShoppingCartIcon/></Link>
            
            <span className='header_optionbasketlinetwo'>{basket?.length}</span>
        </div>
    </div>
  )
}

export default Header