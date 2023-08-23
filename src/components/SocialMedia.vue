<template>
    <div class="flex flex-col items-center">
        <h2 class="font-serif md:text-5xl text-2xl">SÍGUEME</h2>
        <div class="flex p-2">
        <div v-for="elem in social" :key="elem.icon" class="rounded-full bg-[#B48658] md:w-16 md:h-16 w-14 h-14 p-2 m-2">
            <a :href="elem.link" target="_blank" >
           <img :src="elem.icon" alt="icon" />
            </a>
        </div>
    </div>
    </div>
</template>
<script>
import "tailwindcss/tailwind.css";
  export default {
    name: 'social_media',
    data: function () {
    return {
      social: [
        {
            link: 'https://www.instagram.com/cascaphotography/',
            icon: 'https://www.pngkit.com/png/full/488-4883158_subscribe-to-our-mailing-list-icono-de-instagram.png',
        },
        {
            link: 'https://www.facebook.com/cascaphotography',
            icon: 'https://icon-library.com/images/white-facebook-f-icon/white-facebook-f-icon-6.jpg'
        }
      ]
    }
  },
  }
</script>