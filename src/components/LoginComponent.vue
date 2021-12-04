<template>
  <div class="col-6 q-pa-md justify-center">
    <q-card bordered square>
      <div class="q-pa-md self-center text-center">
        <h2>Login</h2>
        <q-form>
          <q-input label="Email/Phone" />
          <q-input label="Password" type="password" />
          <div class="q-ma-lg center">
            <q-btn label="Login" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  ame: "LoginComponent",
  setup() {
    return {};
  },
};
</script>
