import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import linkedin from "../assets/img/linkedin2.png";
import github from "../assets/img/github-mark/github-mark/github-mark-white.svg";
import instagram from "../assets/img/insta.png";
import logo1 from '../assets/img/yb3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yashbodkhe25" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/YashBodkhe" target="blank"><img src={github} alt="Icon" /></a>
              {/* <a href=""><img src={navIcon3} alt="Icon" /></a>   */}
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
