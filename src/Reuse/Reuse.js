import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import filePath from '../Assets/Prowell. Life Brochure.pdf'
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export const useScreenSize = () => {
  const theme = useTheme();
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return matches2;
};
export function TypographyText(props) {
  return (
    <Typography
      sx={{
        component: props.component,
        borderRight: props.borderRight,
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        paddingRight: props.paddingRight,
        paddingLeft: props.paddingLeft,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        fontWeight: props.fontWeight,
        transform: props.transform,
        margin: props.margin,
        fontFamily: props.fontFamily,
   fontStyle:'normal',
        // fontFamily: "'Poppins', sans-serif",
        marginTop: props.marginTop,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
   
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    >
      {props.Typography}
    </Typography>
  );
}

export function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      sx={{
        bgcolor: props.bgcolor,
        textTransform: props.textTransform,
        color: props.color,
        float: props.float,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        // fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        transform: props.transform,
        minWidth: "150px",
        // fontFamily: 'Lato',
        fontFamily: "Khand",
   fontWeight:'600',
        ":hover": {
          bgcolor: props.bgcolor1, // theme.palette.primary.main
          color: props.color1,
        },

        textTransform: "capitalize",
      }}
    >
      {props.Buttonname}
    </Button>
  );
}

export function ImageIcon(props) {
  const { icon: Icon, txt } = props;
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#F5F9FC",
          borderRadius: "20px",
          minWidth: "200px",
          color: "#D66A3A",
          textTransform: "capitalize",
        }}
      >
        {typeof Icon === "string" ? (
          <img
            src={Icon}
            alt="icon"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
        ) : (
          Icon && <Icon sx={{ color: "#D66A3A", marginRight: "8px" }} />
        )}
        {/* {Icon && <Icon sx={{color:'red'}} />}  */}
        &nbsp; {txt}
      </Button>
    </>
  );
}

export function Section2(props) {
  const matches2 = useScreenSize();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: "10%",
        pr: "10%",

        pt: props.pt,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        //  backgroundImage:`url(${props.backgroundImage})`
      }}
    >
      <Grid item xs={12}>
        <TypographyText
          Typography={props.text1}
          color="#04336C"
          variant={matches2 ? "h3" : "h4"}
          // fontWeight="600"
        />
      </Grid>

      <Grid item xs={12}>
        <br />
        <TypographyText Typography={props.text2} color="#6A7C92" />
      </Grid>
    </Grid>
  );
}


export function CardsSection(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  return (<>
   <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Added property to cover the background
          backgroundPosition: "center", // Added property to center the background
          padding: "6%",
          pt:isSmallScreen?'150px':isSmallScreen1?'170px':'100px',
          // minHeight:'75vh'
        }}
      >
   
         
            <Grid
              item
              lg={7}
              xs={12}
              md={7}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight:'50vh'
              }}
            >
              <Box sx={{}}>
                <TypographyText
                  Typography={      props.txt1}
                  color="white"
                  fontWeight="bolder"
                  fontSize={!isSmallScreen ? "39px" : "30px"}
                  textAlign={!isSmallScreen ? "left" : "centre"}
                  // variant={!isSmallScreen ? "h2" : "h3"}
                />
                <TypographyText
                  Typography={
             props.txt2
                  }
                  color="white"
                  textAlign={!isSmallScreen ? "left" : "centre"}
                />
              </Box>
            </Grid>
            <Grid item lg={5} xs={12} md={5} sm={12} sx={{ margin: "auto", minHeight:'50vh' }}>
              <img
                src={props.imges}
          alt=""
        height={!isSmallScreen ? '90%' : '80%'}
          width={!isSmallScreen ? '90%' : '80%'}
                style={{ margin: "auto" }}
              />
            </Grid>
       
    
      </Grid></>)
}




const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Prowell.%20Life%20Brochure.pdf`; // Path to the PDF
    link.download = 'Prowell. Life Brochure.pdf'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
         <Buttons
                        Buttonname={'Download Brochure'}
                        color="white"
                        textAlign='left'
                        onClick={handleDownload}
                      /> 
    </div>
  );
};

export default DownloadBrochure;




