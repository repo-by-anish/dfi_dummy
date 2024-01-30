import React from "react";
import ProductCard from "../basics/ProductCard";
import { Grid } from "@mui/material";
import { prodDataType } from "../../api/dummydata";

const Products: React.FC<{ products_to_render: prodDataType[] }> = ({ products_to_render }): JSX.Element => {
    return (
        <div className="products">
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products_to_render?.map((product, index) => (
                    <Grid sx={{padding: "0"}} key={index} item xs={2} sm={3} md={3}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Products;
