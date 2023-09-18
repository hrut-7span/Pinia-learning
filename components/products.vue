<template>
  <div v-for="(product, index) in _products" :key="index" class="my-8">
    <ProductCard :product="product" />
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/products";
const productStore = useProductStore();

const _products = productStore.getProducts;
</script>

<style lang="scss" scoped></style>
