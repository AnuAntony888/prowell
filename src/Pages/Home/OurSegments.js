

import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";

import img1 from "../../Assets/8.jpg";
import img2 from "../../Assets/6.jpg";
import img3 from "../../Assets/5.jpg";
import img4 from "../../Assets/4.jpg";

import { TypographyText, useScreenSize } from "../../Reuse/Reuse";
import { styles } from "./Style";
const OurSegments = () => {
  const matches2 = useScreenSize();
  return (
    <Box sx={{ ...styles.bg }}>
      <Box sx={{ paddingTop: "5%" }}>
        <TypographyText
          Typography={
            <>
              Our <span style={{ color: "#D66A3A" }}>Segments</span>
            </>
          }
          variant={matches2 ? "h3" : "h4"}
          fontFamily="Khand"
          color="white"
        />
      </Box>

      <br />
      <br />
      <Box sx={{ pt: "3%", pl: "10%", pb: "3%" }}>
        <Grid container
      
        >
             <Grid item lg={3} md={6} sm={6} xs={12}>
          
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} sx={{bgcolor:'#04336C'}}>
            <img src={img1} alt="" width={"100%"} />
          </Grid>
        
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
            <TypographyText
              Typography={
                <>
                  Fitness &{" "}
                  <span style={{ color: "white" }}>Wellness Centres</span>{" "}
                </>
              }
              fontSize={"1.5rem"}
              textAlign="center"
                color="#D66A3A"
                        fontFamily="Khand"
          />
              <TypographyText
                Typography={
                  "We equip fitness centers with state-of-the-art machines and durable equipment that support a wide range of fitness activities, enhancing member satisfaction and retention."
                }
                 fontFamily='CamptonLight'
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/********************second************************** */}
      <Box sx={{ pt: "3%", pr: "10%", pb: "3%" }}>
        <Grid container
          // sx={containerStyles1} data-aos="fade-left"
        >
          <Grid item lg={6} md={6} sm={6} xs={12} sx={leftGridStyles}>
            <Box sx={{ p: "5%" }}>
            <TypographyText
              Typography={
                <>
                  Hotels,{" "}
                  <span style={{ color: "#04336C" }}>Resorts and Spas</span>
                </>
              }
              fontSize="1.5rem"
              textAlign="center"
                color="white"
                        fontFamily="Khand"
            />
              <TypographyText
                Typography={`Our luxury fitness equipment adds value to hospitality settings, ensuring guests enjoy premium wellness experiences during their stay`}
                   fontFamily='CamptonLight'
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>

        
          <Grid item lg={3} md={6} sm={6} xs={12}
          sx={{bgcolor:'#D66A3A'}}>
            <img src={img2} alt="" width={"100%"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} >
            
            </Grid>
        </Grid>
      </Box>
      {/*************section 3********************* */}
      <Box sx={{ pt: "3%", pl: "10%", pb: "3%" }}>
        <Grid container
          // sx={containerStyles} data-aos="fade-left"
        >
       
          <Grid item lg={3} md={6} sm={6} xs={12} >
           
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img3} alt="" width={"100%"} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
            <TypographyText
              Typography={
                <>
                  Residential{" "}
                  <span style={{ color: "white" }}>& Commercial Projects</span>{" "}
                </>
              }
                fontSize="1.5rem"
              textAlign="center"
                color="#D66A3A"
                   fontFamily="Khand"
            />
              <TypographyText
                Typography={
                  "We provide tailored fitness solutions that blend seamlessly into residential and commercial projects, promoting a healthy lifestyle within each community."
                }
                 fontFamily='CamptonLight'
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*******************section4**************************** */}
      <Box sx={{ pt: "3%", pr: "10%", pb: "3%" }}>
        <Grid container >
          <Grid item lg={6} md={6} sm={6} xs={12} sx={leftGridStyles}>
            <Box sx={{ p: "5%" }}>
            <TypographyText
              Typography={
                <>
                  Educational Institutions{" "}
                  <span style={{ color: "#04336C" }}>& Sports Centers</span>
                </>
              }
              fontSize="1.5rem"
              textAlign="center"
                color="white"
                     fontFamily="Khand"
            />
              <TypographyText
                Typography={`Our robust and versatile fitness products support physical education and athletic programs in schools and universities, fostering a foundation for lifelong fitness in educational environments.`}
                 fontFamily='CamptonLight'
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>

       
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img4} alt="" width={"100%"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} >
        
        </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSegments;
const Data = [
  {
    image: img1,
    txt: "Establish Expertise",
    txt1: "Establish Expertise Leveraging our deep understanding of rare diseases and strategic  partnerships to drive ",
  },
  {
    image: img2,
    txt: "Expand Reach",
    txt1: "Introducing our groundbreaking treatments to the Indian  market and beyond, enhancing accessibility",
  },
  {
    image: img3,
    txt: "Empower Patients",
    txt1: "Providing hope and transforming the lives of rare disease patients and their families.",
  },
  {
    image: img4,
    txt: "Achieve Impact",
    txt1: "Becoming a beacon of hope and driving meaningful change in the rare disease landscape",
  },
];

export const rightGridStyles = {
  bgcolor: "#04336C",
  pt: "2%",
  pl: "1%",
  pr: "1%",
};

export const leftGridStyles = {
  bgcolor: "#D66A3A",
  pt: "2%",
  pl: "1%",
  pr: "1%",
};

export const containerStyles = {
  bgcolor: "#04336C",
};
export const containerStyles1 = {
  bgcolor: "#D66A3A",
};
