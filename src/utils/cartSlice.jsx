import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  deliveryFee: 50,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //here dispatch an action is addItem & reducer fn is (state,action)=>{modify state of our cart}
    addToCartItem: (state, action) => {
      //directly mutating the state  here
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
        toast.info(
          ` increased ${state.items[itemIndex].card.info.name} cart quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempItem);
        toast.info(`${action.payload.card.info.name} added to cart`, {
          position: "bottom-left",
        });
        console.log(tempItem);
      }

      localStorage.setItem("items", JSON.stringify(state.items));
      // state.items.push(action.payload);
    },

    increaseCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          cartQuantity: state.items[existingItemIndex].cartQuantity + 1,
        };

        toast.info("Increase item quantity", {
          position: "bottom-left",
        });
      } else {
        const tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProductItem);
        toast.success("Item  added to cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.card.info.id !== action.payload.card.info.id
        );

        state.items = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    removeFromCartItem: (state, action) => {
      // state.items.map((item) => {
      //   if (item.card.info.id === action.payload.card.info.id) {
      //     const nextCartItems = state.items.filter(
      //       (item) => item.card.info.id !== item.card.info.id
      //     );
      //     state.items == nextCartItems;
      //     toast.error("Item removed from cart", {
      //       position: "bottom-left",
      //     });
      //   }
      //   localStorage.setItem("items", JSON.stringify(state.items));
      //   return state;
      // });
      // state.items.pop();
      // state.items=state.items.filter((item)=>item.id!==action.payload.id)
    },

    totalAmount: (state) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, item) => {
          const {
            price = item.card.info.defaultPrice || item.card.info.price,
            cartQuantity,
          } = item;
          console.log(price);
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total/100;
    },

    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

// export actions
export const {
  addToCartItem,
  removeFromCartItem,
  clearCart,
  increaseCart,
  decreaseCart,
  totalAmount,
} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;
