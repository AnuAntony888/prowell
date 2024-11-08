import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from "../../Assets/MOV5141.jpeg";
import img2 from "../../Assets/Movement_mfp-312.jpg";
import img3 from "../../Assets/55.jpg";
import img4 from "../../Assets/Cópia de Cópia de movement_air1 (1).jpg";
import { styles } from "./Style";
import ContForm from "../ContactUs/ContForm";
const Home3 = () => { const theme = useTheme(); // Get the theme object
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <React.Fragment>
      <Box sx={containerStyles4}>
        <Grid container spacing={2}>
   
          <Grid item xs={12} lg={12} md={12} sm={12} sx={{ margin: "auto" }}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <TypographyText
                Typography={
                  <>
                    Our
                    <span style={{ color: "#D66A3A" }}> Journey</span>
                  </>
                }
                variant={matches2 ? "h3" : "h4"}
           
                color="white"
                  fontFamily="Khand"
              />
             
            </div>
          </Grid>
          
          <Grid item xs={12}>
            <TypographyText
              Typography={
                <>
                
{/* At ProWell.Life, we create environments that inspire wellness. Born from a vision to blend innovative fitness solutions with holistic wellness, our goal is to provide high-quality services for individuals and organizations. From the initial design to final installation, we manage every aspect of the process to ensure exceptional results. Our spaces promote well-being, combining functionality with design to enhance the fitness experience. */}



                   In response to the heightened awareness of health risks from
                  sedentary lifestyles during the global pandemic, instead of
                  going for traditional gym routine, we crafted customized
                  fitness environments as per our needs. Leveraging our
                  connections within the fitness industry, we now curate
                  high-quality wellness experiences that blend functionality
                  with seamless design. <br />
                  <br />
                  Meticulously designed to meet each client’s health objectives,
                  our solutions integrate wellness effortlessly into a range of
                  environments, from corporate sectors to hotels and more. 
                </>
              }
 fontFamily='CamptonLight'
              color="white"
              textAlign="left"
              margin="auto"
            />
            <br/>    <br/>
          </Grid>


          <Grid item xs={2}></Grid>
          <Grid item xs={8} sx={{ ...styles.bgsearch1 }}>
          <Box sx={{ p: "5%" }}>
              <img
                src={img4}
                alt=""
                width="100%"
              />
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>


          <Grid item xs={12} lg={12} md={12} sm={12} sx={{ margin: "auto" }}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <TypographyText
                Typography={
                  <>
                    Our
                    <span style={{ color: "#D66A3A" }}> Mission</span>
                  </>
                }
                variant={matches2 ? "h3" : "h4"}
                // textAlign="left"
                color="white"
                      fontFamily="Khand"
              />
             
            </div>
          </Grid>
     
        
          <Grid item xs={12}>
            <TypographyText
              Typography={
                <>
                
                At Prowell.life, our mission is to inspire and empower individuals and organizations to embrace wellness by providing state-of-the-art equipment and innovative fitness solutions that seamlessly integrate into daily life. We believe in designing personalized wellness spaces that foster motivation, comfort, and long-term commitment to health. Our comprehensive approach ensures that every project is tailored to the unique needs of our clients, promoting an environment where wellness is accessible, effective, and transformative.
                  <br />
                  <br/>
Driven by our commitment to excellence, we blend cutting-edge design with practical functionality, crafting spaces that not only meet but exceed expectations. From boutique fitness centers to luxurious hotel gyms, our dedication to customer satisfaction extends beyond initial installation to include consistent support and maintenance. We strive to make wellness an essential, enjoyable part of life, offering solutions that are both innovative and rooted in industry expertise.


           </>
              }
          fontFamily='CamptonLight'
              color="white"
              textAlign="left"
              margin="auto"
            />
          </Grid>
        </Grid>
      </Box>

<ContForm/>

    </React.Fragment>
  );
};

export default Home3;
export const containerStyles4 = {
  pt: "5%",
  pl: "7%",
  pr: "7%",
  pb: "5%",
  margin: "0",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
};

const Data = [
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
