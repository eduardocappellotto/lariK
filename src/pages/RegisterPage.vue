<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registro</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input label="Nome" v-model="form.nome"></q-input>
        <q-input label="E-mail" v-model="form.email"></q-input>
        <q-input label="Password" type="password" v-model="form.password"></q-input>

        <div class="full-width q-pt-md">
          <q-btn label="Registro" color="primary" type="submit" flat rounded class="full-width mt-2"></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',
  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })
    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
      }
    }
    return {
      form,
      handleRegister
    }
  }
})
</script>
