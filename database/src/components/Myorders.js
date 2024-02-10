import React, { useContext} from 'react'
import Navbar from './Navbar'
import NoteContext from '../context/NoteContext'
import Myorderitem from './Myorderitem'

export default function Myorders() {
  const context = useContext(NoteContext)
  const { orders} = context
    // const context = useContext(NoteContext)
    // const { myOrders,orders}  = context
    // useEffect(()=>{
    //     myOrders();
    // },[])
  return (
    <>
    <Navbar/>
    <div className='row'>
    {orders.map((users)=>{
       return <Myorderitem name={users.food_name} id={users.food_id} key={users.id}desc={users.food_description} price={users.food_price}/>

      })}
    </div>
    </>
  )
}
