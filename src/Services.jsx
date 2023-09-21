import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">SERVICES</h2>
      {/* <img src="./images/services6.jpg"></img>
      <h3>Painting</h3>
       <img src="./images/services2.jpg"></img> 
       <h3>Oil Painting</h3>
      <img src="./images/services3.jpg"></img> 
      <h3>Sculpture</h3>
      <img src="./images/services7.jpg"></img> 
      <h3>Calligraphy </h3>
      <img src="./images/services8.jpg"></img> 
      <h3>Art Classes</h3>
      <img src="./images/services1.jpg"></img>
      <h3>Wall Painting</h3>
       */}
       
      <div className="container grid grid-three-column">
      {/* <img src="./images/charuji.jpg"></img> */}
      

        {services.map((curElem) => {
              

          const { id, title, imgUrl, description, } = curElem;
          return (
            <div key={id} className="card">
                
              <figure>
              {/* <img src="./public/images/charuji.jpg"></img> */}

                <img src={imgUrl} alt={title} />
              </figure>
              

              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div> 
    </Wrapper>
  );
};

 const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  
   .container {
    max-width: 120rem;
}
    
   .card {
     border: 0.1rem solid rgb(170 170 170 / 40%);
     .card-data {
       padding: 0 2rem;
     }
    // h3 {
    //   margin: 2rem 0;
    //   font-weight: 300;
    //   font-size: 2.4rem;
    // }
    img{
    //width:950px;
   // margin-left:60px;
    //border-radius:8px;
    //max-width: 200%;
    //max-height:150px;
     //border-radius:20px;
   //  margin-top:20px;
    max-width:200%;
    margin-top:1.5rem;
    height:20rem;
    transition: all 0.2s linear;

     }

     h3{
       margin-left:95px;
      font-weight:400;
       font-size:2.4rem;
      
      }
     p{
      margin-left:100px;
     }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }
  figure {
     width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

 export default Services;