import React from "react";
import Carousel from 'react-material-ui-carousel'
import TestmonialItem from "./TestmonialItem";

const Testmonials = () => {
    return (
        <section className="testmonials">
            <h1 className="testmonials__title">Personalize your trading experience with curated benefits</h1>
            <Carousel animation="slide"duration={1500}>
                <TestmonialItem/>
                <TestmonialItem/>
                <TestmonialItem/>
                <TestmonialItem/>
                <TestmonialItem/>
            </Carousel>
        </section>
    )
}

export default Testmonials;