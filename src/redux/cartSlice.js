import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    qty: 0,
  }
export const cartSlice=createSlice({
    name:'cart',
  initialState,
  reducers:{
       addtocart:(state, {payload})=>{
        state.cartItems=[...state.cartItems, { ...payload, qty:1 }];
        state.qty++;
       },
  }
})
export const {addtocart} = cartSlice.actions

export default cartSlice.reducer