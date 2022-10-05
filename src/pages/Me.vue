<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p class="text-body1">
        Hello {{ user.user_metadata.name }}
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageMe',

  setup () {
    const { user } = useAuthUser()

    return { user }
  }
});
</script>
