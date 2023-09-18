import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => {
    return {
      products: [
        {
          id: "001",
          name: "Nike sports shoes",
          category: "Footwear",
          price: 400,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
        {
          id: "002",
          name: "Nike sports shoes",
          category: "Footwear",
          price: 500,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
        {
          id: "003",
          name: "Nike sports shoes",
          category: "Footwear",
          price: 600,
          image: "",
          count: 0,
        },
        {
          id: "004",
          name: "Nike sports shoes",
          category: "Footwear",
          price: 700,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
        {
          id: "005",
          name: "Nike sports shoes",
          category: "Footwear",
          price: 800,
          image: "",
          count: 0,
        },

        {
          id: "001",
          name: "Nike sports shoes",
          category: "Clothing",
          price: 900,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
        {
          id: "002",
          name: "Nike sports shoes",
          category: "Clothing",
          price: 1000,
          image: "",
          count: 0,
        },
        {
          id: "003",
          name: "Nike sports shoes",
          category: "Clothing",
          price: 1200,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
        {
          id: "004",
          name: "Nike sports shoes",
          category: "Clothing",
          price: 1500,
          image: "",
          count: 0,
        },
        {
          id: "005",
          name: "Nike sports shoes",
          category: "Clothing",
          price: 1700,
          image:
            "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          count: 0,
        },
      ],
    };
  },

  getters: {
    getProducts: (state) => state.products,
  },
});
