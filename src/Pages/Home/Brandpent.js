
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
import img1 from "../../Assets/17.jpg";
import img2 from "../../Assets/18.png";
import img3 from "../../Assets/19.png";
import img4 from "../../Assets/20.png";
import img5 from "../../Assets/21.png";
import img6 from "../../Assets/22.png";
import img7 from "../../Assets/23.png";
import img8 from "../../Assets/24.png";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";

const Brandpent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const images = [
    { src: img2, title: "COLMIA™ LUXURY DUMBBELLS SET" },
    { src: img3, title: "LESNA™ LUXURY BARBELL SET" },
    { src: img4, title: " LOVA™ LUXURY KETTLEBELLS" },
    { src: img5, title: "RAXA™ LUXURY BOXING BAGS" },
    { src: img6, title: "SCALA™ LUXURY WALL BAR" },
    { src: img7, title: "MOXA™ LUXURY BALLS " },
    { src: img8, title: "BANKA™ LUXURY FITNESS BENCH" },
  ];

  return (<>
      <Grid
        container
        spacing={0}
        sx={{
          height: "100%", bgcolor: "black", p: "2%",
          marginTop: '55px'
        }}
      >
        
        <Grid
          item
          lg={7}
          md={5}
          sm={6}
          xs={12}
          sx={{
            position: "relative",
            bgcolor: "whitesmoke",
    
          }}
        >
       
          <img
            src={img1}
            alt="Your Alt Text"
            style={{ width: "100%", height:isSmallScreen? "100%":'100vh' }}
          />

          {/* Card on top of the image */}
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
            <CardContent>
              <TypographyText
                Typography={"Movement"}
                fontSize={"2rem"}
                textAlign="center"
              color="white"
                fontFamily="Khand"
              />
              <TypographyText
                Typography={"Innovation in Every Move"}
                fontSize={"1.2rem"}
                textAlign="center"
              color="white"
                fontFamily="Khand"
              />
              <TypographyText
                Typography={
                  " Latin America’s leading fitness brand, Movement, offers award-winning equipment through its sleek EDGE and NEXT lines, seamlessly combining cardio, strength, and functionality. Renowned for its design excellence, the EDGE line maximizes gym space while delivering exceptional durability and performance. With a wide range of options, Movement provides greater value for your investment, offering high-quality solutions for commercial, boutique, and residential gyms, all backed by advanced research and development."
                }
            fontFamily='CamptonLight'
                textAlign="left"
                color="white"
            />
 <DownloadBrochure/>
            </CardContent>
          </Card>
          </Grid>
          <Grid item lg={5} md={7} sm={6} xs={12}>
          <Box>
            <ImageList variant="masonry" cols={2} gap={8}>
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
            fontFamily='CamptonLight'
                    textAlign="centre"
                    color="white"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>

  </>);
};

export default Brandpent;
