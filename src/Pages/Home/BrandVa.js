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
import img2 from "../../Assets/10.png";
import img3 from "../../Assets/11.jpg";
import img4 from "../../Assets/12.jpg";
import img5 from '../../Assets/13.jpg'
import img6 from '../../Assets/14.jpg'
import img7 from '../../Assets/15.jpg'
import img8 from '../../Assets/16.jpg'

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";

const BrandVa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    { src: img2, title: "COLMIA™ LUXURY DUMBBELLS SET" },
    { src: img3, title: "LESNA™ LUXURY BARBELL SET" },
    { src: img4, title: " LOVA™ LUXURY KETTLEBELLS" },
    { src: img5, title: "RAXA™ LUXURY BOXING BAGS" },
    { src: img6, title: "SCALA™ LUXURY WALL BAR" },
    { src: img7, title: "MOXA™ LUXURY BALLS " },
    { src: img8, title: "BANKA™ LUXURY FITNESS BENCH" },
  ];
 
  

 
  return (
    <Grid container spacing={2} sx={{ height: "100%" ,marginTop:'10px'}}>
      <Grid
        item
        lg={6}
        md={5}
        sm={6}
        xs={12}
        sx={{
          position: "relative",
        }}
      >
        {/* Image */}
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
      </Grid>
      <Grid item lg={6} md={7} sm={6} sx={12}>
        <Box sx={{p:'10px'}} >
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
               fontFamily='CamptonLight'
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
