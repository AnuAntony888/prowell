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
        lg={4.5}
        md={5}
        sm={6}
        xs={12}
        sx={{
          paddingTop: "10%",
          paddingBottom: "10%",
        }}
      >
        <Grid container spacing={2} sx={{
           backgroundColor: "#04336C",
        }}>
  <Grid item xs={12}>
   <img src={img1}  alt="" width={'100%'}/>
          </Grid>
          
  <Grid item xs={12} sx={{p:'3%'}}>
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
                The VAHA interactive fitness mirror transforms 
any room into a personal gym. Offering live 
and on-demand classes across various 
fitness genres, from strength training to 
yoga, the VAHA mirror is the perfect tool for 
personalized workouts. With and 1:1 personal 
training sessions, VAHA delivers fitness 
convenience and innovation for every home 
and studio.</>
              }
             fontFamily='CamptonLight'
              textAlign="left"
              color="white"
            />
                   <DownloadBrochure />
          </Grid>
          <Grid item xs={12} sx={{ backgroundColor: '#EF6B33' }}>
            <Box sx={{pr:'2%',pb:'2%'}}>
            <TypographyText
              Typography={
                <>
                  43-inch Full HD touchscreen with 65W 
                  speakers and brushed aluminium finish
                    <hr />
                    Personalised workout plan and monthly 
                    progress call.
                    <hr />
                    24/7 access to hundreds of on-demand 
                    classes in 10+ fitness genres
                    <br/>
                </>
              }
             fontFamily='CamptonLight'
              textAlign="left"
              color="white"
            />
            </Box>
         
            </Grid>
          
        </Grid>  
        {/* <Card
          style={{
            backgroundColor: "#04336C", // slight transparency
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
          }}
        >
      
          <CardMedia component="img" image={img2} alt="green iguana" style={{ width:'100%'}}/>
          <CardContent>
            <TypographyText
              Typography={"Vaha"}
              fontSize={"2rem"}
              textAlign="center"
              color="white"
                fontFamily="Khand"
            />
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
                The VAHA interactive fitness mirror transforms 
any room into a personal gym. Offering live 
and on-demand classes across various 
fitness genres, from strength training to 
yoga, the VAHA mirror is the perfect tool for 
personalized workouts. With and 1:1 personal 
training sessions, VAHA delivers fitness 
convenience and innovation for every home 
and studio.</>
              }
             fontFamily='CamptonLight'
              textAlign="left"
              color="white"
            />
                   <DownloadBrochure />
          </CardContent>

        </Card> */}
      </Grid>
    </Grid>
  );
};

export default Brandvaorigin;
