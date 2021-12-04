<template>
  <q-page padding class="window-height window-width row justify-center items-center">
    <login-component/>
  </q-page>
</template>

<script>
import LoginComponent from 'src/components/LoginComponent.vue'
export default {
  components: { LoginComponent },
  name: 'Login',
}
</script>
