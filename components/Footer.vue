<template>
  <header>
    <div class="flex items-center justify-between bg-gray-500 h-16">
      <NuxtLink to="/">
        <nuxt-img
          src="https://dcassetcdn.com/design_img/27911/45633/45633_596114_27911_image.jpg"
          class="aspect-video w-20 h-12 pl-4"
        />
      </NuxtLink>
      <div class="flex gap-3 pr-4">
        <NuxtLink to="/" class="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-300 active:bg-green-400"
          >Footwear</NuxtLink
        >
        <NuxtLink to="/" class="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-300 active:bg-green-400"
          >Clothing</NuxtLink
        >
        <NuxtLink to="/cart" class="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-300 active:bg-green-400">Cart</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
</script>
