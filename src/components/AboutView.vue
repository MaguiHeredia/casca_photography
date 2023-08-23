<template>
<div>
    <div class="bg-[#92704E]">
    <navbar_view />
</div>
<div class="flex flex-col items-center justify-center lg:mt-[30px]">
        <div class="bg-[#ECE5DE] rounded lg:px-20 w-full lg:w-auto px-4 lg:mb-[30px]">
        <div class="w-full text-center mt-[20px] pt-[20px] ">
            <h2 class="font-serif md:text-5xl text-3xl w-auto">Hola! Soy Betiana Vaiarini</h2>
            <p class="max-w-3xl text-center mx-auto font-sans mt-4 text-base w-auto">Fotografa infantil y de familias en Santa María de Punilla, Córdoba</p>
        </div>
        <div class="flex w-full justify-center pt-[30px]">
        <img src="/30.jpeg" alt="''" class="max-w-[500px] w-full rounded"/>
    </div>
        <div class="lg:max-w-[700px] mt-[30px] px-8 pb-8">
            <h4 class="font-serif text-2xl w-auto pb-4">Detrás del lente...</h4>
            <p >
                Con el nacimiento de mi última hija descubrí que cada etapa de su vida se me iba volando, se me escapaba entre la rutina diaria sin poder hacer nada para detenerlo.<br/> Fue ahí cuando comencé a dedicarme de manera profecional a un hobby que tengo hace muchisimos años, la fotografía.
                <br/>Poder inmortalizar risas, llantos, ojitos picaros, y aveces hasta sus primeros pasitos es un privilegio que me dió la vida. <br/>Mi misión es poder entregar fotografías que los hagan viajar en el tiempo, haciendo que algunos instantes sean inmortales.
            </p>
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
import navbar_view from './Navbar.vue'
import social_media from './SocialMedia.vue'

export default {
    name: 'about_view',
    components: {
      navbar_view,
      social_media
    }
}
</script>