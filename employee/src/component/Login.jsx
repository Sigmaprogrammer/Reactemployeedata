import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from '../assets/loginbgs.jpg'
import Button from '@mui/material/Button';
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axiox from "axios";

const Login = () => {
    // useEffect(()=>{
    //      if(!localStorage.getItem('login')){
    //       navigate("/login");
    //      }
    // },[])
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        axiox.post("http://localhost:5000/api/auth/login", {
            email,
            password,
          })
          // .then((response) => {
          //   console.log("response", response);
          //   localStorage.setItem(
          //     "login",
          //     JSON.stringify({
          //       userLogin: true,
          //       token: response.data.access_token,
          //     })
          //   );

          //   navigate("/")
          //   setError("");
          //   setEmail("");
          //   setPassword("");
          // })

          .then(result =>{
            console.log(result.data)
            localStorage.setItem('token', result.data.token);
            navigate('/')
          })
          
          .catch((error) => setError(error.response.data.message));
      };
  return (

    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat center fixed",width:"100%",height:"710px",backgroundSize:"cover"}}>

      <br/>
        <h1 style={{fontSize:"40px",fontFamily:"Josefin Sans, sans-serif",fontWeight:"bold"}}>Login</h1>
       <br/>
        {error && <p style={{ color: "red" }}>{error}</p>}
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={login}
    >
        
      <TextField
      id="username" 
      label="Username" 
      variant="outlined" 
      type="text"
      value={email} 
       onChange={(e) => setEmail(e.target.value)} />
      <br/>

      <TextField
       id="password"
        label="Password" 
        variant="outlined"
        type="password" 
        value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <br/>

      <Button  style={{width:"100px",borderRadius:"25px",backgroundColor:"black"}}  type="submit" variant="contained">Login</Button>
    </Box>
    <h3 style={{textAlign:"center"}}>
     Don't have an &nbsp;account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then please do{" "}
     <Link to="/register" style={{color:"white"}}>Register</Link>
     </h3>
    </div>
  )
}

export default Login