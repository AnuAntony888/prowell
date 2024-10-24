// import React from 'react'

// const Nootri = () => {
//   return (
//       <div>
          
//     </div>
//   )
// }

// export default
// Nootri;

import {
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
  import img1 from "../../Assets/33.jpg";
  import img2 from "../../Assets/36.png";
  
  
  import { TypographyText } from "../../Reuse/Reuse";
  
  const Nootri = () => {
    const theme = useTheme(); // Get the theme object
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  
    return (<>
        <Grid
          container
          spacing={0}
          sx={{
              height: "100%", bgcolor: "black",
            //   p: "2%",
            marginTop: '55px'
          }}
        >
          
          <Grid
            item
            lg={7}
            md={5}
            sm={6}
            xs={12}
            sx={{
              position: "relative",
              bgcolor: "whitesmoke",
      
            }}
          >
         
            <img
              src={img1}
              alt="Your Alt Text"
              style={{ width: "100%", height:isSmallScreen? "100%":'100vh' }}
            />
  
            {/* Card on top of the image */}
            <Card
              style={{
                position: "absolute",
                top: !isSmallScreen ? "20px" : "25%",
                left: "10%",
                width: "80%",
                backgroundColor: "#B05B34", // slight transparency
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // shadow for depth
              }}
            >
              <CardContent>
                <TypographyText
                  Typography={"Nootrie"}
                  fontSize={"2rem"}
                  textAlign="center"
                  color="white"
                />
                <TypographyText
                  Typography={"Nutrition Made Easy"}
                  fontSize={"1.2rem"}
                  textAlign="center"
                  color="white"
                />
                <TypographyText
                  Typography={
                                <>
                                Nootrie Blend introduces world’s first 
automated protein shake dispenser designed 
to simplify post-workout nutrition. With the 
touch of a button, users receive freshly 
prepared, perfectly portioned protein shakes. 
This system is perfect for gyms and health 
centers, offering a seamless way to manage 
nutrition for fitness enthusiasts and athletes. 
Nootrie Blend not only enhances user 
convenience but also improves recovery and 
performance.</>
                  }
                  fontSize={".9rem"}
                  textAlign="left"
                  color="white"
                />
              </CardContent>
            </Card>
            </Grid>
            <Grid item lg={5} md={7} sm={6} xs={12}>
       <img src={img2} alt="" width={'100%'}/>
          </Grid>
        </Grid>
  
    </>);
  };
  
  export default Nootri;
  
