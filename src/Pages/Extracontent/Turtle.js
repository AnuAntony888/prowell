
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import img1 from "../../Assets/38.png";
import img2 from "../../Assets/39.png";
import img3 from "../../Assets/40.png";
import { TypographyText } from "../../Reuse/Reuse";

import { containerStyles4 } from "../Home/Home3";

const Turtle = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{}}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            position: "relative",
            width: "100%",

            paddingLeft: "5%",
            paddingRight: "5%",

            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "top",

            height: isSmallScreen ? "100vh" : "100%",
          }}
        >
          <Grid container spacing={2} sx={{ padding: "10%" }}>
            <Grid xs={12} lg={6} md={8} sm={12}>
              <Card
                style={{
                  // top: "25%",
                  marginTop: "25%",
                  width: "100%",
                  backgroundColor: "rgba(4, 51, 108, 0.7)", // slight transparency
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
                }}
              >
                <CardContent>
                  {/* <Avatar alt="Remy Sharp" src={img1} /> */}
                  <TypographyText
                    Typography={"TurTle Gym"}
                    fontSize={"2rem"}
                    textAlign="center"
                    color="white"
                  />
                  <TypographyText
                    Typography={"Fitness for Seniors"}
                    fontSize={"1.2rem"}
                    textAlign="center"
                    color="white"
                  />

                  <TypographyText
                    Typography={
                      <>
                        Turtle Gym is designed to cater to the unique fitness
                        needs of seniors. Offering lowimpact, ergonomic
                        equipment, Turtle Gym focuses on enhancing mobility,
                        flexibility, and strength while ensuring safety. The
                        isokinetic system helps maintain bone density and joint
                        flexibility, making it ideal for senior living
                        communities and healthcare centers.
                      </>
                    }
                    fontSize={".9rem"}
                    textAlign="left"
                    color="white"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

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
                      img3
                    }
                    alt=""
                    width="100%"
                  />
                  <TypographyText
                    Typography={'Ultra Quiet'}
                    fontSize={".9rem"}
  color="white"/>
                  
                </div>
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                <div data-aos="zoom-in">
                  <img src={img2} alt="" width="100%" />
                  <TypographyText
                    Typography={'TURTLEGYM PR'}
                    fontSize={".9rem"}
  color="white"/>
                  
                </div>{" "}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
            <TypographyText
              Typography={
                <>
                  Turtyle Gym is a modern fitness facility that focuses on
                  holistic health and sustainable practices. With a wide range
                  of state-of-the-art equipment and personalized training
                  programs, Turtyle Gym offers something for everyone, whether
                  you're looking to build strength, improve flexibility, or
                  enhance overall wellness. The gym also emphasizes eco-friendly
                  initiatives, creating a fitness environment that not only
                  supports individual goals but also encourages a mindful
                  approach to the planet's health. Through expert trainers and a
                  supportive community, Turtyle Gym aims to empower members to
                  achieve their fitness ambitions.
                </>
              }
              fontSize={".9rem"}
              textAlign="left"
              color="white"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Turtle;
