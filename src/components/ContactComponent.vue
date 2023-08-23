<template>
  <div class="isolate bg-white px-6 py-4 sm:py-10 lg:px-8">
    <form @submit.prevent="enviarEmail" class="mx-auto max-w-xl">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="input.nombre" @input="handleOnChange($event, 'nombre')">
            <p v-if="errors.nombre" class="text-red-500 mt-1">{{ errors.nombre }}</p>
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Apellido</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="input.apellido" @input="handleOnChange($event, 'apellido')">
            <p v-if="errors.apellido" class="text-red-500 mt-1">{{ errors.apellido }}</p>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="input.email" @input="handleOnChange($event, 'email')">
            <p v-if="errors.email" class="text-red-500 mt-1">{{ errors.email }}</p>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="input.mensaje" @input="handleOnChange($event, 'mensaje')"></textarea>
            <p v-if="errors.mensaje" class="text-red-500 mt-1">{{ errors.mensaje }}</p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" :disabled="hasErrors" :class="[hasErrors ? 'bg-slate-300 hover:bg-slate-300' : 'pointer']" class="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">ENVIAR</button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: 'ContactComponent',
  data() {
    return {
      input: {
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
      },
      errors: {
        nombre: "Debe ingresar su nombre",
        apellido: '',
        email: '',
        mensaje: '',
      },
      validations: {}
    };
  },
  computed: {
    hasErrors() {
      return (
        this.errors.nombre ||
        this.errors.apellido ||
        this.errors.email ||
        this.errors.mensaje
      );
    },
  },
  methods: {
    handleOnChange(event, field) {
      this.input[field] = event.target.value;
      this.errors = this.validateField();
      console.log(this.hasErrors)
    },
    validateField() {
    const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
    const emailExpresion = new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$');
    if (!this.input.nombre) {
      this.validations.nombre = "Debe ingresar su nombre";
    } else if (nameExpresion.test(this.input.nombre)) {
        this.validations = {}
      this.validations.nombre = "Ingrese solo letras";
    } else if(!this.input.apellido) {
        this.validations = {}
        this.validations.apellido = "Debe ingresar su apellido";
    } else if (nameExpresion.test(this.input.apellido)) {
        this.validations = {}
      this.validations.apellido = "Ingrese solo letras";
    } else if (!this.input.email) {
        this.validations = {}
      this.validations.email = "Debe ingresar su email";
    } else if (!emailExpresion.test(this.input.email)) {
        this.validations = {}
      this.validations.email = "Ingrese un email válido";
    } else if (!this.input.mensaje) {
        this.validations = {}
      this.validations.mensaje = "Debe ingresar un mensaje";
    } else {
        this.validations = {}
    }
    return this.validations
  },
  enviarEmail(e){
    
    emailjs
      .sendForm(
        "service_mh8ztbl",
        "template_x1mo77o",
       e.target,
        "bDQz4dWQq24jlUuix"
      )
      .then((res) => {
        console.log(res);
      });
      this.$swal.fire(
  'Enviado correctamente!',
  'Gracias por ponerse en contacto con Casca Photography',
  'success'
)
    // swal('', "¡Enviado exitosamente!", 'success')
    this.input = {
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    }
  }
  },
};
</script>
`