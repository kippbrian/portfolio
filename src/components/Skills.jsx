import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skill1 from "../assets/img/meter1.svg";
import skill2 from "../assets/img/meter2.svg";
import skill3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Quickly understands requirements for new systems and creates
                  robust code. Familiar with testing, debugging, and correcting
                  problems found in existing software systems.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={skill1} alt="Iamge" />
                    <h5>Web Development</h5>
                  </div>

                  <div className="item">
                    <img src={skill2} alt="Iamge" />
                    <h5>Brand Marketing</h5>
                  </div>

                  <div className="item">
                    <img src={skill3} alt="Iamge" />
                    <h5>UI/UX Design</h5>
                  </div>

                  <div className="item">
                    <img src={skill1} alt="Iamge" />
                    <h5>Mobile Development</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="ColoSharp"
        />
      </section>
    </>
  );
};

export default Skills;
