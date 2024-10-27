import { tourDetailsOne } from "@/data/tourDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdNotificationImportant } from "react-icons/md"

// const { title, rate, duration, minAge, tourType, location, date, superb } =
//   popularTours;

const TourDetailsOne = ({ tour }) => {
  console.log(tour)
  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{tour?.title}</h2>
                  <p className="tour-details__top-rate">
                    <span>{tour?.bookingInfo?.securityDeposit}</span> / Per Person Deposit
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Check In</p>
                        <h6>{tour?.bookingInfo?.checkIn} </h6>

                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Check Out</p>
                        <h6>{tour?.bookingInfo?.checkOut}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <MdNotificationImportant />
                      </div>
                      <div className="text">
                        <p>Balance Payment</p>
                        <h6>{tour?.bookingInfo?.balancePayment}</h6>
                      </div>
                    </li>
                    {/* <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
                        <h6>{location}</h6>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Posted {date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </section>
  );
};

export default TourDetailsOne;
