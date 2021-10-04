// import {Switch,BrowserRouter,Route} from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
// import Home from "../page/home/Home"
// import About from "../page/about/About"
// import Details from "../pages/details/Details";
// import Login from "..pages/login/login"



// function AppRouter(){
//     return(

//         <BrowserRouter>
//          <Navbar/>
//         <Switch>
       
//         <Route path ="/"exact component= {Home}></Route>       
//         <Route path ="/about"exact component= {About}></Route>   
//         <Route path="/details" exact component={Details} />    
        
//         </Switch>
        
        
        
//         </BrowserRouter>
//     )
// }
// export default AppRouter;

import React, { useState } from "react";  
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Login from "../pages/login/login";
import PrivateRouter from './PrivateRouter';   
function AppRouter() {
  const [isAuth, setIsAuth] = useState(false)
  const AuthContainer = () => (   
    <div>
      <Navbar />
      <PrivateRouter isAuth={isAuth} exact path="/" component={Home} />
      <PrivateRouter isAuth={isAuth} path="/about" component={About} />
      <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
    </div>
  );
  return (
    <BrowserRouter>
      <Switch>
      <Route         
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} />}
        />
         <Route component={AuthContainer} />   
      </Switch>
    </BrowserRouter>
  );
}
export default AppRouter;
{/* <Route path="/" exact component={Home} />
<Route path="/about" exact component={About} />
<Route path="/details" exact component={Details} />
<Route path="/login" exact component={Login} /> */}