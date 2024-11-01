import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import img1 from "../../Assets/35.jpg";
import img2 from "../../Assets/27.png";
import img3 from "../../Assets/32.png";
import img4 from "../../Assets/31.png";
import img5 from "../../Assets/30.png";
import img6 from "../../Assets/29.png";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";

const BrandWell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const Data = [
    {
      src: img3,
      txt: "WELLSYSTEM WAVE_TOUCH",
    },
    {
      src: img4,
      txt: "WELLSYSTEM MEDWAVE_TOUCH",
    },
    {
      src: img5,
      txt: "LIGHTSPA PURE BEAUTY ",
    },
    {
      txt: "DAYON RECHARGE",
      src: img6,
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ height: isSmallScreen ? "100vh" : "fit-content" }}
      >
        {/* Left Grid (6 columns) */}
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={img1}
            alt="Left Side Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Grid>

        {/* Right Grid (6 columns) */}
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={img2}
            alt="Right Side Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          {/* Card on Top of Image */}
          <Card
            sx={{
              zIndex: 1,
              width: "80%",
              backgroundColor: "#B05B34", // Transparent background
              color: "white",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              marginTop: !isSmallScreen ? "100px" : "",
              marginBottom: !isSmallScreen ? "100px" : "",
            }}
          >
            <CardContent>
              <TypographyText
                Typography={"Well Sytem"}
                fontSize={"2rem"}
                textAlign="center"
                color="white"
                  fontFamily="Khand"
              />
              <TypographyText
                Typography={"Wellness Reimagined"}
                fontSize={"1.2rem"}
                textAlign="center"
                color="white"
                fontFamily="Khand"
              />
              <TypographyText
                Typography={
                  <>
                    Wellsystem offers a unique wellness experience through its
                    Hydrojet dry water massage and DAYON red light therapy. The
                    Hydrojet technology provides a non-contact, full-body
                    massage that soothes tension, improves circulation, and
                    boosts recovery. Available in Lounge, Spa, and Medical
                    versions, the Hydrojet system is perfect for fitness
                    centers, spas, and wellness facilities. This highly hygienic
                    and user-friendly system enhances relaxation and recovery.
                    <br />
                    <br />
                    Complementing this is DAYON’s red light and near-infrared
                    therapy, which accelerates regeneration, improves skin
                    health, and enhances performance. Wellsystem’s solutions are
                    designed for anyone seeking innovative, high-quality
                    wellness treatments, backed by over 25 years of expertise
                    and German engineering.
                  </>
                }
                  fontFamily='CamptonLight'
                textAlign="left"
                color="white"
              />
                   <DownloadBrochure />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ p: "2%" }}>
        {Data.map((data, index) => (
          <Grid item xs={6} lg={3} md={3} sm={6} key={index}>
            <Box sx={{ margin: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={data.src}
                alt="Paella dish"
              />
              
            </Box>

            <TypographyText Typography={data.txt} fontSize={".9rem"} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BrandWell;
