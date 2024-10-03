import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [] ,
    quantity: 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
         addToCart: (state, action) => {
            const item = state.cartItems.find((p)=> p.id === action.payload.id)
            if(item){
                item.quantity+=1;
                item.price = item.oneQuantityPrice * item.quantity
              }else{
                const tempItem = {...action.payload, quantity: 1}
                //   state.cartItems.push(action.payload)
                state.cartItems.push(tempItem)

              };
              localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
         },
         removeFromCart: (state,action)=> {
            state.cartItems = state.cartItems.filter((p)=> p.id !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

         },
         decrement: (state, action) => {
           const itemIndex = state.cartItems.find((i) => i.id === action.payload.id);
           if(itemIndex.quantity > 1){
            itemIndex.quantity -= 1;
            itemIndex.price =   itemIndex.price - itemIndex.oneQuantityPrice
           } else if(itemIndex === 1){
            state.cartItems = state.cartItems.filter((i)=> i.id !== action.payload.id);
            
           }
           localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
         },
       
    },
});

export const {addToCart,removeFromCart,decrement} = CartSlice.actions;
export default CartSlice.reducer