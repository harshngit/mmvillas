import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = ({ tour }) => {
  return (
    <>
      <TourDetailsOne tour={tour} />
      <TourDetailsTwo tour={tour} />
    </>
  );
};

export default TourDetailsPage;
