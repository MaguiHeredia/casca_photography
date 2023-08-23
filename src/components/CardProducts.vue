<template>
<div class="max-w-lg">
    <img :src="image" alt="img"/>
    <h3 class="font-serif text-3xl text-center pt-6">{{ title }}</h3>
    <p class="text-xl text-center pb-6 text-gray-500 pt-2">${{ price }}</p>
    <ul class="!list-disc">
        <li v-for="item in arrayText" v-bind:key="item" class="font-thin flex align-center">
         <p class="font-medium py-1">•</p> <p class="pt-1 pl-1">{{ item }}.</p>
  </li>
    </ul>
    <div class="flex justify-center my-2 mt-12">
      <a href="https://wa.link/0eirnf" target="_blank">
    <button type="button" class="bg-orange-50 px-2 py-2 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-100">Pedir más info</button>
  </a>
      </div>
</div>
</template>
<script>
  import "tailwindcss/tailwind.css";
  export default {
    name: 'card_products',
    props: {
        image: String, 
        arrayText: Array, 
        title: String, 
        price: String
    }
  }
</script>