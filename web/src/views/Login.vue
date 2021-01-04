<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-card-title>Login</v-card-title>

    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="user.email"
              label="Email"
              :error-messages="validations.email"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="user.password"
              label="Senha"
              :error-messages="validations.password"
            />
          </v-col>
        </v-row>

        <v-card-actions>
          <v-btn depressed color="primary" @click="login">
            Entrar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'caio@gmail.com',
        password: '12345678',
      },
      validations: {},
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;

        await this.$store.dispatch('auth/login', this.user);

        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Erro!',
          text: 'Login efetuado com sucesso!',
        });
        this.loading = false;

        this.$router.push({ name: 'admin-students-index' });
      } catch (e) {
        if (e.response.status === 422) {
          this.validations = e.response.data;

          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'Erro!',
            text: 'Preencha os dados corretamente!',
          });
          this.loading = false;
          return;
        }

        if (e.response.status === 401) {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Erro!',
            text: 'Os dados não coincidem!',
          });
          this.loading = false;
        }
      }
    },
  },
};
</script>
