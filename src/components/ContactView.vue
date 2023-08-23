<template>
  <div>
    <div class="bg-[#92704E]">
      <navbar_view />
    </div>
    <div class="flex flex-col items-center justify-center lg:mt-[30px]">
        <div class="bg-[#ECE5DE] rounded lg:px-20 w-full lg:w-auto px-4 lg:mb-[30px]">
      <h2 class="font-serif md:text-5xl text-3xl w-auto text-center mt-[20px] pt-[20px]">¡Reserva tu sesión de fotos!</h2>
      <div class="flex w-full justify-center pt-[30px]">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/268/643/non_2x/summer-flowers-black-and-white-doodle-illustration-isolated-doodles-of-plants-and-flowers-illustration-free-png.png"
        alt=""
        class="w-14"
      />
    </div>
      <p class="font-serif md:text-2xl text-lg w-auto text-center pt-[20px] pt-[20px] font-bold">* Formulario de contacto *</p>
      <div class="flex justify-center w-full">
      <contact_component class="my-8 mx-6 w-[700px]"/>
    </div>
    </div>
    </div>
    <div class="border-t-4 border-[#92704E] pt-8 rounded">
<social_media />
</div>
  </div>
</template>
<script>
import "tailwindcss/tailwind.css";
import navbar_view from "./Navbar.vue";
import social_media from './SocialMedia.vue'
import contact_component from './ContactComponent.vue'

export default {
  name: "contact_view",
  components: {
    navbar_view,
    social_media,
    contact_component
  },
};
</script>
