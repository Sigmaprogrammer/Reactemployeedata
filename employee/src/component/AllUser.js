import { useState, useEffect } from 'react';
import image from '../assets/home2.jpg'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import {useNavigate,Link } from 'react-router-dom';
import NavBar from './NavBar';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
         navigate("/login");
        }
    },[]);

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat center fixed",width:"100%",height:"700px",backgroundSize:"cover"}}>
       <NavBar/>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phoneno}</TableCell>
                        <TableCell>
                            <Button variant="contained " style={{marginRight:10,backgroundColor:"black" ,color:"white"}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button  variant="contained" style={{backgroundColor:"red" ,color:"white"}} onClick={() => deleteUserData(user.id)}>Delete</Button> 
                            
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        </div>
    )
}

export default AllUsers;