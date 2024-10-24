import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import img1 from "../../Assets/44.png";
import img2 from "../../Assets/43.jpg";
import img3 from "../../Assets/47.jpg";
import img4 from "../../Assets/45.jpg";
import img5 from "../../Assets/46.jpg";
import img6 from "../../Assets/42.jpg";
import img7 from "../../Assets/48.jpg";
import { TypographyText } from "../../Reuse/Reuse";

import { containerStyles4 } from "../Home/Home3";

const Motioncare = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{height: "100%",}}>
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
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: isSmallScreen ? "100vh" : "100%",
          }}
        >
          <Grid container spacing={2} sx={{ padding: "10%",height: "100%",}}>
            <Grid xs={12} lg={6} md={8} sm={12}
            sx={{height: "100%"}}>
              <Card
                style={{
                  height: "100%",
                  // top: "25%",
                  marginTop: "25%",
                  width: "100%",
                  backgroundColor: "#D66A3A", // slight transparency
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
                }}
              >
                <CardContent>
                  <img src={img1} alt="" width={"200px"} />
                  <TypographyText
                    Typography={"Precision in Motion"}
                    fontSize={"1.2rem"}
                    textAlign="center"
                    color="white"
                  />

                  <TypographyText
                    Typography={
                      <>
                        Motioncare Pilates offers high-quality equipment
                        designed for studios and fitness centres that focus on
                        core strength, flexibility, and posture. With options
                        including Cadillacs, Reformers, and Barrels, Motioncare
                        products provide ergonomic support and durability. They
                        are perfect for both professional studios and
                        residential setups, ensuring users get the most out of
                        their practice with precisionengineered equipment.
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

      <Grid
        container
        spacing={2}
  
      >
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <img src={img6} alt="" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Grid spacing={2}>
            {images.map((data, index) => (
              <Grid
                item
                xs={12}
                //   sx={{ padding: "20px" }}
              >
                <img src={data.img} alt="" width={"100%"} />
                <TypographyText
                  Typography={data.txt1}
                  fontSize={".9rem"}
                  textAlign="centre"
                  // color="white"
                />
              </Grid>
            ))}
          </Grid>
              </Grid>

 
            {images1.map((data, index) => (
                       <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={data.img} alt="" width={"100%"} />
                <TypographyText
                  Typography={data.txt1}
                  fontSize={".9rem"}
                  textAlign="centre"
                  // color="white"
                />
              </Grid>
            ))}
      
      </Grid>
    </React.Fragment>
  );
};

export default Motioncare;
const images = [
  { img: img4, txt1: "NEO Reformer" },
  {
    img: img5,
    txt1: "Modern Cadillac",
    },]
    const images1 = [
  { img: img7 ,txt1:'Home Compact Reformer'},
        { img: img3, txt1: 'ECO Combi chair' },
      
];