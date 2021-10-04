import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"


const Container=styled.nav`
background-color:blueviolet;`;
const Ul=styled.ul`
display:flex;
justify-content: space-between;
`;
const Li=styled.li`
list-style-type:none;`;
const A=styled.a`
text-decoration:none;
color: white;
`;


const Nav = () => {
  return (
    <Container>
        <Ul>
            <Li><Link to="/">Home</Link></Li>  
            <Li><A href="/About">About</A></Li>
            <Li><A href="/Contact">Contact</A></Li>
            <Li><A href="/details/abc">Details</A></Li>
        
        </Ul>
       
      
    </Container>
  )
}

export default Nav
