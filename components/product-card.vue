<template>
  <pre>{{ getCartProducts }}</pre>
  <div class="flex mx-16 border border-black">
    <div class="bg-gray-400 w-5/12 border-r border-black">
      <img :src="product.image" :alt="name" class="p-6" />
    </div>
    <div class="w-7/12 p-6">
      <div>
        <h1>{{ product.name }}</h1>
        <h2 class="mt-2">{{ product.price }}</h2>
      </div>
      <div class="flex mt-4 gap-3">
        <NuxtLink
          v-if="route.path === '/'"
          to="/cart"
          class="flex bg-green-400 items-center gap-2 rounded px-4 py-2"
        >
          <Icon name="mdi:cart-outline" />
          <h3 @click="addToCart(product)">Add to cart</h3>
        </NuxtLink>
        <!-- <MyCounter :quantity="product.count" /> -->
        <div
          class="flex bg-gray-300 items-center justify-center rounded gap-px w-24 border border-black"
        >
          <button type="button" @click="decrement()" class="px-2">-</button>
          <h3 class="bg-white px-4 py-2">{{ product.count }}</h3>
          <button type="button" @click="increment()" class="px-2">+</button>
        </div>
      </div>
      <div class="mt-2">
        <NuxtLink
          :to="`/products/${product.id}`"
          class="bg-green-400 items-center rounded px-4 py-2"
          >View Product</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
const route = useRoute();
const getCartProducts = getData();
console.log("Cart Products", getCartProducts);
const addToCart = (item) => {
  // for (let i = 0; i < getCartProducts.length; i++) {
  //   if (getCartProducts[i].item.item.id === item.id) {
  //     alert("Item already in cart");
  //   } else {
  console.log("Item", item);
  cartStore.addToCart(item);
  setData(cartStore.cart);
  //   }
  // }
};
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});

const increment = () => {
  props.product.count += 1;
};

const decrement = () => {
  props.product.count -= 1;
};
</script>

<style lang="scss" scoped></style>
