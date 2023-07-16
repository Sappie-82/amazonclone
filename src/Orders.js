import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import { db } from './firebase';
import Order from './Order';

function Orders() {
    const [{basket,user},dispath] = useStateValue();
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        if(user) {
            db.collection("users")
            .doc(user?.uid)
            .onSnapshot(snapshot => {
                setOrders({
                    id: snapshot.id,
                    data: snapshot.data()
                })
            })
        } else {
            setOrders([])
        }
    },[user])
   
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
       <Order order={orders}/>
        </div>
    </div>
  )
}

export default Orders