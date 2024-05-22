import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jsonData from "../../data.json";
import "./LocationView.scss";
import Rate from "../../components/Rate/Rate";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import Slider from "../../components/Slider/Slider";
import * as URL from "../../routes";

const LocationView = () => {
  const { id } = useParams<{ id: string }>();
  const locationData = jsonData.find((location) => location.id === id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!locationData) navigate(URL.NOT_FOUND);
  }, [locationData]);

  return (
    <div className="location-detail">
      <Slider pictures={locationData?.pictures || []} />
      <div className="location-detail-info">
        <div className="title">
          <span className="text-title">{locationData?.title}</span>
          <span className="text-location">{locationData?.location}</span>
          <div className="tags">
            {locationData?.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="tags-rate">
          <div className="user">
            <span>{locationData?.host.name}</span>
            <img src={locationData?.host.picture} alt="profile" />
          </div>
          <Rate rating={Number(locationData?.rating || 0)} />
        </div>
      </div>
      <div className="dropdown-location">
        <Dropdown title="Description">
          <span>{locationData?.description}</span>
        </Dropdown>
        <Dropdown title="Equipements">
          <ul>
            {locationData?.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
};

export default LocationView;
