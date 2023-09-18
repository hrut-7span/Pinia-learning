<template>
  <div
    class="flex bg-gray-300 items-center justify-center rounded gap-px w-24 border border-black"
  >
    <button type="button" @click="$emit('decrement')" class="px-2">-</button>
    <h3 class="bg-white px-4 py-2">{{ quantity }}</h3>
    <button type="button" @click="increment()" class="px-2">+</button>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/products";
const productStore = useProductStore();
// const props = defineProps({
//   quantity: {
//     type: Number,
//     default: 0,
//   },
// });

// const increment = () => {
//   props.quantity += 1;
//   console.log(props.quantity);
// };
</script>

<style lang="scss" scoped></style>
