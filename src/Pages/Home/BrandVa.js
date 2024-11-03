import {
  Box,
  Card,
  CardContent,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../Assets/9.jpg";
import img2 from "../../Assets/pen5.png";
import img3 from "../../Assets/pen6.png";
import img4 from "../../Assets/pen7.png";
import img5 from "../../Assets/pen1.png";
import img6 from "../../Assets/pen4.png";
import img7 from "../../Assets/pen3.png";
import img8 from "../../Assets/pen2.png";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";

const BrandVa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    { src: img2, title: "COMBO™ ANA" },
    { src: img3, title: "RAXA™ LUXURY BOXING BAGS" },
    { src: img5, title: "SCALA™ ADVANCE" },
    { src: img4, title: " IRENA™ PREMIUM CURVE MANUAL TREADMILL" },
    { src: img6, title: "MOXA™ LUXURY BALLS" },
    { src: img7, title: "SOPHIA™ MOBILE GYM KIT " },
    { src: img8, title: "BANKA™ LUXURY FITNESS BENCH" },
  ];

  return (
    <Grid container spacing={2} sx={{ height: "100%", marginTop: "10px" }}>
      {/* <Grid
        item
        lg={6}
        md={5}
        sm={6}
        xs={12}
        sx={{
          position: "relative",
        }}
      >

        <img
          src={img1}
          alt="Your Alt Text"
          style={{ width: "100%", height: "100%" }}
        />      
        <Card
          style={{
            position: "absolute",
            top: "25%",
            left: "10%",
            width: "80%",
            backgroundColor: "rgba(4, 51, 108, 0.5)" , // slight transparency
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
          }}
        >
          <CardContent>
            <TypographyText
              Typography={"Pent"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
                      fontFamily="Khand"
                      />
                          <TypographyText
              Typography={"Luxury Meets Functionality"}
              fontSize={"1.2rem"}
              textAlign="center"
              color="white"
                      fontFamily="Khand"
                      />
                      
            <TypographyText
              Typography={
                " Luxury Meets Functionality PENT combines aesthetic design with functional fitness, offering luxurious handcrafted equipment that is pristine and practical. These exclusive equipment are highly customizable to seamlessly match the aesthetics of your unique space. PENT is the perfect match for the ones who appreciate exclusivity and expect top-notch performance from their equipment."
              }
          fontFamily='CamptonLight'
              textAlign="left"
              color="white" />
                  <DownloadBrochure />
          </CardContent>
        </Card>
      </Grid> */}
      <Grid
        item
        lg={6}
        md={7}
        sm={6}
        xs={12}
        sx={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            margin: "auto",
      
         
          }}
        >
          <Grid item lg={11} md={11} sm={11} xs={11}>
            <Box sx={{
              padding: '5%', marginTop: '200px',
              backgroundColor: "rgba(4, 51, 108, 0.5)" 
     
            }}>
            <TypographyText
              Typography={"Pent"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
              fontFamily="Khand"
            />
            <TypographyText
              Typography={"Luxury Meets Functionality"}
              fontSize={"1.2rem"}
              textAlign="center"
              color="white"
              fontFamily="Khand"
            />

            <TypographyText
              Typography={
                  <>
                  PENT combines aesthetic design with 
functional fitness, offering luxurious 
handcrafted equipment that is pristine and 
practical. These exclusive equipment are 
highly customizable to seamlessly match the 
aesthetics of your unique space. PENT is the 
perfect match for the ones who appreciate 
exclusivity and expect top-notch performance 
from their equipment.</>
              }
              fontFamily="CamptonLight"
              textAlign="left"
              color="white"
            />
            <DownloadBrochure />
            </Box>
           
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={7} sm={6} sx={12}>
        <Box sx={{ p: "10px" }}>
          <ImageList variant="masonry" cols={2} gap={8}>
            {images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${image.src}?w=248&fit=crop&auto=format`}
                  alt={image.title}
                  loading="lazy"
                />
                <TypographyText
                  Typography={image.title}
                  fontFamily="CamptonLight"
                  textAlign="centre"
                  //   color="white"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BrandVa;
