import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/home" exact>EmployeeData</Tabs>
                <Tabs to="all" exact>All Employee</Tabs>
                <Tabs to="add" exact> Add Employee</Tabs>
                <Tabs to="/" exact style={{backgroundColor:"red",Color:"white", width:"100px",height:"40px",borderRadius:"25px"}}> Logout</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;