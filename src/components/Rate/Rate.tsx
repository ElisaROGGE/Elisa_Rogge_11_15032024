import React from "react";
import filledStar from "../../assets/Vector.png";
import emptyStar from "../../assets/star-inactive.png";
import "./Rate.scss";

interface RateProps {
  rating: number;
}

const Rate: React.FC<RateProps> = ({ rating }) => {
  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <img key={i} src={filledStar} alt="filled star" className="filled-star" />
      );
    } else {
      stars.push(
        <img key={i} src={emptyStar} alt="empty star" className="empty-star" />
      );
    }
  }
  return <div className="rate">{stars}</div>;
};

export default Rate;
