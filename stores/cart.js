import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [],
    };
  },

  getters: {
    getCart: (state) => state.cart,
  },

  actions: {
    addToCart(item) {
      this.cart.push({ item });
    },
  },
});
