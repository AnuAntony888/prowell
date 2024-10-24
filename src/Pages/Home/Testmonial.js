import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { ImageIcon, Section2, TypographyText } from "../../Reuse/Reuse";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
};
const Testmonial = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundPosition: "centre",
          backgroundRepeat: "no-repeat",
          pl: "10%",
          pr: "10%",
          pt: "3%",
          pb: "2%",
          backgroundColor:'  rgba(255, 255, 255, 0.1)'
        }}
      >
        <Grid item xs={12}>
          <Section2 text1={<>Client <span
          style={{color:'#D66A3A'}}>Testmonial</span></>} />
        </Grid>
        <Grid item xs={12}>
          <Slider {...settings} className="slickheight">
            {Data.map((post, index) => (
              <div>
                <Card
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    backgroundImage:
                      "url(https://ryse.radiantthemes.com/wp-content/uploads/2020/03/testimonials-bg.png)",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      backgroundColor: "transparent",
                      margin: "auto",
                      justifyContent: "center",
                      position: "relative",
                      display: "flex", // Added display flex
                      flexDirection: "column", // Align items vertically
                      alignItems: "center", // Align items horizontally
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: "absolute",
                        width: "3rem",
                        height: "3rem",
                        color: "#D66A3A",
                        top: "5%",
                        left: "53%",
                        zIndex: 1, // Ensures it's above the avatar
                      }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={post.img}
                      sx={{ width: 150, height: 150 }}
                    />
                  </CardMedia>
                  <CardContent>
                    <TypographyText
                      Typography={post.text}
                      textAlign={"centre"}
                      fontSize=".9rem"
                      // color='white'
                    />
                    <br />

                    <TypographyText
                      Typography={post.txt1}
                      fontWeight="600"
                    // color='white'
                      fontSize="1.1rem"
                    />
                    <TypographyText
                      Typography={post.txt2}
                      color="#D66A3A"
                      fontSize=".9rem"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </>
  );
};

export default Testmonial;
const Data = [
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/Testimonial-new.jpg",
    text: '"ProWell.Life transformed our studio from a simple fitness space into a vibrant wellness hub. Their attention to detail, from the ergonomic layout to the state-of-the-art equipment, has elevated our client experience. The team was professional, efficient, and truly understood our vision. We’ve seen an increase in client retention since the redesign!"',
    txt1: "Kim ",
    txt2: "Product Manger",
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/Testimonial3.jpg",
    text: (
      <>
        "We chose ProWell.Life to design our resort’s fitness and wellness center, and the results exceeded our expectations. The equipment not only fits perfectly with our luxury aesthetic but also provides an outstanding wellness experience for our guests. Their after-installation support has been exceptional—ensuring everything runs smoothly even months after completion."
      </>
    ),
    txt1: "Sam ",
    txt2: "Product Manger",
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/Testimonial2.jpg",
    text: (
      <>
        "Vedaham exceeded our expectations when it came to branding our company.
        Their creative approach and attention to our vision resulted in a visual
        identity that perfectly encapsulated "Our employees have embraced the wellness center that ProWell.Life designed. The space is inviting, functional, and perfectly tailored to our corporate wellness goals. The team’s holistic approach, combining both fitness and wellness solutions, has had a profound impact on employee well-being and productivity."
      </>
    ),
    txt1: "Kim ",
    txt2: "Product Manger",
  },
];
