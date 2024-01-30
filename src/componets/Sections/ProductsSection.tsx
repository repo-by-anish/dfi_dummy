import React, { useEffect, useState } from "react";
import Products from "./Products";
import { prodDataType } from "../../api/dummydata";
import Button from "../basics/Button";
import { useNavigate } from "react-router-dom";
import { screenWidth, useData } from '../../api/fetctData';

const ProductsSection = (): JSX.Element => {
    const [slide, setSlide] = useState<string>("exotic");
    const [animationDirection, setAnimationDirection] = useState<string>("");
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [prodToRender, setProdToRender] = useState<prodDataType[]>([]);
    const { products } = useData();
    const navigate = useNavigate();

    const slides = {
        exotic: "All Exotic Delights",
        fresh_favourite: "Fresh Favorites",
        citrus_burst: "Citrus Burst",
        berry_mix: "Berry Mix",
        tropical: "Tropical"
    };

    const updateSlide = (key: string, index: number) => {
        setSlide(key);
        setIndex(index);
        setAnimationDirection("");
    };

    useEffect(() => {
        if (index < currentSlide) {
            setAnimationDirection("right_to_left");
        } else {
            setAnimationDirection("left_to_right");
        }
        setCurrentSlide(index);
    }, [index]);

    const renderToAllProducts = () => {
        navigate("/products"); // navigate to "/products";
    };

    useEffect(() => {
        if (slide === "exotic") {
            setProdToRender(products?.filter((product: prodDataType, index: number) => index < 8));
        } else {
            const prodToRenderFiltered = products.filter((product: prodDataType) => product.prod_type.indexOf(slide) > -1);
            setProdToRender(prodToRenderFiltered);
        }
    }, [slide, products]);

    return (
        <section className="products__section">
            <div className="product__slider">
                <h2 className="products__heading">Our Products</h2>
                <div className="slider">
                    {Object.entries(slides).map(([key, value], index) => (
                        <div key={index} onClick={() => updateSlide(key, index)} className={`slide ${slide === key ? "active" : ""}`}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            <div className="products__content">
                <div className={animationDirection}>
                    <Products products_to_render={prodToRender} />
                </div>
                {slide === "exotic" && (
                    <div onClick={renderToAllProducts} className="products__button">
                        <Button size={{ width: screenWidth <= 500 ? 80 : 120, height: screenWidth <= 500 ? 25 : 35 }} color={"var(--tertiary-color)"} fontSize={screenWidth <= 500 ? "12px" : "16px"} backgroundColor={"var(--primary-color)"} name={"View All"} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
