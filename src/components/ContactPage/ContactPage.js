
"use client"

import contactPage from "@/data/contactPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { client } from "src/client";

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
const { tagline, title, socials } = contactPage;


const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const fromData = new FormData(e.target);
    // const data = {};
    // inputs.forEach((input) => (data[input] = fromData.get(input)));
    // console.log(data);
    console.log("Hii")
    const doc = {
      _type: "contact",
      name: name,
      email: email,
      message: message,

    };

    client.create(doc)
      .then((res) => {
        toast.success("Message Sent");
        setTimeout(() => window.location.reload(), 5000); // Add a delay before reload to allow the toast to display
      })
      .catch((error) => {
        toast.error("Failed to send message");
        console.error(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <section className="contact-page">
        <Container>
          <Row>
            <Col xl={4} lg={5}>
              <div className="contact-page__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
                <div className="contact-page__social">
                  {socials.map(({ id, icon, href }) => (
                    <a href={href} key={id}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={8} lg={7}>
              <div className="contact-page__right">
                <div className="comment-form">
                  <div
                    // onSubmit={handleSubmit}
                    className="comment-one__form contact-form-validated"
                  >
                    <Row>
                      <Col xl={6}>
                        <div className="comment-form__input-box">
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your name"
                            name="name"
                            required
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="comment-form__input-box">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email address"
                            name="email"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12}>
                        <div className="comment-form__input-box">
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            placeholder="Write Comment"
                            required
                          ></textarea>
                        </div>
                        <button
                          onClick={handleSubmit}
                          className="thm-btn comment-form__btn"
                        >
                          Send a message
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <div className="result"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
