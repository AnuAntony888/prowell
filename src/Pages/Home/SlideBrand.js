

import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Slider from "react-slick";
 import LinkIcon from "@mui/icons-material/Link";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from '../../Assets/9.jpg'
import img2 from '../../Assets/Movement_mfp-430.jpg'
import img3 from "../../Assets/35.jpg";
import img4 from "../../Assets/vaaa.png";
function SlideBrand() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
    };
  const data = [{
    src: img1,
    name: 'Pent',
    onClick: "/pent.",
    
  },
    {
      src: img2,
      name:'Movement',
  onClick:'/movement'
    },
    {
      src: 'https://magazine.vaha.com/wp-content/uploads/2022/01/Meditations_Session_mit_dem_VAHA-1-1560x878.jpg',
      name: 'Vaha',
      onClick:'/vaha'
      
    },

    {
      src: img3,
      name: 'Well Sytem',
  onClick:'/well'
},

]
  return (
    <Box className="slider-container" sx={{padding:'3%'}}>
          <Slider {...settings}>
                        {data?.map((post,index) => {
                  return (
                    <React.Fragment key={post.id} aria-hidden="true">
                      <Link
                    to={post.onClick}
                    
                        className="brands_hd"
                      >
                        <Card
                          sx={{
                            position: "relative",
                            margin: "auto",
                            display: "flex",
                            boxShadow: "none",
                            borderRadius: "30px",
                            height: '250px',
                            minHeight: '250px',
                            // "& .image_sub_card": { display: "none" },
                            "& .image_sub_card": { display: "flex" , backgroundColor: "rgba(0, 0, 0,.4)",},
                            ":hover": {
                              "& .image_sub_card": {
                                display: "flex",
                                backgroundColor: "rgba(0, 0, 0,.3)",
                              },
                            },
                          }}
                        >
                        

                          <img src={post.src} alt=""
                          width={'100%'}/>
                          <Box
                            className="image_sub_card"
                            sx={{
                              top: "0",
                              position: "absolute",
                              borderRadius: "20px",
                              width: "100%",
                              height: "100%",

                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <LinkIcon
                              sx={{
                                fontSize: 40,
                                color: "whitesmoke",
                              }}
                            /> */}
                            <TypographyText
                    Typography={post.name}
                    fontSize={"2rem"}
                    textAlign="center"
                    fontFamily="Khand"
                              color="white"
                                      //  color="#D66A3A"
                  />
                          </Box>
                        </Card>
                        <CardContent>
                        {/* <TypographyText
                    Typography={post.name}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    fontFamily="Khand"
                    color="#D66A3A"
                  /> */}
                        </CardContent>
                      </Link>
                    </React.Fragment>
                  );
                })}
        
      </Slider>
    </Box>
  );
}

export default SlideBrand;
