import React  from "react";
import { categories } from "../../helper/data";
import Item from "../ıtem/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <h5 className="language-title">Languages</h5>
      <div className="cards-container">
          {categories.map((ctgEl,index) =>{

              return <Item card={ctgEl} key={index}/>
          })
        }

        
      </div>
    </div>
  );
};
export default Card;
