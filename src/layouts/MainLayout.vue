<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ nomeRestaurante }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const restaurante = ref({
      nome: 'Galo Salgaderia',
      primaryColor: '#ec1d25'
    })


    let nomeRestaurante = computed(() => {
      const { nome } = restaurante.value
      return nome
    })

    let corPrimaria = computed(() => {
      const { primaryColor } = restaurante.value
      return primaryColor
    })

    return {
      leftDrawerOpen,
      nomeRestaurante,
      corPrimaria,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
