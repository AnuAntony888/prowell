import { Card, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import img1 from "../../Assets/2.png";

const Home2 = () => {
    const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <React.Fragment>
          <Grid container spacing={2} sx={{
       pl: "7%",
       pr: "7%",pt:'4%',pb:'4%',
            //   bgcolor: "rgba(0, 0, 0, 0.8)"
          }}>
        <Grid
          item
          xs={12}
          //   sx={{}}
        >
          <Grid container spacing={2}>
            <Grid item lg={12} md={5} sm={6} xs={10}>
          
                <TypographyText
                  Typography={<>ProWell.Life <span style={{color:'#D66A3A'}}>By MFF</span></>}
                               
                                  color='#04336C'
                   variant={isSmallScreen ? "h3" : "h4"}
       
                   fontFamily="Khand"
         
                   
                              textAlign='left'
                />
              {/* </Card> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}  lg={7} sm={12}>
          <TypographyText
            Typography={
              <>
                At ProWell, we believe that gyms can be much more than a fitness
                room— we design spaces that inspire, motivate, and support the
                well-being of every individual. Every workout environment we’ve
                created is as dynamic and engaging as the workouts themselves.
                <br />
                <br />
                ProWell was born from our commitment to blend innovative fitness
                solutions with comprehensive wellness offerings. Our vision is
                to provide tailored services that support the well-being of
                individuals and organizations by offering state-ofthe-art
                equipment, expert designed ergonomic setup, and a strong
                commitment to customer care. <br />
                <br />
                Through our Standard Operating Procedures (SOPs), we ensure
                consistency, quality, and client satisfaction across every
                project, guiding customers from concept to execution, and
                extending well beyond installation. Whether it is a boutique
                gym, community gym space, resorts and spas, or luxury penthouses
                & villas, our comprehensive approach covers every detail for all
                wellness spaces.
                <br />
                <br />
                Our mission is to inspire and empower individuals and
                organizations to embrace wellness by providing state-of-the-art
                equipment and innovative fitness solutions that are accessible,
                effective, and designed to integrate seamlessly into daily life.
              </>
            }
            // fontSize={".9rem"}
            textAlign="left"
            margin="auto"
       fontFamily='CamptonLight'
          />
        </Grid>
        <Grid item lg={5} md={5} xs={12} sm={12} >
          <img src={img1} alt="" width={"100%"} style={{ margin: "auto" }} />
              </Grid>
              
      </Grid>
    </React.Fragment>
  );
};

export default Home2;
