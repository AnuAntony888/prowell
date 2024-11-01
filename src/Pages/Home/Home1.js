
import React, { useEffect } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from '../../Assets/MOVCROSS-043.jpeg'
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import OurSegments from "./OurSegments";
import OurBrand from "./OurBrand";
import Brandpent from "./Brandpent";
import Brandvaorigin from "./Brandvaorigin";
import Testmonial from "./Testmonial";
import HorizontalAccordion from "../OurBrand/HorizontalAccordion";


const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]
)

  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: isSmallScreen ? "12%" : "100px",
          paddingLeft: "5%",
          paddingRight: "5%",

          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
           backgroundPosition: "centre",
            margin: 0,
            height :'100vh'
          
        }}
      >
        <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with slight transparency
    zIndex: 1,
  }}
/>

        <Grid
          item
          xs={12}
          lg={12}
          md={12}
          sm={12}
          sx={{
            zIndex: 2,
            margin: "auto",
          }}
        >
          <div data-aos="fade-up">
            <TypographyText
              Typography={<>ProWell.Life
By MFF</>}
              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
              fontFamily="Khand"
         
              // fontWeight="600"
            />
            <TypographyText
              Typography={
                <>
                  <br />
                  Designing Fitness. 
Crafting Wellness
                </>
              }
              color="white"
              fontSize={isSmallScreen ? "1.5rem" : '1.3rem'}
              fontFamily="Khand"
         
              fontWeight="500"
            />
          </div>
        </Grid>
        
      </Grid>
      <Home2 />
      {/* <Home3 /> */}
      <Home4 />
      < OurSegments />
      <OurBrand />
  
    </React.Fragment>
  );
};

export default Home1 ;