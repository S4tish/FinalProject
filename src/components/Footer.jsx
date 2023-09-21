import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube,FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
           
        </div>
      </section> 

      {/* footer section */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            {/* <img src="./images/navbarlogo.jpeg"></img> */}
            <h3>ARTISTRY CHARU</h3>
            <h3>"ART - A JOURNEY FROM IMAGINATION TO THE REALITY".</h3>
          </div>

          {/* 2nd column * */}
           <div className="footer-subscribe">
            <h3>SUBSCRIBES TO GET IMPORTANT UPDATES</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          
     
          {/* 3rs column  */}
          <div className="footer-social">
            <h3>JOIN OUR ARTWORK FAMILY</h3>
            <h3>IF YOU WOULD LIKE TO KEEP UP ON THE LATEST POST COME BY AND CONNECT WITH US ON THE FOLLOWING LINKS</h3>
            <div className="footer-social--icons">
              
              <div>
              <a
                  href="https://www.instagram.com/artistry_charu/"
                  target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@charupawar2412"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/9479942704"
                  target="_blank">
                  <FaWhatsapp className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://m.facebook.com/CharuPawar"
                  target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>GET IN TOUCH </h3>
            <h3><a href="tel:9479942704">9479942704</a></h3>
            <h3>EMAIL ID :  <a href="mailto:charupawar04@gmail.com"> charupawar04@gmail.com</a>.</h3>
            
            
            
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <h3>
              Copyright &copy; {new Date().getFullYear()} GeeCom India. All Rights Reserved 
            </h3>
            <div>
              <h3>PRIVACY POLICY</h3> 
              <h3>TERMS & CONDITIONS</h3>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    // background-color:#86B3D1;
     border-radius: 2rem;
    
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  };
  .contact-short-btn {
    justify-self: end;
    align-self: center;
    border-radius:2rem;
    &:hover {
       background-color: ${({ theme }) => theme.colors.white};
      // border: 1px solid ${({ theme }) => theme.colors.btn};
       color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
   
     //background-color: ${({ theme }) => theme.colors.grey};
     //background-color: rgb(102 116 204);
     //background-color:#86B3D1;
     background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }
    p {
      // color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
    }
    a{
      color:white;
      &:hover{
        color:blue;
      }
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      
      div {
        padding: 1rem;
        border-radius: 90%;
        border: 3px solid ${({ theme }) => theme.colors.white};
        &:hover{
          background-color: ${({ theme }) => theme.colors.helper};
          transform:scale(0.9);
        }
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.8rem;
          position: relative;
          cursor: pointer;
         
        }
      }
    }
    .footer-subscribe:{
      border-radius:8px;

    }
    .footer-about.img{
      width:90px;
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
  input[type="email"] {
    cursor: pointer;
    border-radius:8px;
    transition: all 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
}
}
}
input[type="submit"] {
  cursor: pointer;
  border-radius:8px;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.btn};
    transform: scale(0.9);
  }
}
}
}
}
`;


export default Footer;