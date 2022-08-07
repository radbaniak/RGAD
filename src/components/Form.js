import React from 'react';
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap"

const initialFormData = Object.freeze({
    username: "",
    email: "",
    phone: "",
    message: ""
  });

export const ContactForm = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_4oug267';
        const serviceID = "service_kqkanza";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email })

        console.log(formData);
      };


    return (
        <section id="form" className="form-section bg-light">
            <div className="container">
                <div className="row align-items-center no-gutters mb-0 mb-lg-0 p-4">
                    <div className="col-lg-12">
                        <Container>
                            <Row>
                                <Col sm={5}>
                                    <h2>Trial Class</h2>
                                    This form will be sent to one of our instructors, who will organise your trial class at Roger Gracie Academy and contact you with the details. 
                                    <p></p>
                                </Col>
                                <Col sm={6}>
                                <Form>
                                    <Row>
                                    <Col sm={6}>
                                        <FormGroup controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control onChange= {handleChange} name="firstname" required type="text" />
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control onChange= {handleChange} name="lastname" required type="text" />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <FormGroup controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange= {handleChange} name="email" required type="email" />
                                    </FormGroup>

                                    <FormGroup controlId="formPhone">
                                    <Form.Label>Phone Number (optional)</Form.Label>
                                    <Form.Control onChange= {handleChange} type="text" name="phone" />
                                    </FormGroup>

                                    <FormGroup controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control onChange= {handleChange}
                                        name = "message"
                                        as="textarea"
                                        rows="3"
                                        placeholder="What are you interested in? What is your previous experience? When would you like to start?"
                                        required
                                    />
                                    </FormGroup>
                                    <Button onClick={handleSubmit} type="submit">Sumbit</Button>
                                </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    );
}



