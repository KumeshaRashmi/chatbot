import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { IoIosLogIn } from "react-icons/io";
import CustomizedInput from '../components/shared/CustomizedInput';
import {toast} from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const auth =useAuth();
  const handleSubmit =async (e :React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData =new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{
      toast.loading("Signing In",{id :"signup"});
      await auth?.signup(name,email ,password);
      toast.success("Signing Up successfully",{id :"signup"});

    }catch (error){
      console.log(error);
      toast.error("Signing Up Failed",{id :"signup"});
    }
    };

   useEffect(()=>{
    if(auth?.user){
      return navigate("/chat");
    }
   },[auth]);

  return (
  <Box width={"85%"} height={"100%"} display="flex" flex={1}>
    <Box padding={5} mt={2} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="front6.png" alt="Robot" style={{ width: "600px" }} />
      </Box>
      <Box  //form
      display={"flex"}
      flex={{ xs: 1, md: 0.5 }}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      ml={"auto"}
      mt={6}
      >
        <form 
        onSubmit={handleSubmit}
        style ={{
           margin: "auto",
           padding: "30px",
           boxShadow: "5px 5px 20px #e1bee7",
           borderRadius: "10px",
           border: "none",
        }}
        >
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          >
            <Typography
            variant="h4"
            textAlign="center"
            padding={2}
            fontWeight={600}
            >
              Signup
            </Typography>
            <CustomizedInput type ="text" name="name" label="Name"/>
            <CustomizedInput type ="email" name="email" label="Email"/>
            <CustomizedInput type="password" name ="password" label="password"/>
            
            <Button 
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "400px",
              borderRadius: 2,
              bgcolor: "#d500f9",
              color:"white",
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            endIcon={<IoIosLogIn />}
            >Signup</Button>
          </Box>

        </form>
      </Box>
  </Box>
  );

};
export default Signup;
