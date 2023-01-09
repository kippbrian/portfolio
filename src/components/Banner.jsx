import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Mobile Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(100 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Hi, Welcome to my portfolio</span>
              <h1>
                {"I am Brian, "} <span className="wrap">{text}</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                facere quam eligendi magni explicabo, sed perspiciatis
                voluptatum itaque excepturi voluptatem fuga blanditiis
                accusamus! Quia fugit delectus perferendis necessitatibus ad
                obcaecati?
              </p>
              <button onClick={() => console.log("lets connect")}>
                Connect With Me
                <ArrowRightCircle />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
