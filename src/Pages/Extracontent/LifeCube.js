import {
  Box,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import img1 from "../../Assets/LifeCube-1.jpg";
import img2 from "../../Assets/35.png";
import { TypographyText } from "../../Reuse/Reuse";

import { containerStyles4 } from "../Home/Home3";

const LifeCube = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
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
            backgroundPosition: "center",

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
                  <TypographyText
                    Typography={"LifeCube"}
                    fontSize={"2rem"}
                    textAlign="center"
                    color="white"
                  />
                  <TypographyText
                    Typography={"Revolutionizing Recovery"}
                    fontSize={"1.2rem"}
                    textAlign="center"
                    color="white"
                  />

                  <TypographyText
                    Typography={
                      " LifeCube introduces the next generation of cryotherapy with the Electric Cryo Chamber. Designed for optimal recovery and rejuvenation, this cutting-edge solution is ideal for wellness centers, sports facilities, and therapy centers. The compact and customizable design ensures safe and effective cold therapy, reducing muscle soreness, inflammation, and accelerating recovery. LifeCube elevates the cryotherapy experience for athletes and wellness seekers alike"
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={4} sm={12}>
            <Grid spacing={2}>
              {Data1.map((data, index) => (
                <Grid item xs={12} sx={{ padding: "20px" }}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      zIndex: 2,
                    }}
                  >
                    <CardContent sx={{ margin: "auto" }}>
                      <TypographyText
                        Typography={data.txt}
                        fontSize={"1.5rem"}
                        textAlign="center"
                        // color="#04336C"
                        color="#D66A3A"
                      />
                      <TypographyText
                        Typography={data.txt1}
                        fontSize={".9rem"}
                        textAlign="left"
                        // color="white"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={12} sx={{}} data-aos="fade-left">
            <img src={img2} alt="" width={"100%"} />
            <TypographyText
              Typography={"ELECTRIC CRYO CHAMBER"}
              fontSize={"1.5rem"}
              textAlign="center"
              color="#D66A3A"
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={12}>
            <Grid spacing={2}>
              {Data2.map((data, index) => (
                <Grid item xs={12} sx={{ padding: "20px" }}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      zIndex: 2,
                    }}
                  >
                    <CardContent sx={{ margin: "auto" }}>
                      <TypographyText
                        Typography={data.txt}
                        fontSize={"1.5rem"}
                        textAlign="center"
                        // color="#04336C"
                        color="#D66A3A"
                      />
                      <TypographyText
                        Typography={data.txt1}
                        fontSize={".9rem"}
                        textAlign="left"
                        // color="white"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default LifeCube;

const Data1 = [
  {
    txt: "LifeCube electric cryo chamber ",
    txt1: "The innovative and safe LifeCube expands your scope of services and offers hig sales potential through diverse application areas.",
  },

  {
    txt: "Application time only 3 minutes",
    txt1: "Equipped with protective clothing and an interactive app, just three minutes are enough to start seeing results",
  },
];

const Data2 = [
  {
    txt: " Up to -110°C",
    txt1: "Completely electrically, by means of a cooling unit, the LifeCube can, depending on the model, be cooled down to -110°C.",
  },

  {
    txt: "Customizable",
    txt1: "In addition to the standard models, you can also customize the LifeCube. You can adapt the cryo chamber both in terms of color and space.",
  },
];
