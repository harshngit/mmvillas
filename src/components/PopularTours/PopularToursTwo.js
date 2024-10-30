import popularToursTwo from "@/data/popularToursTwo";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import popularTours from "@/data/popularTours";

// const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter popular tours based on the search term
  const filteredTours = popularTours.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm)
  );


  return (
    <section className="popular-tours-two">
      <div className="searchbox">
        <h1>Our Popular Villas</h1>
        <input type="text" value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Available villa" name="" id="" />
      </div>
      <Container>
        {/* {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )} */}
        <Row>
          {filteredTours?.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
