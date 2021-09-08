import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'
import { Button,FormContainer,FoodInput,Select } from './HeaderStyle'

const Form = ({setQuery,query,getData, mealTypes, setMeal, meal}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        getData();
    }

    const handleChange = (e)=>{
        setMeal(e.target.value);
    }
  return (

    <FormContainer onSubmit={handleSubmit}>

        <FoodInput type="text" placeholder="Search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <Button>Search</Button>
        <Select name="mealTypes" id="mealTypes" onChange={handleChange}></Select>
        {mealTypes?.map ((item,i)=>(

<opton value ={value={item.toLowerCase}} key={i}>
    {item}
    </option>
        ))}

        






    </FormContainer>
  )
    
}

export default Form
