import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
     padding: 9rem 0 5rem 0;
    .container {
       margin-top: 6rem;
      text-align: center;
   }
      .contact-form {
        max-width: 50rem;
        margin: auto;
      
      
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
         
         
          input[type="submit"] {
            cursor: pointer;
            border-radius:10px;
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

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      <h2 className="font-size">The Ultimate Guide to Master  Artwork</h2>

      

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mrgdnwlo"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="Username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="phoneNumber"
              name="PhoneNumber"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />
             <input
              type="services"
              name="Services"
              placeholder="Services"
              autoComplete="off"
              required
            />
            <input
              type="State"
              name="State"
              placeholder="State Name"
              autoComplete="off"
              required
            />
             <input
              type="District"
              name="District"
              placeholder="District Name"
              autoComplete="off"
              required
            />

            <textarea
              name="About making our commission artwork"
              placeholder="About making our commission artwork"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;