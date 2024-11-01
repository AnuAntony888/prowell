import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import { TypographyText, useScreenSize } from '../../Reuse/Reuse';
import img1 from '../../Assets/43.jpg'
import Home4 from '../Home/Home4';
import Home3 from '../Home/Home3';

const About = () => {
  const matches2 = useScreenSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
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

        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        margin: 0,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with slight transparency
          zIndex: 1,
        }}
      />

      <Grid
        item
        xs={12}
        lg={12}
        md={12}
        sm={12}
        sx={{
          zIndex: 2,
          margin: "auto",
        }}
      >
        <div data-aos="fade-up">
          <TypographyText
            Typography={<>About Us</>}
            color="white"
            variant={matches2 ? "h3" : "h4"}
              // fontWeight="600"
                 fontFamily="Khand"
          />
        </div>
      </Grid>
      </Grid>
      <Home3 />
  </React.Fragment>
  )
}

export default About