
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-avatar>
            <q-img src="GALLO.jpg" />
          </q-avatar>
          {{ restaurante.nome }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'LoginLayout',

  setup () {
    const restaurante = ref({
      nome: 'Galo Salgaderia',
      primaryColor: '#ec1d25',
      imgSrcName: 'GALLO.jpg'
    })


    return {
      restaurante
    }



  }

});
</script>
