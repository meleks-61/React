import {Switch,BrowserRouter,Route} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../page/home/Home"
import About from "../page/about/About"
import Details from "../pages/details/Details";



function AppRouter(){
    return(

        <BrowserRouter>
         <Navbar/>
        <Switch>
       
        <Route path ="/"exact component= {Home}></Route>       
        <Route path ="/about"exact component= {About}></Route>   
        <Route path="/details" exact component={Details} />    
        
        </Switch>
        
        
        
        </BrowserRouter>
    )
}
export default AppRouter;