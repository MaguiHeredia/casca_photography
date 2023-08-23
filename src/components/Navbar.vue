<template>
<nav class="bg-none border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="../assets/logo-casca.png" class="h-12 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Casca Photography</span>
    </a>
    <button data-collapse-toggle="navbar-default" v-on:click="openMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="w-full md:block md:w-auto" :class="{'hidden': !isOpen}" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:text-white md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800  dark:border-gray-700">
        <li>
          <router-link to="/">
          <a class="block py-2 pl-3 pr-4 text-black md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</a>
        </router-link>
        </li>
        <li>
          <router-link to="/about">
          <a class="block py-2 pl-3 pr-4 text-black md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre mí</a>
        </router-link>
        </li>
        <li>
          <router-link to="/contact">
          <a  class="block py-2 pl-3 pr-4 text-black md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
        </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import "tailwindcss/tailwind.css";
export default {
  name: 'navbar_view',
  data: function () {
    return {
      isOpen: false
    }
  },
  methods: {
    openMenu: function () {
      this.isOpen =  !this.isOpen
    }
  }
  }
</script>