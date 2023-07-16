import './App.css';
import Header from './Header';
import Home from './Home.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login.js';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
//import Payment from './Payment.js';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=> {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ",authUser);

      if(authUser) {
        //the user just logged in /the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        }) 
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
        
      }
    })
  }, [])

  return (<Router>
    <div className="app">
    
      <Routes>
        <Route path='/orders' element={
        <>
        <Orders/>
        </>
         }
        />
        <Route path='/login' element={
          <>
          <Login/>
          </>
        }
        />
        <Route path='/checkout' element={
        <>
        <Header />
        <Checkout/>
        </>
         }
        />
        <Route path='/payment' element={
        <>
        <Header />
        <Payment/>
        </>
         }
        />
       
        <Route  path='/' element={<>
          <Header />
          <Home />
        </>
        } />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
