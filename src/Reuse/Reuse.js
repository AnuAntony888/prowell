import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

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
        padding:props.padding,
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
      fontSize='1rem'
        onClick={handleDownload}
        bgcolor="rgba(19, 19, 20,.7)"
        
                      /> 
    </div>
  );
};

export default DownloadBrochure;




export const CardWithIcon = (props) => {
  return (
    <Card
      sx={{
        bgcolor: props.bgcolorcard,
        border: props.bordercard,
        // p: "2%",
        padding: props.paddingcard,
        minHeight: props.minHeight,
        margin: "auto",
        width: props.width,
        maxWidth: props.maxWidthcard,
        position: props.positioncard,
        height: "100%",
        borderRadius:'20px'
      }}
    >
      {props.Icon ? (
        <CardHeader
          subheader={props.subheader ? props.subheader : ""}
          title={<>{props.Icon}</>}
        />
      ) : (
        ""
      )}
      {props.img ? (
        <CardMedia
          component="img"
          image={props.img}
          sx={{ maxHeight: props.imgMaxHeight, objectFit: props.objectFit }}
          alt="green iguana"
        />
      ) : (
        ""
      )}
      <CardContent sx={{ padding: "5%", bgcolor: props.cardcontentbgcolor }}>
        <TypographyText
          component="div"
          variant={props.varianthead}
         fontSize={props.fontSize}
          textAlign="center"
          color={props.colorfirst}
               fontFamily="Khand"
          Typography={props.Typography}
   
        />
        {props.Typography1 ?
          <TypographyText
            color={props.colorcontent}
            // textAlign="centre"
            textAlign={props.textAligncardgintentportion}
    
            fontFamily='CamptonLight'
  
  
            variant={props.variant1}
            Typography={props.Typography1}
            fontSize={props.fontSize1}
          /> : ''}
        {props.Typography2 ? (
          <TypographyText
            color={props.colorcontent}
            // textAlign="centre"
            textAlign={props.textAligncardgintentportion}
            //  fontWeight='bolder'
            fontWeight="500"
            fontFamily="Khand-Regular"
            variant={props.variant1}
            Typography={props.Typography2}
            fontSize={props.fontSizetyp3}
          />
        ) : (
          ""
        )}

        {props.Buttonname ? (
          <Buttons
            Buttonname={props.Buttonname}
            color1={props.color1}
            fontSize={props.fontSize}
            color={props.color}
            bgcolor={props.bgcolor}
            bgcolor1={props.bgcolor1}
            float={props.float}
            textTransform={props.textTransform}
            width={props.btwidth}
            height={props.height}
            border={props.border}
            marginBottom={props.marginBottom}
            fontFamily="Khand-Bold"
            fontWeight="600"
          />
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
};

export const Form = (props) => { 
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const contactform = [
      { placeholder: "Name", name: "from_name", type: "text" },
      { placeholder: "Email Address", name: "email", type: "email" },
  
      { placeholder: "Message", name: "message", type: "text" },
      { placeholder: "Phone Number", name: "phone", type: "text" },
    ];
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_0auaq0i",
          "template_ewhgn0a",
          form.current,
          "IkNjveX3-qfxw3Pw4"
        )
        .then(
          (result) => {
            toast.success("Thank you for contact us", {
              position: "top-right",
              autoClose: 3000, // Duration in milliseconds
            });
          },
          (error) => {
            toast.error("hai", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: theme,
            });
            console.log(error.text);
          }
        );
      // Clear the form fields after submission
      form.current.reset();
    };
  return(             <Grid
    container
      spacing={2}
      sx={{
          padding: '5%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        height: '100%',
backgroundColor:'black'
 
      }}
  >
      <Grid item lg={12} md={12} xs={12} sm={12}
      sx={{zIndex:1,margin:'auto'}}>
       <Grid container sx={{}}>
       <Grid item xs={12}>
 

       <TypographyText
        Typography={<>Drop Us
          <span style={{color:'#D66A3A'}}> a Line</span></>}
        color="white"
        fontSize="2rem"
             fontFamily="Khand"
      />
      </Grid>
      <Grid item xs={12}>
<form action="" ref={form} onSubmit={sendEmail}>
        <Grid container>
          {contactform.map((data, index) => (
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ pr: "16px", pb: "16px" }}
            >
              {index === 2 ? (
                <textarea
                  fullWidth
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  required
                  style={{
                    height: "150px",
                    width: "100%",
                    border: "none",
             fontFamily:'CamptonLight',
               color:'white',
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
              ) : (
                <input
                  fullWidth
                  type={data.type}
                  name={data.name}
                    placeholder={data.placeholder}
           
                  required
                  style={{
                    height: "40px",
                    width: "100%",
                    border: "none",
                    color:'white',
                  fontFamily:'CamptonLight',
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12} sx={{ pr: "16px", pb: "16px" }}>
            <Button
              variant="contained"
              type="submit"
              className="button1"
              sx={{
                 bgcolor: " rgba(255, 255, 255, 0.1)",
                color: "white",
                textAlign: "left",
                textTransform: "capitalize",
                fontFamily:"Khand",
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
              </Grid>
          </Grid>
      </Grid>
 
      </Grid>)
}