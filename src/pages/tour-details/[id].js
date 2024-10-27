import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import popularTours from "@/data/popularTours";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TourDetails = () => {

  const router = useRouter();
  const { id } = router.query; // get the id from the URL
  const [tour, setTour] = useState(null);

  useEffect(() => {
    console.log("ID from URL:", id); // Log ID to confirm it's coming through
    if (id) {
      // Find the tour by ID in popularTours, matching the ID as a string
      const foundTour = popularTours.find((tour) => tour.id === id.toString());
      console.log("Found Tour:", foundTour); // Log found tour to confirm it's working
      setTour(foundTour);
    }
  }, [id]);

  console.log(tour)
  return (
    <Layout pageTitle={`Tour Details - ${tour?.title}`}>
      <MainSliderTwo />
      <TourDetailsPage tour={tour} />
    </Layout>
  );
};

export default TourDetails;
