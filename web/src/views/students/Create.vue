<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="800"
  >
    <v-card-title>Cadastrar Estudante</v-card-title>

    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Nome"
              placeholder="Insira o nome..."
              outlined
              v-model="student.first_name"
              :error-messages="validations.first_name"
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              label="Sobrenome"
              placeholder="Insira o sobrenome..."
              outlined
              v-model="student.last_name"
              :error-messages="validations.last_name"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Email"
              placeholder="Insira o email..."
              outlined
              v-model="student.email"
              :error-messages="validations.email"
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              label="Idade"
              placeholder="Insira o idade..."
              outlined
              v-model="student.age"
              :error-messages="validations.age"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Altura"
              placeholder="Insira o altura..."
              outlined
              v-model="student.height"
              :error-messages="validations.height"
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              label="Peso"
              placeholder="Insira o peso..."
              outlined
              v-model="student.weight"
              :error-messages="validations.weight"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-file-input
              label="Foto..."
              placeholder="Foto do estudante..."
              prepend-icon="fa-camera"
              outlined
              :error-messages="validations.image"
              @change="changeImage"
            />
          </v-col>
        </v-row>

        <v-card-actions>
          <v-btn depressed color="success" @click="saveStudent">
            Salvar
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
      loading: false,
      student: {
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        weight: '',
        height: '',
        image: '',
      },
      validations: [],
    };
  },
  methods: {
    async saveStudent() {
      try {
        this.loading = true;

        const student = await this.createFormData(this.student);
        await this.$store.dispatch('students/store', student);

        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Sucesso!',
          text: 'Estudante salvo com sucesso!',
        });
        this.loading = false;
      } catch (e) {
        this.validations = e.response.data;

        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'Erro!',
          text: 'Preencha os dados corretamente!',
        });
        this.loading = false;
      }
    },
    createFormData(student) {
      const data = new FormData();
      data.append('first_name', student.first_name);
      data.append('last_name', student.last_name);
      data.append('email', student.email);
      data.append('age', student.age);
      data.append('height', student.height);
      data.append('weight', student.weight);
      data.append('image', student.image);

      return data;
    },
    changeImage(image) {
      this.student.image = image;
    },
  },
};
</script>

<style scoped>
</style>
