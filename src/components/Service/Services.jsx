import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Expertise</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Web Development"}
            disc={`As a web developer, I have a strong foundation in HTML, CSS, and JavaScript, as well as experience working with front-end frameworks such as React and Angular. I specialize in creating responsive and dynamic web pages that provide engaging user experiences `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Database Management and Administration"}
            disc={`I have extensive experience in designing, developing, and maintaining databases that support a wide range of applications. My expertise includes working with both relational and non-relational databases, including SQL, PostgreSQL, and MongoDB`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Backend Development"}
            disc={`As a backend developer, I have extensive experience working with REST APIs, Node.js, Express, and GraphQL to build scalable and robust web applications. My expertise includes designing and implementing APIs, optimizing server-side performance, and ensuring the security and reliability of backend systems.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
