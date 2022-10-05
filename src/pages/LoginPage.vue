<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input label="E-mail" v-model="form.email"></q-input>
        <q-input label="Password" v-model="form.password"></q-input>
        <div class="full-width q-pt-md">
          <q-btn label="Login" color="primary" type="submit" outline rounded class="full-width mt-2"></q-btn>
        </div>
        <div class="full-width q-pt-md">
          <q-btn label="Registro" color="primary" to="/register" flat rounded class="full-width mt-2"></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
export default defineComponent({

  name: 'LoginPage',

  setup () {
    const router = useRouter()
    const { login } = useAuthUser()
    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
