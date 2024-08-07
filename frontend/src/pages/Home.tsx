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
    <Box width={"100%"} height={"100%"} //full home page
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
    
          
          <Box //typing letters animation
          sx={{ flex: 1 , display: "flex", justifyContent: "center" ,alignItems: "center",pr: "2rem", top:20  }}> 
            <TypingAnim /> 
          </Box>
          
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}> 
            <img //chatbot image on the banner
              src="front5.png"
              alt="chatbot"
              style={{
                width: isBelowMd ? "100%" : "90%",
                borderRadius: 0,
                padding: 0,
              }}
            />
          </Box>
          <Button //get started here button
          variant="contained"
           sx={{
             bgcolor: "#d500f9",
             borderRadius: 5,
             position: "absolute",
             bottom: 200,
             left: "20%",
             transform: "translateX(-50%)",
             px: 4,
             py: 1,
             "&:hover": {
               bgcolor: "#8e24aa",
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
            height: "700px",
            display: "flex",
            bgcolor: "black",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 0,
            my: 0,
          }}
        >
          <Card sx={{ maxWidth: 500, margin: "auto", borderRadius: "1rem" }}>
            <CardMedia
              component="img"
              alt="service image"
              height="300"
              image="back3.png"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                We are excited to have you here! Embark on a journey with us and
                unlock a world of exclusive features and unparalleled
                experiences. Our platform is designed to cater to your needs,
                whether you're looking to connect, learn, or explore. Sign up
                today and become part of a thriving community where
                opportunities are endless, and every moment is a chance to
                shine. Sign up today to get access to exclusive features and
                content. Join our community and start exploring the amazing
                benefits we offer.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "#8a2be2", margin: "auto" }}
              >
                Sign Up
              </Button>
            </CardActions>
          </Card>
          <img
            //className="image-inverted rotate"
            //src="logo.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        
        <Box sx={{ display: "flex", backgroundColor: "white", mx: "auto" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="back2.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <img
            src="back1.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              //boxShadow: "-5px -5px 105px #64f3d5",
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
