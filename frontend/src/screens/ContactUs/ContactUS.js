import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./ContactUS.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function ContactUS() {
  AOS.init();



  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row>
          <div className={styles.mainWrapper}>
            <div className={styles.aboutimgdiv}>
              <div className={styles.aboutimgh1}><h1>Contact Us</h1></div>
              <img className={styles.aboutimg} src="https://www.arvigbusiness.com/wp-content/uploads/2020/06/Woman-virtual-receptionist-answering-a-call-in-a-call-center.png" alt="office" />
            </div>

            <div className={styles.text}>

              <div className={styles.mainText}>

                <div className={styles.bothForms}>
                  <div className={styles.where}>
                    <h3>How to Find Us</h3>
                    <h5>Headquarters</h5>
                    <address>
                      <p >9999-999 MQ POMBAL 92.</p>
                      <dl>
                        <dt>Telephone</dt>
                        <dd><a href="callto:#">+351 219 999 999</a></dd>
                      </dl>
                      <dl>
                        <dt>E-mail</dt>
                        <dd><a href="mailto:#">demo@cowork.com</a></dd>
                      </dl>
                    </address>

                    <h5>Support Centre</h5>
                    <address>
                      <dl>
                        <dt>Telephone</dt>
                        <dd><a href="callto:#">+351 219 999 999</a></dd>
                      </dl>
                      <dl>
                        <dt>E-mail</dt>
                        <dd><a href="mailto:#">demo@cowork.com</a></dd>
                      </dl>
                    </address>
                  </div>

                  <div className={styles.touch} >
                    <h3>Get in Touch</h3>
                    <form>
                      <label htmlFor="contact-name">Name</label>
                      <input id="contact-name" type="text" name="name" data-constraints="@Required" className="form-control form-control-has-validation" /><span className="form-validation"></span>

                      <label htmlFor="contact-us-email">Email</label>
                      <input id="contact-us-email" type="email" name="email" data-constraints="@Email @Required" className="form-control form-control-has-validation" /><span className="form-validation"></span>

                      <label htmlFor="contact-message">Message</label><br />
                      <textarea id="contact-message" name="message" data-constraints="@Required" className="form-control form-control-has-validation"></textarea>


                      <button type="submit" className="btn btn-primary btn-block">Send</button>
                      <button type="reset" className="btn btn-silver-outline btn-block">Reset</button>
                    </form>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div >
  );
}

export default ContactUS;

