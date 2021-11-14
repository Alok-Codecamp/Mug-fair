import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageAllOrder = () => {
        const [allOrders,setAllOrders]=useState([])
        const [successDelete, setSuccessDelete]=useState(false)

        useEffect(()=>{
            fetch('https://morning-wildwood-92254.herokuapp.com/order')
            .then(res=>res.json())
            .then(data=>setAllOrders(data))
        },[])

        // handle cancle Order
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
                        const newData=allOrders.filter(order=>order._id!==id)
                        setAllOrders(newData)                   
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
           allOrders.map(order=><Order
           key={order._id}
           order={order}
           handleCancleOrder={handleCancleOrder}
           successDelete={successDelete}
           >

           </Order>)
          }
        </div>
    );
};

export default ManageAllOrder;