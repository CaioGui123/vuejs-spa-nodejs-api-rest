<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="800"
  >
    <v-simple-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th>Peso</th>
          <th>Altura</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.first_name }} {{ student.last_name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.weight }}</td>
          <td>{{ student.height }}</td>
          <td>
            <router-link :to="{ name: 'admin-students-edit', params: { id: student.id } }">
              <v-btn
                color="warning"
                class="mr-1"
              >
                <v-icon>fa fa-pencil</v-icon>
              </v-btn>
            </router-link>

            <delete-student-modal :id="student.id"/>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import DeleteStudentModal from '../../components/DeleteStudentComponent.vue';

export default {
  data() {
    return {
      loading: false,
      students: [],
    };
  },
  components: {
    DeleteStudentModal,
  },
  methods: {
    async getStudents() {
      try {
        this.loading = true;

        await this.$store.dispatch('students/index');

        this.students = this.$store.state.students.students;

        this.loading = false;
      } catch (e) {
        this.loading = false;
        console.log(e);
      }
    },
  },
  created() {
    this.getStudents();
  },
};
</script>

<style>

</style>
