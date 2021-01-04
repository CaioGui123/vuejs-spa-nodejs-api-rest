<template>
  <v-dialog
      v-model="dialog"
      width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>fa fa-trash</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline red white--text">
          Deletar Estudante #{{ id }}
        </v-card-title>

        <v-card-text class="my-4">
          Você tem certeza que deseja deletar esse registro?
        </v-card-text>

        <v-divider class="m-0"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            outlined
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="red"
            class="white--text"
            @click="destroyStudent"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'delete-student-modal',
  props: {
    id: Number,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async destroyStudent() {
      try {
        await this.$store.dispatch('students/destroy', this.id);

        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Sucesso!',
          text: `Estudante #${this.id} deletado com sucesso!`,
        });

        this.dialog = false;
      } catch (e) {
        console.log(e);

        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Erro!',
          text: `Erro ao deletar estudante #${this.id}`,
        });
      }
    },
  },
};
</script>
