import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">About us</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
          Hey there, I am Charu Pawar. Welcome to art - my journey from imagination to reality....
          Me not having a subject matter because I believe an artist should be able to instant anything. So I work on all areas - 
          From abstract to realistic
          Materialistic to sculpturistic
          Genuinely,, being good at bringing out the originality of the matter.....
          Art doesn't mean to just draw or be creative....it's the ability to make something look better than it should be....
           

          </p>
          <Button className="btn hireme-btn">
            {/* <NavLink to="/contact"> contact  </NavLink> */}
            <a href="https://wa.me/9479942704">Contact</a>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
    border-radius:8px;
    
    // transition: all 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.helper};
     //border: 1px solid ${({ theme }) => theme.colors.white};
     //color: ${({ theme }) => theme.colors.btn};
     transform: scale(0.9);
  }
}
}
}
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 5.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 90%;
    max-height:300vh;
     border-radius:20px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;