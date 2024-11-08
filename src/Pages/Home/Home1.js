
import React, { useEffect } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Form, TypographyText } from "../../Reuse/Reuse";
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
import ContForm from "../ContactUs/ContForm";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import HomeSlider from "./HomeSlider";




const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]
  )
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  
  return (
    <React.Fragment>
  
        <HomeSlider isSmallScreen={isSmallScreen} />
      <Home2 />
  
      <Home4 />
      < OurSegments />
      <OurBrand />
      {/* <ContForm /> */}
      
    </React.Fragment>
  );
};

export default Home1;
