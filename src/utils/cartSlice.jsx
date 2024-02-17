import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //here dispatch an action is addItem & reducer fn is (state,action)=>{modify state of our cart}
    addItem: (state, action) => {

        //directly mutating the state  here
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

// export actions
export const { addItem,removeItem,clearCart } = cartSlice.actions;


// export reducer
export default cartSlice.reducer;
