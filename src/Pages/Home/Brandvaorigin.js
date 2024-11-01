import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../Assets/25.png";
import img2 from "../../Assets/26.png";

import DownloadBrochure, { TypographyText } from "../../Reuse/Reuse";

const Brandvaorigin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
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
        // height :'100vh'
      }}
    >
      <Grid
        item
        lg={4}
        md={5}
        sm={6}
        xs={12}
        sx={{
          paddingTop: "10%",
          paddingBottom: "10%",
        }}
      >
        <Card
          style={{
            backgroundColor: "#04336C", // slight transparency
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
          }}
        >
          <CardMedia component="img" image={img2} alt="green iguana" />
          <CardContent>
            <TypographyText
              Typography={"Vaha"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
                fontFamily="Khand"
            />
            <TypographyText
              Typography={"Luxury Meets Functionality"}
              fontSize={"1.2rem"}
              textAlign="center"
              color="white"
                fontFamily="Khand"
            />

            <TypographyText
              Typography={
                " Luxury Meets Functionality PENT combines aesthetic design with functional fitness, offering luxurious handcrafted equipment that is pristine and practical. These exclusive equipment are highly customizable to seamlessly match the aesthetics of your unique space. PENT is the perfect match for the ones who appreciate exclusivity and expect top-notch performance from their equipment."
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
  );
};

export default Brandvaorigin;
