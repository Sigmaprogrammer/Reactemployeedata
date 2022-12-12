import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom'
import Login from './component/Login';
import Register from './component/Register';
import AddUser from './component/AddUser'
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';
import DataTable from './component/DataTable/DataTable';

function App() {

  return (
    <div className="App">
              
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<DataTable />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/all' element={<AllUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
          <Route path='/register' element={<Register />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
