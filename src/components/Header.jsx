import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/navbarlogo.jpeg"></img>
      </NavLink>

      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`

//overflow:hidden;
//position:fixed;
//top:0;
//width:100%;
//display:block;
  padding: 0 4.8rem;
  
  height: 10rem;
    background-color: ${({ theme }) => theme.colors.helper};
   //background-color:#86B3D1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // .h2 {
  //   // height: auto;
  //   max-width: 60%;
  //   text-align:center;
  
  }
  #icon{
    width:30px;
    
  }
  img{
    width:150px;
    height:82px;
  }
  :root{
    --primary-color:blue;
  }
`;

export default Header;
