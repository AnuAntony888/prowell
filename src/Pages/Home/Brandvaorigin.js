import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../Assets/26.png";
import img2 from "../../Assets/vaaa.png";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";
import { styles } from "./Style";
import ContForm from "../ContactUs/ContForm";

const Brandvaorigin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {/* {!isSmallScreen1 ? (
        <Box>
          <img
            src={
              "https://magazine.vaha.com/wp-content/uploads/2022/01/Meditations_Session_mit_dem_VAHA-1-1560x878.jpg"
            }
            alt="Your Alt Text"
            style={{
              width: "100%",
            }}
          />
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "#04336C",
              p: 0,
            }}
          >
            <Grid item xs={12}>
              <img src={img1} alt="" width={"100%"} />
            </Grid>

            <Grid item xs={12} lg={12} sm={12} md={12}>
              <Box sx={{}}>
                <TypographyText
                  Typography={"The Future of Fitness"}
                  fontSize={"1.2rem"}
                  textAlign="center"
                  color="white"
                  fontFamily="Khand"
                />
                <TypographyText
                  Typography={
                    <>
                      The VAHA interactive fitness mirror transforms any room
                      into a personal gym. Offering live and on-demand classes
                      across various fitness genres, from strength training to
                      yoga, the VAHA mirror is the perfect tool for personalized
                      workouts. With and 1:1 personal training sessions, VAHA
                      delivers fitness convenience and innovation for every home
                      and studio.
                    </>
                  }
                  fontFamily="CamptonLight"
                  textAlign="justify"
                  color="white"
                />{" "}
                <br />
                <DownloadBrochure />
                <br />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: "#EF6B33",
                padding: 0,
              }}
            >
              <TypographyText
                Typography={
                  <>
                    43-inch Full HD touchscreen with 65W speakers and brushed
                    aluminium finish
                    <hr />
                    Personalised workout plan and monthly progress call.
                    <hr />
                    24/7 access to hundreds of on-demand classes in 10+ fitness
                    genres
                    <br />
                  </>
                }
                fontFamily="CamptonLight"
                textAlign="left"
                color="white"
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
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
            marginTop: "60px",
            backgroundImage: `url(https://magazine.vaha.com/wp-content/uploads/2022/01/Meditations_Session_mit_dem_VAHA-1-1560x878.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
          }}
        >
          <Grid
            item
            lg={4.5}
            md={5}
            sm={6}
            xs={12}
            sx={{ paddingLeft: "0 !important" }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#04336C",
                paddingLeft: "0 !important",
              }}
            >
              <Grid item xs={12}>
                <img src={img1} alt="" width={"100%"} />
              </Grid>

              <Grid item xs={12} lg={12} sm={12} md={12} sx={{}}>
                <Box sx={{}}>
                  <TypographyText
                    Typography={"The Future of Fitness"}
                    fontSize={"1.2rem"}
                    textAlign="center"
                    color="white"
                    fontFamily="Khand"
                  />
                  <TypographyText
                    Typography={
                      <>
                        The VAHA interactive fitness mirror transforms any room
                        into a personal gym. Offering live and on-demand classes
                        across various fitness genres, from strength training to
                        yoga, the VAHA mirror is the perfect tool for
                        personalized workouts. With and 1:1 personal training
                        sessions, VAHA delivers fitness convenience and
                        innovation for every home and studio.
                      </>
                    }
                    fontFamily="CamptonLight"
                    textAlign="justify"
                    color="white"
                  />{" "}
                  <br />
                  <DownloadBrochure />
                  <br />
                </Box>
              </Grid>

              <Grid item xs={12} sx={{ backgroundColor: "#EF6B33" }}>
                <Box>
                  <TypographyText
                    Typography={
                      <>
                        43-inch Full HD touchscreen with 65W speakers and
                        brushed aluminium finish
                        <hr />
                        Personalised workout plan and monthly progress call.
                        <hr />
                        24/7 access to hundreds of on-demand classes in 10+
                        fitness genres
                        <br />
                      </>
                    }
                    fontFamily="CamptonLight"
                    textAlign="left"
                    color="white"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )} */}
      <Box>
        <Grid container spacing={0} sx={{
          ...styles.bgsearch,
          paddingTop:  "60px",
         }}>
          <Box sx={{ p: "5%" }}>
            <img
              src="https://magazine.vaha.com/wp-content/uploads/2022/01/Meditations_Session_mit_dem_VAHA-1-1560x878.jpg"
              alt=""
              width="100%"
            />
          </Box>
        </Grid>
        <Grid container spacing={0}
          sx={{
            marginTop:!isSmallScreen?'': '-150px',
            paddingBottom:'5%',
            paddingLeft:!isSmallScreen?'5%': '15%',
            paddingRight: !isSmallScreen?'5%': '15%',
           backgroundColor:' #1E1E1E '
        }}>
        <Grid
            item
            lg={9}
            md={11}
            sm={12}
            xs={12}
            sx={{
              paddingLeft: "0 !important",
             
            }}
          >
            <Grid
              container
              spacing={0}
              sx={{
                background: 'linear-gradient(to bottom, #04336C 50%, #EF6B33 50%)',
                padding:'5%'
        
              }}
            >
           

              <Grid item xs={12} lg={8} md={8} sm={12}>
                <Box sx={{margin:'auto'}}>
                <TypographyText
              Typography={<>Vaha</>}              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
              fontFamily="Khand"        
                      />
                  <TypographyText
                    Typography={"The Future of Fitness"}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    color="white"
                    fontFamily="Khand"
                  />
                  <TypographyText
                    Typography={
                      <>
                        The VAHA interactive fitness mirror transforms any room
                        into a personal gym. Offering live and on-demand classes
                        across various fitness genres, from strength training to
                        yoga, the VAHA mirror is the perfect tool for
                        personalized workouts. With and 1:1 personal training
                        sessions, VAHA delivers fitness convenience and
                        innovation for every home and studio.
                      </>
                    }
                    fontFamily="CamptonLight"
                    textAlign="justify"
                    color="white"
                  />{" "}
                  <br />
                  <DownloadBrochure />
                  <br />
                  <TypographyText
                    Typography={
                      <>
                        43-inch Full HD touchscreen with 65W speakers and
                        brushed aluminium finish
                        <hr />
                        Personalised workout plan and monthly progress call.
                        <hr />
                        24/7 access to hundreds of on-demand classes in 10+
                        fitness genres
                        <br />
                      </>
                    }
                    fontFamily="CamptonLight"
                    textAlign="left"
                    color="white"
                  />
         </Box>
              </Grid>
              <Grid item xs={12} lg={4} md={4} sm={12} sx={{margin:'auto'}}>
                <img src={img2} alt="" width={"100%"} />
              </Grid>
         
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <ContForm/>
    </>
  );
};

export default Brandvaorigin;
