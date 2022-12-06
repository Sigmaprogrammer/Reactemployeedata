import { useState, useEffect } from 'react';
import image from '../assets/home2.jpg'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

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
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        </div>
    )
}

export default AllUsers;