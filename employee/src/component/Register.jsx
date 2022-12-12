import React from 'react'
import Box from '@mui/material/Box';
import image from '../assets/loginbgs.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axiox from "axios";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        axiox
          .post("http://localhost:5000/api/auth/register", {
            email,
            password,
          })
          .then((response) => {
            console.log("response", response);
            localStorage.setItem(
              "login",
              JSON.stringify({
                userLogin: true,
                token: response.data.access_token,
              })
            );
            setError("");
            setEmail("");
            setPassword("");
            navigate("/login");
          })
          .catch((error) => setError(error.response.data.message));
      };
  return (

    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat center fixed",width:"100%",height:"700px",backgroundSize:"cover"}}>
       <br/>
      
        <h2 style={{fontWeight:"bold"}}>Register</h2>
        {/* <font style={{borderWidth:"10px",borderStyle:"double",borderColor:"white", fontSize:"20pt"}}>  
Register </font>   */}
        {error && <p style={{ color: "red" }}>{error}</p>}
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      Validate
      autoComplete="off"
      onSubmit={register}
    >
        
      <TextField
      id="username" 
      label="Enter your Email id" 
      variant="outlined" 
      type="text"
      value={email} 
      required
       onChange={(e) => setEmail(e.target.value)} />
      <br/>

      <TextField
       id="password"
        label="Create Password" 
        variant="outlined"
        type="password" 
        value={password}
        required
          onChange={(e) => setPassword(e.target.value)}
        />
      <br/>

      <Button  style={{width:"100px",borderRadius:"25px",backgroundColor:"black"}}  type="submit" variant="contained">Register</Button>
    </Box>
    <h3 style={{textAlign:"center"}}>
     If already....&nbsp;&nbsp;Register{" "}
     <Link style={{color:"white"}} to="/login">Login</Link>
     </h3>
    </div>
  )
}

export default Register