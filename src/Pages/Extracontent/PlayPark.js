import React, { useEffect } from "react";
import LocalFileDownloader, {
  TypographyText,
  useScreenSize,
} from "../../Reuse/Reuse";
import {
  Box,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img1 from "../../Assets/49.jpg";
import img2 from "../../Assets/53.png";
import img3 from "../../Assets/52.jpg";
import DownloadBrochure from "../../Reuse/Reuse";
import Highlights from "./Highlights";

const PlayPark = () => {
  const matches2 = useScreenSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid container spacing={0} sx={{}}>
         <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}

          sx={{backgroundColor:'black'}}
         
        >
          <Grid container spacing={2} sx={{ padding: "10%" }}>
            <Grid
              xs={12}
              lg={12}
              md={8}
              sm={12}
              sx={{
                height: "100%",
              }}
            >
              <Card
                style={{
                  // top: "25%",
                  marginTop: "25%",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#04336C", // slight transparency
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
                }}
              >
                <CardContent>
                  <TypographyText
                    Typography={"KocakPark"}
                    fontSize={"2rem"}
                    textAlign="center"
                    color="white"
                  />
                  <TypographyText
                    Typography={"Outdoor Fitness Solutions"}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    // color="#04336C"
                    color="white"
                  />
                  <TypographyText
                    Typography={
                      <>
                        Kocakpark specializes in designing outdoor fitness and
                        playground equipment that fosters community wellness and
                        physical activity. Their durable, high-quality equipment
                        is ideal for parks, schools, and residential spaces,
                        promoting safe, engaging outdoor fitness environments
                        for all ages
                      </>
                    }
                    fontSize={".9rem"}
                    textAlign="left"
                    color="white"
                  />
                  <DownloadBrochure />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid> 
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
      
        >
         <img src={img3}  alt="" width={'100%'} height={'100%'}/>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
      
        >
         <img src={img1}  alt="" width={'100%'} height={'100%'}/>
        </Grid>
        <Grid   lg={6}
          md={6}
          sm={12}
          xs={12}

          sx={{backgroundColor:'#000000'}}
        >
        <Grid container spacing={2} sx={{ padding: "10%" }}>
            <Grid
              xs={12}
              lg={12}
              md={8}
              sm={12}
              sx={{
                height: "100%",
              }}
            >
              <Card
                style={{
                  // top: "25%",
                  marginTop: "25%",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#EB6E36", // slight transparency
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
                }}
              >
                <CardContent>
           
                  <img src={img2} alt="" width={'100px'}/>
                  <TypographyText
                    Typography={"Global Standards in Sports Equipment"}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    // color="#04336C"
                    color="white"
                  />
                  <TypographyText
                    Typography={
                      <>
                        By partnering with Bison, Inc., we are bringing
                        internationally recognized, high-performance sports
                        equipment to schools, sports complexes, and professional
                        venues. With Bison’s FIBA-approved basketball systems
                        and NFHS-compliant soccer goals, we ensure that every
                        installation meets the highest global standards for
                        safety, durability, and performance. Together, we are
                        elevating the sporting experience for athletes of all
                        levels by providing cutting-edge equipment that is
                        trusted worldwide
                      </>
                    }
                    fontSize={".9rem"}
                    textAlign="left"
                    color="white"
                  />
                  <DownloadBrochure />
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        </Grid>
      </Grid>
      <Highlights/>
    </div>
  );
};

export default PlayPark;

