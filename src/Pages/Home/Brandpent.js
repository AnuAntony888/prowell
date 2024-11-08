import {
  Box,
  Card,
  CardContent,
  Grid,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../Assets/Movement_mfp-430.jpg";
import img2 from "../../Assets/movement1.jpg";
import img3 from "../../Assets/mov2.jpg";
import img4 from "../../Assets/mov10.jpg";
import img5 from "../../Assets/mov9.jpg";
import img6 from "../../Assets/mov8.jpg";
import img7 from "../../Assets/mov7.jpg";
import img8 from "../../Assets/mov6.jpg";
import img9 from "../../Assets/mov5.jpg";
import img10 from "../../Assets/mov4.jpg";
import img11 from "../../Assets/mov3.jpg";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";
import ContForm from "../ContactUs/ContForm";

const Brandpent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const images = [
    { src: img2, title: "NEXT LINE - HIGH ROW" },
    { src: img3, title: "SQUAT MACHINE" },
    { src: img4, title: " W CROSS SMITH RACK" },
    { src: img5, title: "MULTI STATION W2" },
    { src: img6, title: "MULTI STATION W4" },
    { src: img7, title: "MULTI STATION W9MULTI STATION W9 " },
    { src: img8, title: "TREADMILL X 4.6 TSI" },
    { src: img9, title: "RTS" },
    { src: img10, title: "CARDIO HILL" },
    { src: img11, title: "AIR BIKE G2" },

  ];

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          height: "100%",
          bgcolor: "black",
          p: "2%",
          marginTop: "55px",
        }}
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            position: isSmallScreen ? "relative" : "",
            bgcolor: "whitesmoke",
          }}
        >
          {isSmallScreen ? (
            <>
              <img
                src={img1}
                alt="Your Alt Text"
                style={{
                  width: "100%",
                  height: isSmallScreen ? "100%" : "100vh",
                }}
              />
              <Card
                style={{
                  position: "absolute",
                  top: !isSmallScreen ? "20px" : "25%",
                  left: "10%",
                  width: "80%",
                  backgroundColor: "#B05B34", // slight transparency
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
                }}
              >
                <CardContent sx={{padding:'5%'}}>
                  <TypographyText
                    Typography={"Movement"}
                    variant={isSmallScreen ? "h3" : "h4"}
                    textAlign="center"
                    color="white"
                    fontFamily="Khand"
                  />
                  <TypographyText
                    Typography={"Innovation in Every Move"}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    color="white"
                    fontFamily="Khand"
                  /><br/>
                  <TypographyText
                    Typography={
                      <>
                        Latin America’s top fitness brand, Movement offers
                        award-winning equipment through its sleek EDGE and NEXT
                        lines, combining cardio, strength, and functionality.
                        Known for design excellence, the EDGE line maximizes gym
                        space while delivering exceptional durability and
                        performance. Movement’s wide range of options offer
                        greater value for your investment, and provide
                        high-quality solutions for commercial, boutique, and
                        residential gyms, supported by advanced R&D.
                      </>
                    }
                    fontFamily="CamptonLight"
                    textAlign="justify"
                    color="white"
                  /><br/>
                  <DownloadBrochure />
                </CardContent>
              </Card>
            </>
          ) : (
            <Card
              style={{
                left: "10%",

                backgroundColor: "#B05B34", // slight transparency
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
              }}
            >
              <img src={img1} alt="" width={"100%"} />
              <CardContent>
                <TypographyText
                  Typography={"Movement"}
                  variant={isSmallScreen ? "h3" : "h4"}
                  fontFamily="Khand"  
                  textAlign="center"
                  color="white"
     
                /><br/>
                <TypographyText
                  Typography={"Innovation in Every Move"}
                  fontSize={"1.5rem"}
                  textAlign="center"
                  color="white"
                  fontFamily="Khand"
                /><br/>
                <TypographyText
                  Typography={
                    <>
                      Latin America’s top fitness brand, Movement offers
                      award-winning equipment through its sleek EDGE and NEXT
                      lines, combining cardio, strength, and functionality.
                      Known for design excellence, the EDGE line maximizes gym
                      space while delivering exceptional durability and
                      performance. Movement’s wide range of options offer
                      greater value for your investment, and provide
                      high-quality solutions for commercial, boutique, and
                      residential gyms, supported by advanced R&D.
                    </>
                  }
                  fontFamily="CamptonLight"
                  textAlign="justify"
                  color="white"
                /><br/>
                <DownloadBrochure />
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}
        sx={{backgroundColor:'white'}}>
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item lg={index===0 || index===1 || index===5 || index===6 ?6:
                4} md={4} sm={3} xs={6} key={index}>
                <img
                  src={image.src} 
                  width={"100%"}
                  alt={image.title}
                  loading="lazy"
                />
                <TypographyText
                  Typography={image.title}
                  fontFamily="CamptonLight"
                  textAlign="centre"
                  // color="white"
                />
              </Grid>
            ))}
          </Grid>
          {/* <Box>
            <ImageList variant="masonry" cols={5} gap={8}>
              {images.map((image, index) => (
                <ImageListItem
                  key={index}
                  sx={{ alignItems: "center", margin: "auto" }}
                >
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
                    color="white"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box> */}
        </Grid>
      </Grid>
      <ContForm/>
    </>
  );
};

export default Brandpent;
