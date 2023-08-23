<template>
    <div>
    <div class="img h-screen w-full bg-center bg-cover bg-no-repeat">
    <navbar_view />
</div>
<div class="w-full text-center py-14 bg-[#ECE5DE] px-2">
<h2 class="font-serif text-3xl">¿QUÉ VALOR TIENEN LOS RECUERDOS?</h2>
<p class="max-w-3xl text-center mx-auto font-sans mt-6 text-base">Las fotografías tienen una capacidad evocadora que nada puede igualar. El tiempo pasa, las personas cambiamos, la memoria es selectiva y pasajera... y sin embargo, las fotografías siempre estarán ahí.
En este sentido creo que como fotógrafa de familias tengo el deber privilegiado de retratar historias desde mi visión particular, saber reconocer y capturar todos los detalles que me ayudarán a crear un testimonio único y de calidad, con la promesa de que viajarán en el tiempo cada vez que miren las fotografías.</p>
</div>
<div class="flex justify-evenly mt-12 flex-wrap">
    <card_products v-bind:key="1" :image="'/1.png'" title="Mini sesiones" :arrayText="['Sesión fotográfica en estudio', '45 minutos de duración','Vestuario incluido', '15 fotografías digitales', 'Entrega de archivos en alta resolución mediante enlace de descarga', 'Opción de añadir fotos extra']" price="15.000" />
    <card_products v-bind:key="2" :image="'/4.png'" title="Sesiones temáticas" :arrayText="['Sesión fotográfica en exterior o interior', '90 minutos de duración','Vestuario a convenir', '15 fotografías digitales', 'Entrega de archivos en alta resolución mediante enlace de descarga', 'Opción de añadir fotos extra']" price="25.000" />
</div>
<div class="flex justify-evenly mt-12 flex-wrap">
    <card_products v-bind:key="3" :image="'/7.png'" title="Sesiones Smash Cake" :arrayText="['Sesión fotográfica en estudio', '60 minutos de duración','Vestuario a convenir', '15 fotografías digitales', 'Entrega de archivos en alta resolución mediante enlace de descarga', 'Opción de añadir fotos extra']" price="20.000" />
    <card_products v-bind:key="4" :image="'/2.png'" title="Sesiones Emabarazada" :arrayText="['Sesión fotográfica en estudio', '60 minutos de duración','Vestuario incluido', '15 fotografías digitales', 'Entrega de archivos en alta resolución mediante enlace de descarga', 'Opción de añadir fotos extra']" price="15.000" />
</div>
<big_card />
<social_media class="mt-[90px]"/>
<gallery_images class="mb-10"/>
</div>
  </template>
  
  <script>
  import navbar_view from './Navbar.vue'
  import card_products from './CardProducts.vue'
  import big_card from './BigCard.vue'
  import social_media from './SocialMedia.vue'
  import gallery_images from './GalleryImages.vue'

  import "tailwindcss/tailwind.css";
  export default {
    name: 'first_view',
    components: {
      navbar_view,
      card_products,
      big_card,
      social_media,
      gallery_images 

    }
  }
  </script>

  <style>
.img{
    background-image: url('../assets/portada-casca.jpeg');
}

</style>