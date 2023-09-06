import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from "prop-types";

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading ...</p>
      )}
      {
        <div className="card-grid">
          {images.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </div>
      }
    </>
  );
};

GiftGrid.prototype = {
  category: PropTypes.string.isRequired,
};

export default GiftGrid;
