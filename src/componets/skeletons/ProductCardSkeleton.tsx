import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

interface ProductCardSkeletonProps {
  loading?: boolean;
}

function ProductCardSkeleton(props: ProductCardSkeletonProps) {
  const { loading = false } = props;

  return (
    <div className="product__card__container">
      <div className="product__card">
        {loading ? (
          <Skeleton variant="rectangular" width={240} height={200} />
        ) : (
          <div className="product__img">
            <div className="video-container">
              <img
                src="placeholder-image-url"
                alt="Product Poster"
                className="video-poster"
              />
            </div>
          </div>
        )}
        <div className="product__info">
          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton width={120} height={20} />
              <Skeleton width={180} height={40} />
            </Box>
          ) : (
            <>
              <Typography variant="h2">Product Title</Typography>
              <Typography className="product__description">Product Description</Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;