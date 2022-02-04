import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function AboutUs() {
  AOS.init();

  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row>
          <div className={styles.mainWrapper}>
            <div className={styles.aboutustext}>


              <div className={styles.aboutimgdiv}>
                <div className={styles.aboutimgh1}><h1>About Us</h1></div>
                <img className={styles.aboutimg} src="https://www.way2webworld.com/images/aboutbanner.jpg" alt="office" />
              </div>

              <div className={styles.text}>
                <div className={styles.mainText}>
                  <h1>Accelerating Your Success, Together</h1>
                  <p>Building better business. Designing impactful solutions. (re)imagining the future. This is what our community of impact-driven entrepreneurs, creators, innovators and intrapreneurs does; taking action - today - to create a better tomorrow for people and planet.</p>
                </div>
                <div className={styles.secundaryText}>
                  <h1>Building better business</h1>
                  <p>We believe the secret to success lies in a more interactive work environment,  flexible and dynamic. We create work rooms, meeting rooms adaptable to each individual that passes through them, guaranteeing all the conditions for those who are working there, to focus only in the most important, results. The key is to provide a pleasant experience so that anyone who passes by can say that they feel at home.</p>
                </div>

              </div>

            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;

