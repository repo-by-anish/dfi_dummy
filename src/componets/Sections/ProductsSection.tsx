import React, { useEffect, useState } from "react";
import Products from "./Products";
import { dummyDataType } from "../../api/dummydata"
import Button from "../basics/Button";
import { dummyData } from "../../api/dummydata";

const ProductsSection = (): JSX.Element => {
    const [slide, setSlide] = useState<string>("exotic");
    const [animationDirection, setAnimationDirection] = useState<string>("");
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [prod_to_render, setProd_to_render] = useState<dummyDataType[]>([]);
    const [products, _] = useState<dummyDataType[]>(dummyData);

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
        setAnimationDirection("")
    }

    useEffect(() => {
        if (index < currentSlide) {
            setAnimationDirection("right_to_left");
        } else {
            setAnimationDirection("left_to_right");
        }
        setCurrentSlide(index);
    }, [index]);


    const renderToAllProducts = () => {
        window.location.href = "/products";
    }


    useEffect(() => {
        if (slide === "exotic") {
            setProd_to_render(products?.filter((product, index) => index < 8));
            return;
        } else {
            const prod_to_render_filtered = products.filter((product) => product.prod_type.indexOf(slide) > -1);
            setProd_to_render(prod_to_render_filtered);
        }
    }, [slide, products]);

    return (
        <section className="products__section">
            <div className="product__slider">
                <h2 className="products__heading">Our Products</h2>
                <div className="slider">
                    {
                        Object.entries(slides).map(([key, value], index) => (
                            <div key={index} onClick={() => updateSlide(key, index)} className={`slide ${slide === key ? "active" : ""}`}>
                                {value}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div onClick={renderToAllProducts} className="products__content">
                <div className={animationDirection}>
                    <Products products_to_render={prod_to_render} />
                </div>
                {
                    slide === "exotic" && (
                        <div className="products__button">
                            <Button size={{ width: 120, height: 35 }} color={"var(--tertiary-color)"} fontSize={"16px"} backgroundColor={"var(--primary-color)"} name={"View All"} />
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default ProductsSection;
