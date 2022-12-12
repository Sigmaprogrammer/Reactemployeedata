import React from 'react'
import { useEffect, useState, useMemo } from "react";
import './DataTable.css'
import image from '../../assets/home2.jpg';
import NavBar from '../NavBar';
import { TableHeader, Pagination} from "./Action";
import { useNavigate} from "react-router-dom";
const DataTable = () => {

    const navigate = useNavigate();
    useEffect(()=>{
             if(!localStorage.getItem('token')){
              navigate("/login");
             }
        },[])
   


    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const ITEMS_PER_PAGE = 12;

    const headers = [
        { name: "#Id", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phoneno", field: "phoneno" }
    ];


    useEffect(() => {
        const getData = () => {

            fetch("http://localhost:3002/users")
                .then(response => response.json())
                .then(json => {
                    setComments(json);
                    console.log(json);
                });
        };

        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;


        setTotalItems(computedComments.length);

       
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

    



       
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, sorting]);









  return (
  
    <>


       <div className="row w-100" style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat center fixed",width:"100%",height:"700px",backgroundSize:"cover"}}>

       <NavBar/>
 <div className="col mb-3 col-12 text-center">

     <table className="table table-striped">
         <TableHeader
             headers={headers}
             onSorting={(field, order) =>
                 setSorting({ field, order })
             }
             
         />
         <tbody>
             {commentsData.map(comment => (
                 <tr>
                     <th scope="row" key={comment.id}>
                         {comment.id}
                     </th>
                     <td>{comment.name}</td>
                     <td>{comment.email}</td>
                     <td>{comment.phoneno}</td>
                 </tr>
             ))}
         </tbody>
     </table>

     <div className="row">
    
    <div className="col-md-6" style={{marginLeft:"30%",marginTop:"2%"}}>
        <Pagination 
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
        />
    </div>
</div>
 </div>
</div>
    </>
  )
}

export default DataTable