import React from "react";
import "./card.css";
import { categories } from "../../data";
import Item from "../Item/Item"



const Card = () => {
    return(
        <>

        <div className = "cards-area-container">
            
            
            <h5 className="language-title"> Languages</h5>


            
            <div className="cards-container">

                {categories.map((catElement,index) => {

                    return <Item card={catElement} key={index}/> 
                }
                )}
            </div>




        </div>
        </>
    )
}
export default Card;