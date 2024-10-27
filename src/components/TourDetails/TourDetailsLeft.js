import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import Modal from "src/pages/modal";

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({ tour }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [active, setActive] = useState(1);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{tour?.description}</p>
        <h3 className="tour-details-two-overview__title">Features</h3>
        <ul className="mb-2">
          {tour?.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {tour?.amenities.slice(0, 5).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {tour?.amenities.slice(5, 11).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Near By Attraction</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {tour?.nearbyAttractions.map((over, index) => (
            <div
              className="accrodion overflow-hidden"
              key={index}
            >
              <div className="accrodion-title">
                <h4>
                  <span>{over}</span>
                </h4>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="tour-details-two__tour-plan mt-5">
        <p onClick={handleOpen} className="terms">T&C</p>
        <div className="accrodion-grp faq-one-accrodion">
          <Modal isOpen={open} onClose={handleClose}>
            <>
              {tour?.importantNotes.map((over, index) => (
                <div
                  className="accrodion overflow-hidden"
                  key={index}
                >
                  <div className="accrodion-title text-danger">
                    <h4>
                      <span>{over}</span>
                    </h4>
                  </div>

                </div>
              ))}
            </>
          </Modal>

        </div>
      </div>
      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tour-details-two__related-tours">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <Row>
          {popularTours.slice(0, 3).map((tour) => (
            <Col xl={4} key={tour.id}>
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TourDetailsLeft;
