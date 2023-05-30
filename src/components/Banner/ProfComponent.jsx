import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import ProfilePicture from "./images/ProfilePicture1.png";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Akhilesh Ramesh</h1>
          <h3>Full Stack developer</h3>
          <p>
          I am a passionate software engineer with a focus on web development. Currently, I am pursuing my master's degree in computer science at Indiana University, Bloomington, where I have gained expertise in ReactJS, AngularJS, and NodeJS.<br/><br/>

As a software developer at Indiana University's Cyberinfrastructure for Network Science Center, I have had the opportunity to work on a variety of web applications, where I am constantly learning and exploring new technologies to enhance my knowledge and skills. I have a strong desire to contribute to organizational objectives and am actively seeking career opportunities in software development.<br/><br/>

My attention to detail and problem-solving skills enable me to deliver high-quality outputs that meet customer needs and expectations. I am committed to adhering to industry standards and maintaining a codebase that is clean and efficient.

I am excited to take on new challenges and opportunities to advance my learning curve and make a meaningful impact in the field of web development.
          </p>
          <button >Let's Connect</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/akhileshgowda7">
                <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/akhileshramesh/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={ProfilePicture}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #FF10F0;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #FF10F0;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
img {
  max-width: 100%;
  filter: drop-shadow(0px 30px 30px #FF10F0);
  transition: transform 200ms ease-in-out;
}

@media (max-width: 790px) {
  img {
    max-width: 80%;
  }
}

@media (max-width: 660px) {
  img {
    max-width: 70%;
  }
}

@media (max-width: 640px) {
  img {
    width: 100%;
    max-width: 100%;
  }
}


  :hover img {
    transform: translateY(-10px);
  }
`;
