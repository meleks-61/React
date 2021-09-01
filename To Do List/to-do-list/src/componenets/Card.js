import {useState,useEffect} from 'react';
import axios from "axios";
import Email from "../svg/Email";
import Location from "../svg/Location";
import Phone from "../svg/Phone";
import "./Card.css";






const Card = () => {
    const[user, setUser] = useState(false) //boş bir array atıyor.

    const getRandomUser = ()=>{
        axios.get("https://randomuser.me/api/").then((response) => {
            
            // console.log(response.data.results);
            // console.log(response.data.results[0]);
            
            setUser(response.data.results[0])
        })

    }







useEffect(()=>{
    getRandomUser()
},[])

  return (
    <div className="container">
        <div className="card">
            <div className="image-title-box">
                <img  className="img" src={user.picture?.large} alt=""/>
                <h6 className="info full-name">
                    {user.name?.title} {user.name?.first} {user.name?.last}
                </h6>
            </div>
            <div className="user-phone">
                <Phone className="imge"/>
                <h6 className="info">{user.phone}</h6>
            </div>
            <div className="user-email">
                <Email className="imge"/>
                <h6 className="info">{user.email}</h6>
            </div>
            <div className="user-location">
                <Location className="imge"/>
                <h6 className="info">{user?.location?.city}/{user?.location?.country}</h6>
            </div>
            <div className="user-register">
                
                <h6 className="info">Age:{user.dob?.age}</h6>
                <h6 className="info">Register Date:{user.registered?.date.slice(0,10)}</h6>
            </div>
        </div>
        <div >
            <button className="btn btn-success" onClick={getRandomUser}>Random Use</button>
        </div>
      
    </div>
  )
}

export default Card;
