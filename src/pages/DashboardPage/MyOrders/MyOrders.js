import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import MyOrder from './MyOrder'
const MyOrders = () => {
      const [MyAllOrders,setMyAllOrders]=useState([])
      const [successDelete, setSuccessDelete]=useState(false)
        const {user}=useAuth();

        useEffect(()=>{
            fetch(`https://morning-wildwood-92254.herokuapp.com/order/${user.email}`)
            .then(res=>res.json())
            .then(data=>setMyAllOrders(data))
        },[])
        // delete order 
        const handleCancleOrder=(id)=>{
            const confirmation=window.confirm('confirm delete');
            if(confirmation){
                fetch(`https://morning-wildwood-92254.herokuapp.com/order/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        setSuccessDelete(true);
                        const newData=MyAllOrders.filter(order=>order._id!==id)
                        setMyAllOrders(newData)   
                    }
                })
            }
            else{
                alert('delete cancle')
            }
           
    
        }
    return (
        <div style={{marginLeft:'100px'}}>
            {
                MyAllOrders.length===0&&<h2>No Order placed yet</h2>
            }
          {
           MyAllOrders.map(order=><MyOrder
           key={order._id}
           order={order}
           handleCancleOrder={handleCancleOrder}
           successDelete={successDelete}
           setSuccessDelete={setSuccessDelete}
           >

           </MyOrder>)
          }
        </div>
    );
};

export default MyOrders;