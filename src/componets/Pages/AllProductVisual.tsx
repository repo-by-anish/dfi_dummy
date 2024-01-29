import React from "react";
import { dummyDataType } from "../../api/dummydata";
import Products from "../Sections/Products";
import "./pages.css"
import { useLocation } from "react-router-dom";

const AllProductVisual: React.FC<{ products: dummyDataType[] }> = ({ products }): JSX.Element => {
    const location = useLocation()
    return (
        <>
            <div className="products__header">
            <p className="path">{location.pathname}</p>
            <h1>All Products</h1>
            </div>
            <div className="all_product_visual">
                <Products products_to_render={products} />
            </div>
        </>
    )
}

export default AllProductVisual