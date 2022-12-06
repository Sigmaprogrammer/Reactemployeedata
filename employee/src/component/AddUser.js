import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate,Link } from 'react-router-dom';
import image from '../assets/home2.jpg'

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
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
        <nav className='navbar'>
        <div className='nav_icon'>
          <i className='fa fa-bars'> </i>
          </div>

          <div className='navbar__left'>
                 <a>   <Link to="/home" style={{ textDecoration:"none",color:"white"}} className="hv">Home</Link></a>
                 <a>   <Link to="/all" style={{ textDecoration:"none",color:"white"}}>Employeedata</Link></a>
                 <a>   <Link to="/add" style={{ textDecoration:"none",color:"white"}}>Add Employee</Link></a>
          </div>

          <div className='navbar__right'>
             <a>
              <i className='fa fa-power-off'> <Link to="/" style={{ textDecoration:"none",color:"white"}}>Logout</Link></i>
          </a>
</div>

  </nav>
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
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
        </div>
    )
}

export default AddUser;