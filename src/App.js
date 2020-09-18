import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Coxbazar from './components/Coxbazar/Coxbazar';
import Form from './components/Form/Form';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <div className="main" >

    
          <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
  
      <Router>
      <Header></Header>
     
        <Switch>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/form/:name">
            <Form></Form>
          </Route>
          <PrivateRoute path="/coxbazar/:name">
           <Coxbazar></Coxbazar>
         </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
          </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
 
      </UserContext.Provider>
    </div>
  );
}

export default App;
