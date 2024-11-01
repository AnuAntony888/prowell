import React, { useState } from "react";
import { Buttons, TypographyText } from "../../Reuse/Reuse";
import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { containerStyles4 } from "./Home3";

import { useNavigate } from "react-router";
import img1 from '../../Assets/Cópia de Cópia de movement_air1 (1).jpg'
import img2 from '../../Assets/Movement_mfp-430.jpg'

const OurBrand = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = useState(0); // State for handling tab index

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Box sx={containerStyles4}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                {/* Content for the first grid item */}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                <div data-aos="zoom-in">
                  <img
                    src={
                      img1
                    }
                    alt=""
                    width="100%"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                <div data-aos="zoom-in">
                  <img
                    src={
                      img2
                    }
                    alt=""
                    width="100%"
                  />
                </div>{" "}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <TypographyText
                Typography={
                  <>
                    Our
                    <span style={{ color: "#D66A3A" }}> Brands</span>
                  </>
                }
                variant={matches2 ? "h3" : "h4"}
                textAlign="left"
                color="white"
                fontFamily="Khand"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <TypographyText
              Typography={
                <>
                  ProWell by MFF partners with leading brands to offer premium
                  fitness and wellness solutions.{" "}
                  <span style={{ fontWeight: 600 }}>Pent</span> specializes in
                  luxurious, handcrafted fitness equipment that seamlessly
                  blends aesthetics with functionality.{" "}
                  <span style={{ fontWeight: 600 }}>Vaha</span> {""}
                  introduces interactive fitness mirrors, transforming any room
                  into a personalized gym with live and on-demand workout
                  sessions. <span style={{ fontWeight: 600 }}>
                    Well System
                  </span>{" "}
                  delivers innovative recovery solutions with Hydrojet dry water
                  massage and red light therapy for enhanced relaxation and
                  wellness.<span style={{ fontWeight: 600 }}>Movement,</span> a
                  top Latin American brand, offers award-winning cardio and
                  strength equipment known for maximizing gym space and
                  delivering exceptional performance.
                </>
              }
              color="white"
              textAlign="left"
              margin="auto"
              fontFamily="CamptonLight"
            />
          </Grid>

          
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 1,
              }}
            >
              {/* Tab navigation */}
              <Tabs
                value={value}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="brand tabs"
                textColor="secondary"
                indicatorColor="secondary"
              >
                {Accordn.map((data, index) => (
                  <Tab
                    key={index}
                    label={data.text1}
                    sx={{
                      color: "#D66A3A",
                      fontFamily: "Khand",
                      fontSize: "1.2rem",
                      textTransform:'capitalize'
                    }}
                  />
                ))}
              </Tabs>

              {/* Tab Panels */}
              {Accordn.map((data, index) => (
                <TabPanel value={value} index={index} key={index}>
                  <Box sx={{ p: 2 }}>
                    <TypographyText
                      Typography={data.text2}
                      color="white"
             
                      textAlign="left"
                      fontFamily="CamptonLight"
                    />
                    <Buttons
                      Buttonname={"Read More"}
                      color="white"
                      textAlign="left"
                      onClick={() => navigate(data.onClick)}
                    />
                  </Box>
                </TabPanel>
              ))}
            </Box>
          </Grid>

    
        </Grid>
      </Box>

      {/******************Accordian*********************/}
    </React.Fragment>
  );
};

export default OurBrand;
const Accordn = [
  {
    onClick: "/vaha",
    text1: "Vaha",
    text2:
      "An interactive fitness mirror that transforms any room into a personal gym, offering live and on-demand classes. Perfect for personalized fitness routines, with real-time feedback and 1:1 training sessions.",
  },
  {
    onClick: "/pent.",
    text1: "PENT",
    text2:
      "Luxury meets functionality with handcrafted fitness equipment. Customizable designs ensure seamless integration into unique fitness spaces, combining exclusivity and top-notch performance.",
  },
  {
    onClick: "/well",
    text1: "Wellsystem",
    text2:
      "Provides Hydrojet dry water massage systems and DAYON red light therapy, which offer non-contact full-body massages and regeneration benefits. Ideal for fitness centers, spas, and wellness facilities.",
  },
  {
    onClick: "/movement",
    text1: "Movement",
    text2:
      "Known for their innovative EDGE and NEXT lines, Movement offers sleek cardio, strength, and functional fitness equipment. Their award-winning designs maximize space while delivering top durability and performance, widely used in commercial, boutique, and residential gyms.",
  },
];
const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
