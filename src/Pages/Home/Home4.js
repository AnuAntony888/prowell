import {
  Box,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { CardWithIcon, TypographyText } from "../../Reuse/Reuse";
import img1 from "../../Assets/MOV5141.jpeg";
import img2 from "../../Assets/Movement_mfp-423.jpg";
import img3 from "../../Assets/Movement_mfp-312.jpg";
import { containerStyles4, Dataw } from "./Home3";
import { styles } from "./Style";
import { Executivesearchtxe9 } from "./Textcontentall";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
const Home4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      <Grid container spacing={0} sx={{
        backgroundColor: "#1E1E1E",
        pt: "4%",
      }}>
        
        <Grid item xs={12}>
        <TypographyText
            Typography={
              <>
                Fitness & Wellness{" "}
                <span style={{ color: "#D66A3A" }}>Segments</span>
              </>
            }
            variant={matches2 ? "h3" : "h4"}
            fontFamily="Khand"
            color="white"
          />
            </Grid>
            
         
        </Grid>
      <Box
        sx={{
          pl: "7%",
          pr: "7%",
          pt: "4%",
          //  pb: "4%",
          backgroundColor: "#1E1E1E",
        }}
      >
        <Grid container spacing={0} sx={{ ...styles.bgsearch }}>
        
        <Grid item xs={12}>
            <Box sx={{ p: "5%" }}>
            <div data-aos="fade-up"
     data-aos-duration="3000">
              <img
                src={img2}
                alt=""
                width="100%"
                />
                </div>
            </Box>
            </Grid>
            
         
        </Grid>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          pl: "7%",
          pr: "7%",
          pt: "4%",
          position: "relative",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          margin: 0,
          padding: "5%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />
   
        <Grid item xs={12} sx={{ zIndex: 2 }}>
          <br />
          <TypographyText
            Typography={<>Our Approach</>}
            color="white"
            variant={isSmallScreen ? "h4" : "h5"}
            fontFamily="Khand"
          />
        </Grid>
        {Data.map((data, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sm={6}
            key={index}
            sx={{ zIndex: 2 }}
          >
            <CardWithIcon
              Icon={data.Icon}
              Typography={data.txt}
              fontSize={"1.5rem"}
              colorhead="white"
              colorcontent="white"
              Typography1={data.txt1}
              variant={matches ? "h4" : "h5"}
              width={data.width}
              bgcolorcard={"rgba(19, 19, 20,.7)"}
              bordercard="solid 2px #D66A3A"
              colorfirst="#D66A3A"
            />
            {/* <Card
                sx={{
                  borderRadius: "20px",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ margin: "auto" ,zIndex:2}}>
                  <TypographyText
                    Typography={data.txt}
                    fontSize={"1.5rem"}
                    textAlign="center"
                    fontFamily="Khand"
                    color="#D66A3A"
                  />
                  <TypographyText
                    Typography={data.txt1}
                    fontFamily="CamptonLight"
                    textAlign="left"
                    // color="white"
                  />
                </CardContent>
              </Card> */}
          </Grid>
        ))}

        <Grid item xs={12} sx={{ zIndex: 2 }}>
          <br />
          <TypographyText
            Typography={<>Why Are We Your Best Choice</>}
            color="white"
            variant={isSmallScreen ? "h4" : "h5"}
            fontFamily="Khand"
          />
        </Grid>

        {Data1.map((data, index) => (
          <Grid
            item
            lg={4}
            md={index == 0 || index == 1 ? 6 : 12}
            sm={index == 0 || index == 1 ? 6 : 12}
            xs={12}
            sx={{ zIndex: 2 }}
          >
            <CardWithIcon
              Icon={data.Icon}
              Typography={data.txt}
              colorhead="white"
              colorcontent="white"
              Typography1={data.txt1}
              variant={matches ? "h4" : "h5"}
              width={data.width}
              fontSize={"1.5rem"}
              bgcolorcard={"rgba(19, 19, 20,.7)"}
              bordercard="solid 2px #D66A3A"
              colorfirst="#D66A3A"
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Home4;
const Data = [
  {
    txt: "Design Philosophy ",
    txt1: "Our design philosophy focuses on seamlessly integrating aesthetics, functionality, comfort, and performance. This approach guarantees that each piece of equipment is not only effective and safe to use but also enhances the overall aesthetic appeal of the environment.",
  },
  {
    txt: "Your Journey ",
    txt1: "We take you on a detailed, step-by-step journey from space planning, equipment selection, and the integration of wellness areas through to installation. Our personalized process ensures that each of your specific needs is met, and your vision for the space is realized with precision.",
  },
];
const Data1 = [
  {
    txt: "360 Degree Wellness Solutions",
    txt1: "From initial design to final installation, we manage every detail to transform your vision of a wellness space into reality. We bring you access to equipment for cardio, strength, and functional training, making us the ideal wellness solutions provider.",
  },
  {
    txt: "Quality Execution ",
    txt1: "Our commitment to precision in both design and functionality ensures that your fitness studio is perfectly tailored to meet your expectations and specifications. Every detail is carefully crafted to deliver an exceptional fitness experience.",
  },
  {
    txt: "Outstanding After-Service",
    txt1: "We go beyond installation, offering ongoing support and maintenance to ensure your fitness facilities continue to perform at their peak.",
  },
];
