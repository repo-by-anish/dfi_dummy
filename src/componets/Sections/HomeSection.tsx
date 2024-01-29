import React from "react";
import { dummyData } from "../../api/dummydata";
import "./sections.css"
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import Advertisement from "./Advertisement";
import Partners from "./Partners";
import Testmonials from "./Testmonials";
import BlogSlider from "./BlogSlider";
import { motion, useScroll } from "framer-motion"

const HomeSection = (): JSX.Element => {
    const { scrollYProgress } = useScroll();
    return (
        <main>
            <motion.div
                style={{ scaleX: scrollYProgress, backgroundColor: 'var(--primary-color)', height: '5px', position: 'sticky', top: 0, left: 0, transformOrigin: '0%', zIndex: 1000 }}
                className="progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
                viewport={{ once: true }}
            >
                <HeroSection />
            </motion.div>
            <ProductsSection/>

            <motion.div
                initial={{ y: -350, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                style={{ zIndex: -1 }}
                transition={{ duration: 2, type: "spring" }}
                viewport={{ once: true }}
            >
                <Advertisement />
            </motion.div>


            <motion.div
                initial={{ x: +350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                viewport={{ once: true }}
            >
                <Partners />
            </motion.div>
            <motion.div
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                viewport={{ once: true }}
            >
                <Testmonials />
            </motion.div>
            <motion.div
                initial={{ y: +350, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                style={{ zIndex: -1 }}
                transition={{ duration: 2, type: "spring" }}
                viewport={{ once: true }}
            >
            <BlogSlider/>
            </motion.div>
        </main>
    )
}

export default HomeSection