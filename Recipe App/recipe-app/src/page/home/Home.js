import React,{useState,useEffect} from 'react'
import Header from '../../components/header/Header';
import axios from"axios"
import RecipeCardComp from './RecipeCardComp';
import homeSvg from '../../assets/home.svg';
import { MainContainer, HomeImg, ImgDiv } from './HomeStyle';



const mealTypes=["Breakfast", "Lucnh", "Dinner", "Snack", "Teatime"];
     const APP_ID =" "
     const APP_KEY =""

 function Home() {
     const[query,setQuery]=useState("apple");
     const[recipes,setRecipes] = useState();
     const[meal,setMeal]= useState(mealTypes[0].toLowerCase());
     const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

     const getdata = async()=>{
         if (query !== "") {
             const result = await axios.get(url);
            //  console.log("result: ",result)
            if (result.status===200){
                // console.log(result.data.hits)
                setRecipes(result.data.hits)
            }
            else{
                alert("Please fill the form")

            }

         
     };

    //  useEffect(()=>{
    //      getdata();
    //  },[])

     
  return (
    <div>
        <Header
        setQuery={setQuery}
        query={query}
        getData ={getData}
        mealTypes={mealTypes}
        setMeal ={setMeal}
        meal={meal}
        />
        {recipes?(
            <MainContainer>
                {recipes?.map((recipe,i)=>(
                    <RecipeCardComp key={i} recipe={recipe?.recipe}/>
                ))}
                
            </MainContainer>
        )
        :null
    }

      
    </div>
  )
}
export default Home;
