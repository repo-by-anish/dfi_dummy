// BlogSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Blog {
  id: number;
  image: string;
  transcript: string;
}

interface BlogSliderProps {
  blogs: Blog[];
}

const BlogSlider: React.FC<BlogSliderProps> = ({ blogs }) => {
    
    const clickHandler = (id: number) => {
        const url = `/blog/${id}`;
        window.location.href = url;
    }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ height: '380px', margin: '0 auto', width: '75%', marginTop: "180px" }}>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <Card onClick={() => clickHandler(blog.id)} key={blog.id} sx={{ maxWidth: 345, margin: '0 auto', boxShadow: 'none', cursor: 'pointer' }}>
            <CardMedia
              component="img"
              height="140"
              image={blog.image}
              alt={`Blog ${blog.id}`}
            />
            <CardContent sx={{backgroundColor: "var(--primary-color50)", fontSize: "16px", color: "var(--back-color-1)"}}>
              <Typography gutterBottom variant="h6" component="div">
                Blog {blog.id}
              </Typography>
              <Typography sx={{color: "var(--quaternary-color)"}} variant="body2" color="text.secondary">
                {blog.transcript}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
