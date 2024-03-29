import React from "react";
import Button from "./Button";
import { prodDataType } from "../../api/dummydata";
import { screenWidth, useData } from "../../api/fetctData";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const ProductCard = ({ prod_id, prod_name, prod_desc, prod_img, prod_price, prod_size }: prodDataType) => {
  const clickHandler = (id: number) => {
    const url = `/product/${id}`;
    window.location.href = url;
  }

  const { isLoading } = useData();

  let content = null;

  if (isLoading) {
    content = <ProductCardSkeleton loading />;
  } else {
    content = (
      <div onClick={() => clickHandler(prod_id)} className="product__card__container">
        <div className="product__card">
          <div className="product__img">
            <div className="video-container">
              <img
                src={prod_img}
                alt="Product Poster"
                className="video-poster"
              />
            </div>
          </div>
          <div className="product__info">
            <h2>{prod_name}</h2>
            <p className="product__description">{prod_desc}</p>
          </div>
        </div>
        <div className="product__price">
          <div className="prd_prc_l">
            <h3>₹ {prod_price}</h3> <span>{prod_size}</span>
          </div>
          <div className="prd_prc_r">
            <Button
              size={{ width: screenWidth < 500 ? 75 : 110, height: screenWidth < 500 ? 25 : 30 }}
              color="var(--tertiary-color)"
              name={"Read More"}
              fontSize={screenWidth < 500 ? "10px" : "16px"}
              backgroundColor="var(--primary-color)"
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default ProductCard;
