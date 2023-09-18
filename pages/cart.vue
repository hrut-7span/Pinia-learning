<template>
  <div class="p-20">
    <h1>Your cart</h1>
    <h1 v-if="!getCartProducts">Your cart is empty!!</h1>
    <div v-else>
      <div
        v-for="(product, index) in getCartProducts"
        :key="index"
        class="mb-4"
      >
        <ProductCard :product="product.item.item" />
      </div>
      <h2>Total cart value: {{ total() }}</h2>
    </div>

    .
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
const getCartProducts = getData();
const total = () => {
  const totalValue = ref(0);
  for (let i = 0; i < getCartProducts.length; i++) {
    totalValue.value +=
      getCartProducts[i].item.item.count * getCartProducts[i].item.item.price;
  }
  return totalValue;
};
</script>

<style lang="scss" scoped></style>
