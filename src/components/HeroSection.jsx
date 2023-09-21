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
          <p className="hero-top-data"></p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Hello! Welcome to Artistry Charu!<br></br>
            Really happy to see you here.<br></br>
            Thinking of taking a step towards a mentorship programme? It
            definitely seems a bit daunting at first.It is never easy to ask for
            someone counsel or guidance to be it for artwork or just in
            general.So at ArtistryCharu we are here to provide all the necessary
            counsel you might need for artwork.For any additional question, feel
            free to email us at
            <a href="mailto:charupawar04@gmail.com"> charupawar04@gmail.com</a>
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/services"> services </NavLink>
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
    background-color: ${({ theme }) => theme.colors.white};
    // border: 1px solid ${({ theme }) => theme.colors.white};
    // color: ${({ theme }) => theme.colors.btn};
    // transform: scale(0.96);
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
    font-size: 4.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  a{
    color:aqua;
    &:hover{
      color:black;
      cursor:pointer;
    }
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
