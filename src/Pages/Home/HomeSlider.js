import Slider from "react-slick";
import { Box, Grid, Typography } from "@mui/material";
import img1 from '../../Assets/MOVCROSS-043.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Form, TypographyText } from "../../Reuse/Reuse";

const slideData = [
  {
    id: 1,
    img: img1,
    title: "ProWell.Life By MFF",
    description: "Customized Fitness & Wellness Solutions for Inspiring Spaces",
  },
 
    {img:'http://prowell.life/static/media/35.6a4594248dfcca58d9e6.jpg',},
  {  title: "ProWell.Life By MFF",img:'https://magazine.vaha.com/wp-content/uploads/2022/01/Meditations_Session_mit_dem_VAHA-1-1560x878.jpg'}
  ,{
    id: 1,
    img: 'http://prowell.life/static/media/Movement_mfp-423.7e4ec8fabd420d6c2bfc.jpg',
    title: "ProWell.Life By MFF",
    description: "Customized Fitness & Wellness Solutions for Inspiring Spaces",
    },
];

function CustomArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }} // Hide the arrow
      onClick={onClick}
    />
  );
}

const HomeSlider = ({ isSmallScreen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

    return (
        <Grid
        container
        spacing={0}
      sx={{  bgcolor:'black',      margin: 0,

          paddingTop:'60px'
            }}>
                  <Grid
          item
          xs={12}
          lg={4}
          md={4} sm={4}
        sx={{margin:'auto',      height: '100vh',}}>
<Form/> 
          </Grid>
            <Grid item xs={8}>

    <Slider {...settings}>
      {slideData.map((slide) => (
        <Box
          key={slide.id}
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          {/* Dark overlay for contrast */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay for better text visibility
              zIndex: 1,
            }}
          />

          {/* Centered text content */}
          <Grid
            container
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 5%",
            }}
          >
            <Grid item xs={12}>
            <TypographyText
              Typography={<>ProWell.Life
By MFF</>}              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
              fontFamily="Khand"        
                      />
              <TypographyText
              Typography={
                <>
                  <br />
                  Customized Fitness & Wellness Solutions for Inspiring Spaces
                </>
              }
              color="white"
              fontSize={isSmallScreen ? "1.5rem" : '1.3rem'}
              fontFamily="Khand"
         
              fontWeight="500"
            />
            </Grid>
          </Grid>
        </Box>
      ))}
                </Slider>
                </Grid>
            </Grid>
  );
};

export default HomeSlider;
