import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function LandingPage() {
  AOS.init();

  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row>
          <div className={styles.divIntro}>
            <div className={styles.divText}>
              <div className={styles.crop}>
                <img className={styles.logo} src="https://i.imgur.com/zicxVnp.jpg" alt="office" />
              </div>
              <div className={styles.textonimage}>
                <h1>CO@WORK</h1>
                <p>A place to work, to cowork!</p>
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.buttonContainer}>
                <Link to="/quote">
                  <Button className={styles.sendButton}>Request Quote</Button>
                </Link>
                <Link to="/bookingvisit">
                  <Button className={styles.sendButton}>Book Visit</Button>
                </Link>
              </div>

              <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.imageswrapper}>
                <div className={styles.information}>
                  <div className={styles.informationimg} style={{ backgroundImage: `url(https://i.imgur.com/EXy2HpE.jpg)` }}></div>
                  <div className={styles.informationtxt}>
                    <div>
                      <h2>Shared Office Space</h2>
                      <p>Shared office space provides a flexible cost and seating configuration, giving you mobility in your company's growth and location.<br />
                        You can enquire about availability and rates, schedule a tour, and reserve your space directly.
                      </p>
                      <ul>
                        <li>Maximum comfort for a productive day.</li>
                        <li>Work in an open or shared space!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.imageswrapper}>
                <div className={styles.information}>
                  <div className={styles.informationtxt}>
                    <div>
                      <h2>Private Office Space</h2>
                      <p>The beauty of a private office is that it's, well… private. It's also customizable, fully enclosed, and comes with a lock and key, so that no one can enter your space without an invitation. Private offices are great for established companies as well as individuals, making them excellent for enhancing teamwork or getting your most important work done in peace and quiet. If you're looking for an oasis of privacy amidst an active community, a private office in a coworking space may be just the ticket.
                      </p>
                      <ul>
                        <li>Maximum comfort for a productive day.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.informationimg} style={{ backgroundImage: `url(https://i.imgur.com/FbaGSEo.png)` }}></div>
                </div>
              </div>

              <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.imageswrapper}>
                <div className={styles.information}>
                  <div className={styles.informationimg} style={{ backgroundImage: `url(https://i.imgur.com/kYwk0iB.jpg)` }}></div>
                  <div className={styles.informationtxt}>
                    <div>
                      <h2>Canteen</h2>
                      <p>Our canteen was designed to make you feel at home. Finely renovated for you to eat and rest with the best comfort and quality possible, providing you with a feeling of freedom and peace.
                      </p>
                      <ul>
                        <li>Enjoy a meal with your coworkers and friends.</li>
                        <li>Use our free Wi-Fi whenever you want!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.imageswrapper}>
                <div className={styles.information}>
                  <div className={styles.informationtxt}>
                    <div>
                      <h2>Gym</h2>
                      <p>Work can be stressful at times. It harms not only the health of the employee but also employee satisfaction.<br />
                        By implementing a gym in the office, we can help employees release this workplace stress.
                      </p>
                    </div>
                  </div>
                  <div className={styles.informationimg} style={{ backgroundImage: `url(https://i.imgur.com/xh4l7Ah.jpg)` }}></div>
                </div>
              </div>

              <div data-aos="zoom-in" className={styles.buttonContainer}>
                <Link to="/quote">
                  <Button className={styles.sendButton}>Request Quote</Button>
                </Link>
                <Link to="/bookingvisit">
                  <Button className={styles.sendButton}>Book Visit</Button>
                </Link>
              </div>
              <div data-aos="fade-up" className={styles.textWrapper2}>
                <div className={styles.bottomfaq}>
                  <h2>FAQ</h2>

                  <h3>What is coworking?</h3>
                  <p>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures.</p>

                  <br />
                  <h3>What is included?</h3>
                  <p>We have free Wi-Fi, cleaning services, free tea and coffee and use of the communal canteen, we even have a gym!</p>

                  <br />
                  <h3>If I want to change my desk, can I?</h3>
                  <p>As your business changes, you may also want change your place too. We always have a new desk ready for you.</p>

                  <br />
                  <h3>CO@WORK is ideal for :</h3>
                  <ul>
                    <li>Small business</li>
                    <li>Big business</li>
                    <li>Freelancers</li>
                    <li>Designers</li>
                    <li>Programmers</li>
                    <li>All the types of jobs that benefits from flexibility</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;

