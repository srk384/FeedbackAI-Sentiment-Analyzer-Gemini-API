import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews
  const fetchData = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_BASE_URL + "/reviews"
      );
      const data = await response.json();
      setReviews(data); // Update state with new reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data initially

    // const interval = setInterval(() => {
    //   fetchData(); // Fetch new reviews every 5 seconds
    // }, 10000);

    // return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="pt-20">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <h1 className="text-2xl">{review.sentiment}</h1>
            <p>{review.message}</p>
            {/* {console.log(review)} */}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No reviews yet...</p>
      )}
    </div>
  );
};

export default Reviews;
