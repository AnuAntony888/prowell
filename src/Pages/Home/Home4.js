
import { Box, Card, CardContent, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from "../../Assets/MOV5141.jpeg";
import img2 from "../../Assets/Movement_mfp-423.jpg";
import img3 from "../../Assets/Movement_mfp-312.jpg";
import { containerStyles4, Dataw } from "./Home3";

const Home4 = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          pl: "7%",
          pr: "7%",
          pt: "4%",
          pb: "4%",

          position: "relative",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          // backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          margin: 0,
          padding: "5%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

             backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with 90% opacity
            zIndex: 1, // Lower z-index for the overlay
          }}
        />
        <Grid container spacing={3} sx={{ zIndex: 2, position: "relative" }}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
          <Grid container spacing={2}>
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
                    Fitness & Wellness  
                    <span style={{ color: "#D66A3A" }}> Space Design</span>
                  </>
                }
                variant={matches2 ? "h3" : "h4"}
                       fontFamily="Khand"
                color="white"
              /><br />
              </div>
          </Grid>
          <Grid xs={12}>
          <br />
            <TypographyText
              Typography={<>Our Approach</>}
              color="white"
              variant={isSmallScreen ? "h4" : "h5"}
              fontFamily="Khand"
            />
        
          </Grid>
          {Data.map((data, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sm={6}
              key={index}
   
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                 color:'white',
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ margin: "auto" }}>
                  <TypographyText
                    Typography={data.txt}
                    fontSize={"1.5rem"}
                    textAlign="center"
                       fontFamily="Khand"
                    color="#D66A3A"
                  />
                  <TypographyText
                    Typography={data.txt1}
                          fontFamily='CamptonLight'
                    textAlign="left"
                    // color="white"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
  
        
          <Grid xs={12}>
          <br />
            <TypographyText
              Typography={<>Why Are We Your Best Choice</>}
              color="white"
              variant={isSmallScreen ? "h4" : "h5"}
              fontFamily="Khand"
            />
        
          </Grid>
          {Data1.map((data, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sm={4}
              key={index}
              sx={{}}
              data-aos="fade-left"
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ margin: "auto" }}>
                  <TypographyText
                    Typography={data.txt}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    color="#D66A3A"
                         fontFamily="Khand"
                  />
                  <TypographyText
                    Typography={data.txt1}
                           fontFamily='CamptonLight'
                    textAlign="left"
                    color="white"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>








      
      {/* <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",
          width: "100%",

          backgroundImage: `url(https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114137.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          padding: "5%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with 90% opacity
            zIndex: 1, // Lower z-index for the overlay
          }}
        />
        <Grid container sx={{ zIndex: 2, position: "relative" }} spacing={4}>
          <Grid xs={12}>
            {" "}
            <TypographyText
              Typography={<>Why Are We Your Best Choice</>}
              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
              margin="auto"
            />
          </Grid>
          {Data1.map((data, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sm={4}
              key={index}
              sx={{}}
              data-aos="fade-left"
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ margin: "auto" }}>
                  <TypographyText
                    Typography={data.txt}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    color="#D66A3A"
                  />
                  <TypographyText
                    Typography={data.txt1}
                    fontSize={".9rem"}
                    textAlign="left"
                    color="white"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
       
    </React.Fragment>
  );
};

export default Home4;
const Data = [
  {
    txt: "Design Philosophy ",
    txt1: "Our design philosophy focuses on seamlessly integrating aesthetics, functionality, comfort, and performance. This approach guarantees that each piece of equipment is not only effective and safe to use but also enhances the overall aesthetic appeal of the environment.",
  },
  { txt: 'Your Journey ', txt1: 'We take you on a detailed, step-by-step journey from space planning, equipment selection, and the integration of wellness areas through to installation. Our personalized process ensures that each of your specific needs is met, and your vision for the space is realized with precision.' }]
  const Data1 = [
    {
      txt: "360 Degree Wellness Solutions",
      txt1: "From initial design to final installation, we manage every detail to transform your vision of a wellness space into reality. We bring you access to equipment for cardio, strength, and functional training, making us the ideal wellness solutions provider.",
    },
    {
      txt: "Quality Execution ",
      txt1: "Our commitment to precision in both design and functionality ensures that your fitness studio is perfectly tailored to meet your expectations and specifications. Every detail is carefully crafted to deliver an exceptional fitness experience.",
    },
    {
      txt: "Outstanding After-Service",
      txt1: "We go beyond installation, offering ongoing support and maintenance to ensure your fitness facilities continue to perform at their peak.",
    },
  ];