import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from "../../Assets/34.jpg";
import img2 from "../../Assets/25.png";
const Home3 = () => { const theme = useTheme(); // Get the theme object
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
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
                      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      img1
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
                    <span style={{ color: "#D66A3A" }}>Journey</span>
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
                
{/* At ProWell.Life, we create environments that inspire wellness. Born from a vision to blend innovative fitness solutions with holistic wellness, our goal is to provide high-quality services for individuals and organizations. From the initial design to final installation, we manage every aspect of the process to ensure exceptional results. Our spaces promote well-being, combining functionality with design to enhance the fitness experience. */}



                   In response to the heightened awareness of health risks from
                  sedentary lifestyles during the global pandemic, instead of
                  going for traditional gym routine, we crafted customized
                  fitness environments as per our needs. Leveraging our
                  connections within the fitness industry, we now curate
                  high-quality wellness experiences that blend functionality
                  with seamless design. <br />
                  <br />
                  Meticulously designed to meet each client’s health objectives,
                  our solutions integrate wellness effortlessly into a range of
                  environments, from corporate sectors to hotels and more. 
                </>
              }
 fontFamily='CamptonLight'
              color="white"
              textAlign="left"
              margin="auto"
            />
          </Grid>






          <Grid item xs={12} lg={4} md={5} sm={12} sx={{ margin: "auto" }}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <TypographyText
                Typography={
                  <>
                    Our
                    <span style={{ color: "#D66A3A" }}> Mission</span>
                  </>
                }
                variant={matches2 ? "h3" : "h4"}
                textAlign="left"
                color="white"
                      fontFamily="Khand"
              />
             
            </div>
          </Grid>
          <Grid item xs={12} lg={8} md={7} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                {/* Content for the first grid item */}
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
                </div>
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                <div data-aos="zoom-in">
                  <img
                    src={
          'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    }
                    alt=""
                    width="100%"
                  />
                </div>{" "}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}></Grid>
            </Grid>
          </Grid>
        
          <Grid item xs={12}>
            <TypographyText
              Typography={
                <>
                
                Our mission is to inspire and empower individuals and organizations to embrace wellness by providing cutting-edge equipment and personalized fitness solutions. We focus on creating seamless integrations of fitness into daily life, ensuring that our offerings not only meet but enhance the well-being of those we serve.



           </>
              }
          fontFamily='CamptonLight'
              color="white"
              textAlign="left"
              margin="auto"
            />
          </Grid>
        </Grid>
      </Box>

      {/*************Why Are We Your Best Choice*********************/}
{/* 
      <Grid
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
          padding:'5%'
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
                          Typography={<>Why Are We Your
                              Best Choice</>}
              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
       
              margin="auto"
            />
          </Grid>
          {Data.map((data, index) => (
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

export default Home3;
export const containerStyles4 = {
  pt: "5%",
  pl: "7%",
  pr: "7%",
  pb: "5%",
  margin: "0",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
};

const Data = [
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
