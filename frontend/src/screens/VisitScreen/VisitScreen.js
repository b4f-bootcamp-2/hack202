import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { visit } from "../../redux/actions/userActions";
import MainScreen from "../../components/MainScreen";
import { useNavigate } from "react-router-dom";
import styles from "./VisitScreen.module.css";

// O useDispatch hook é usado para fazer dispatch numa action enquanto o useSelector hook é usado para obter o state através do redux.
function VisitScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  // A dispatch function chama o nosso reducer e passa o current state e o action object
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userVisit = useSelector((state) => state.userVisit);
  const { loading, error } = userVisit;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(visit(name, email, phoneNumber, additionalInfo));
    setTimeout(() => {
      setSubmitted(true)
    }, 1000);
  };

  useEffect(() => {
    if (!loading && !error && submitted) {
      setSuccessMessage(true)
      setTimeout(() => {
        navigate(`/`);
      }, 4000);
    }
  }, [loading, error, submitted, navigate]);

  return (
    <div className={styles.mainwrapper}>
      <MainScreen title="">
        {
          successMessage ? <div><h1>REQUEST RECEIVED SUCCESFULLY</h1><center><p>WE WILL CONTACT YOU SHORTLY!</p></center></div> :
            <div className={styles.quoteContainer}>
              <h1>REQUEST A QUOTE</h1>
              <div className={styles.loginContainer}>
                <Form onSubmit={submitHandler}>
                  <Form.Group className={styles.formFields} controlId="name">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="name"
                      value={name}
                      placeholder="Enter your name..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className={styles.inputField} controlId="formBasicEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Enter your email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className={styles.formFields} controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="text"
                      value={phoneNumber}
                      placeholder="Enter your Phone number..."
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Additional Requests/Information</Form.Label>
                    <Form.Control as="textarea" rows={3} value={additionalInfo} placeholder="For additional comments, type here..." onChange={(e) => setAdditionalInfo(e.target.value)} />
                  </Form.Group>

                  <div className={styles.login}>
                    <Button className={styles.submitButton} type="submit">
                      BOOK IT NOW
                    </Button>
                  </div>
                </Form>

                <Row className={styles.newAccount}>
                  <Col>
                    <br />
                    No need for a visit? We make it simple for you! Get your <Link to="/quote">Quote now!</Link>
                  </Col>
                </Row>

                <div className={styles.formErrorError}>
                  <Row>
                    <Col className={styles.inputError}>
                      {error && <ErrorMessage>{error}</ErrorMessage>}
                    </Col>
                  </Row>
                  {loading && <Loading />}
                </div>
              </div>
            </div>
        }
      </MainScreen >
    </div>
  );
}

export default VisitScreen;