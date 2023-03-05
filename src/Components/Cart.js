import React from 'react'
import { useSelector} from 'react-redux'
const Cart = () => {
    const {cartItems}=useSelector((state)=>state.cart)
    console.log(cartItems)
  return (
    <>
        <div className='container d-flex  justify-content-between flex-wrap py-5'>
                
         {cartItems.map((a)=>(
           <div className='card py-4'>
               <img className='sec2bx w-100' src={a.image} alt=''/>
               <h5 className='px-3'>{a.title}</h5>
               <p className='px-3'>{a.price}</p>
           </div>
        ))}
        </div>     
    </>
  )
}

export default Cart
