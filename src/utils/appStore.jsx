//S-1:- Build our Store
//S-2:- Provide this store to App Component
// S-3:-create a slice (cartSlice)
// S-4:- How to dispatch (an action)
// S-5:-  Read the data from slice(store by using selector)


// =================  S-1 ==========
import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "./cartSlice"
import { addItem } from "./cartSlice";

const appStore = configureStore({

    // reducer:- Big Reducer is our App reducer
    reducer:{
        cart:cartReducer,  //cartReducer:- small Reducer for each slice &  cart:- a slice
        // user: userReducer,
    },
    
});

export default appStore;
