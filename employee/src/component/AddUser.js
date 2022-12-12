import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import image from '../assets/home2.jpg'
import NavBar from './NavBar';



const initialValue = {
    name: '',
    username: '',
    email: '',
    phoneno: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;




const AddUser = () => {


   
useEffect(()=>{
    if(!localStorage.getItem('token')){
     navigate("/login");
    }
},[])

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phoneno } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat center fixed",width:"100%",height:"700px",backgroundSize:"cover"}}>
  <NavBar/>
        <Container>
            <Typography variant="h4" style={{fontWeight:"bold"}}>Add User</Typography>
            <FormControl >
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phoneno' value={phoneno} id="my-input" />
            </FormControl>
            <FormControl>
                <Button  variant="contained" style={{backgroundColor:"black",borderRadius:"25px",marginTop:"20px",width:"400px",marginLeft:"200px"}} onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
        </div>
    )
}

export default AddUser;