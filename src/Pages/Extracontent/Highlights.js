import React, { useEffect, useState } from "react";
import { containerStyles4 } from "../Home/Home3";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Buttons, TypographyText } from "../../Reuse/Reuse";
import { useNavigate } from "react-router";
import img1 from "../../Assets/54.jpg";
import img2 from "../../Assets/55.jpg";
import img3 from "../../Assets/56.jpg";
import img4 from "../../Assets/57.jpg";
const Highlights = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    window.scroll(0, 0);
  },[])
  return (
    <div>
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

        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        margin: 0,
        height: "100vh",
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
            Typography={<>Annual Maintenance Cover</>}
            color="white"
            variant={matches2 ? "h3" : "h4"}
              // fontWeight="600"
                 fontFamily="Khand"
          />
        </div>
      </Grid>
      </Grid>

      {/***********section 3******************** */}
      <Box sx={containerStyles4}>
        <Grid container spacing={6} >
        <Grid item xs={12} lg={6} md={6} sm={12}>
        <Grid container spacing={6}>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                {/* Content for the first grid item */}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                <div data-aos="zoom-in">
                  <img
                    src={
                      img3
                    }
                    alt=""
                    width="100%"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
             
                  <img
                    src={
                      img4
                    }
                    alt=""
                    width="100%"
                  />
       
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}></Grid>
            </Grid>
      
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}  sx={{margin:'auto'}}>
            <Box sx={{margin:'auto'}}>
            <TypographyText
              Typography={"Highlights of AMC:"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
              fontFamily="Khand"
            />
            <TypographyText
              Typography={
                <>
                
                At ProWell, we ensure your fitness
equipment operates flawlessly with our
comprehensive Annual Maintenance
Cover (AMC).<br/><br/>
Our experienced technicians conduct
an extensive 20-point inspection
and maintenance routine, covering
everything from deep cleaning to
precise adjustments, all aligned with
manufacturer(OEM) specifications.
                </>
              }
 fontFamily='CamptonLight'
              color="white"
              textAlign="left"
              margin="auto"
            />
            </Box>
         
          </Grid>
        


          <Grid xs={12}>
            <TypographyText
              Typography={"Highlights of AMC:"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
              fontFamily="Khand"
            />
            
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <img src={img1} alt="" width={"100%"} />
          </Grid>


          <Grid item xs={12} lg={8} md={8} sm={12} sx={{ margin: "auto" }}>
            {Accordn.map((data, index) => (
              <Accordion
                key={index}
                expanded={expandedIndex === index} // Check if this accordion is expanded
                onMouseEnter={() => setExpandedIndex(index)} // Expand on hover
                onMouseLeave={() => setExpandedIndex(null)} // Collapse when hover leaves
                sx={{
                  boxShadow: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <AccordionDetails>
                  <TypographyText
                    Typography={data.text1}
                    color="#D66A3A"
                    fontSize="1.5rem"
                    textAlign="left"
                    fontFamily="Khand"
                  />

                  <TypographyText
                    Typography={data.text2}
                    color="white"
                    textAlign={!isSmallScreen ? "left" : "centre"}
                    fontFamily="CamptonLight"
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Highlights;
const Accordn = [
  {
    onClick: "/vaha",
    text1: "Detailed Inspections and Adjustments ",
    text2: (
      <>
        From lubrication to alignment, we handle every detail to prevent
        downtime and extend equipment life.{" "}
      </>
    ),
  },
  {
    onClick: "/pent.",
    text1: "Expert Care",
    text2: (
      <>
        Our skilled teams are experts in maintaining a variety of fitness
        equipment, ensuring top performance and reliability.{" "}
      </>
    ),
  },
  {
    onClick: "/well",
    text1: "Flexible and Reliable Service",
    text2: (
      <>
        Benefit from scheduled quarterly maintenance, detailed service reports,
        and responsive breakdown support.
      </>
    ),
  },
  {
    onClick: "/movement",
    text1: "Annual Service Fee",
    text2: (
      <>
        Includes all routine maintenance checks and labour, with additional
        services and parts available at competitive rates.
      </>
    ),
  },
];
