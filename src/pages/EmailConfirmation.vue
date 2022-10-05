<template>
  <q-page padding>
    <p class="text-body1">Obrigado por se registrar!</p>

    <p class="text-body1">Confirme seu e-mail para terminar o cadastro: <strong>{{ $route.query.email }}</strong></p>
  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EmailConfirmation',

});
</script>
