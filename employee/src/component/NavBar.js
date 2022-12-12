import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
        <div className='nav_icon'>
          <i className='fa fa-bars'> </i>
          </div>

          <div className='navbar__left'>
                 <a>   <Link to="/" style={{ textDecoration:"none",color:"white"}} className="hv">Home</Link></a>
                 <a>   <Link to="/all" style={{ textDecoration:"none",color:"white"}}>Employeedata</Link></a>
                 <a>   <Link to="/add" style={{ textDecoration:"none",color:"white"}}>Add Employee</Link></a>
          </div>

          <div className='navbar__right'>
             <a>
             <i className='fa fa-power-off'>  <button style={{ textDecoration:"none",color:"white",backgroundColor:"black"}} onClick={()=>{localStorage.removeItem('token')}}>
              <Link to="/login" style={{ textDecoration:"none",color:"white"}}>Logout</Link> 
              </button></i>
          </a>
</div>

  </nav>
    </div>
  )
}

export default NavBar