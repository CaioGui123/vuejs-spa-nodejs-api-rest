<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="800"
  >
    <v-card-title>Editar Estudante</v-card-title>

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

        <v-card-actions>
          <v-btn depressed color="success" @click="updateStudent">
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
  created() {
    // Get student data
    const studentId = this.$route.params.id;

    this.getStudent(studentId);
  },
  methods: {
    async updateStudent() {
      try {
        this.loading = true;

        // const student = await this.createFormData(this.student);
        const payload = { data: this.student, id: this.student.id };

        await this.$store.dispatch('students/update', payload);

        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Sucesso!',
          text: `Estudante #${this.student.id} editado com sucesso!`,
        });
        this.loading = false;
      } catch (e) {
        console.log(e.response.data);
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
    // createFormData(student) {
    //   const data = new FormData();
    //   data.append('first_name', student.first_name);
    //   data.append('last_name', student.last_name);
    //   data.append('email', student.email);
    //   data.append('age', student.age);
    //   data.append('height', student.height);
    //   data.append('weight', student.weight);

    //   return data;
    // },
    async getStudent(id) {
      try {
        this.student = await this.$store.dispatch('students/show', id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
</style>
