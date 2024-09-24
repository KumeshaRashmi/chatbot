import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <Box
    sx={{
      width: "100%",
      minHeight: "100vh",
      bgcolor: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#fff",
      overflowX: "hidden",
    }}
  >
    <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 0,
        }}
      >
        <Box  //banner
          sx={{
            display: "flex",
            width: "100%",
            height:"600px",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(img4.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            bgcolor: "transparent",
            mx: "auto",
            mt: 0,
            gap: 0,
          }}
        >

          
      <Box
        sx={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",  
        alignItems: "center",          
        pl: "5rem",                    
        textAlign: "left",             
       }}
      >
      <TypingAnim /> 
      </Box>
          
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}> 
            <img //chatbot image on the banner
              src="front5.png"
              alt="chatbot"
              style={{
                width: isBelowMd ? "100%" : "75%",
                borderRadius: 0,
                padding: 0,
              }}
            />
          </Box>
          <Button //get started here button
          variant="contained"
          sx={{
            bgcolor: "#a445ff",
            borderRadius: "20px",
            position: "absolute",
            bottom: 150,
            left: "20%",
            transform: "translateX(-50%)",
            px: 5,
            py: 2,
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#8839c3",
            },
          }}
          onClick={handleSignupClick}
         >
         Get Started here
        </Button>
        </Box>

        <Box
        sx={{
          width: "100%",
          minHeight: "20vh",
          bgcolor: "#212121",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          py: "3rem",
          px: "2rem",
          mx:"10rem",
          pr :"20rem"
        }}
      >
       <Box
  sx={{
    
    alignItems: "center", 
    //textAlign: "center",
    maxWidth: "700px",  
    mx: "15rem",          
    perspective: "1500px",  
  }}
>
  <img
    src="front6.png"
    alt="service"
    width="100%"
    style={{
      transform: "rotateY(15deg) scale(1.1)",  
      transition: "transform 0.5s ease",      
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",  
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "rotateY(25deg) scale(1.2)";  
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "rotateY(15deg) scale(1.1)";  
    }}
  />
</Box>
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            maxWidth: "500px",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
          Smart, Fast, and Reliable  Personalized AI Assistant
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
          Say goodbye to endless searching with Kumiai-Bot! Fast, smart, and always ready, Kumiai-Bot provides the information you need in seconds.  
          </Typography>
        </Box>
      </Box>
        <Box
          sx={{
            width: "100%",
            height: "700px",
            display: "flex",
            backgroundImage :"url(backt.jpg)",
            bgcolor: "#4a148c",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 0,
            my: 0,
          }}
        >
          <Card sx={{ maxWidth: 500, margin: "auto", borderRadius: "1rem" }}>
            <CardMedia
              component="img"
              alt="service image"
              height="400"
              image="back3.png"
            />
  
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Explore the power of AI with our MERN-based chatbot. Powered by 
              MongoDB, Express, React, and Node.js, this chatbot offers smart, 
              fast, and reliable solutions in real-time. Engage now and simplify 
              your search for knowledge, advice, and more.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "#8a2be2", margin: "auto" }}
                onClick={handleSignupClick}
              >
                Sign Up
              </Button>
            </CardActions>

            </Card>
            <Card sx={{ maxWidth: 500, margin: "auto", borderRadius: "1rem" }}>
            <CardMedia
              component="img"
              alt="service image"
              height="400"
              image="back4.png"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Engage now and simplify your search for knowledge, advice, and more. Kumiai-Bot provides instant responses, helping you find what you need in seconds.Got a question? Kumiai-Bot will respond in seconds!Let me help you find the knowledge you need—quick, simple, and efficient!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "#8a2be2", margin: "auto" }}
              >
                Login
              </Button>
            </CardActions>
          </Card>
          
        </Box>
        
        <Box sx={{ display: "flex", backgroundColor: "#e0e0e0", mx: "auto" }}>
          
          <img
            src="home1.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 10px #673ab7",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
