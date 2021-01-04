<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app>
      <v-app-bar-nav-icon>
        <router-link :to="{ name: 'admin-students-index', params: {} }">
          <v-icon>fa fa-list</v-icon>
        </router-link>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon>
        <router-link :to="{ name: 'admin-students-create', params: {} }">
          <v-icon>fa fa-user-plus</v-icon>
        </router-link>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
    </v-footer>

    <notifications group="foo"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>

<style>
a {
  text-decoration: none;
}

/* Notifications */

.vue-notification {
  padding: 10px;
  margin: 10px;
  cursor: pointer;

  border-radius: 3px;

  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
}

.notification-title {
  font-size: 15px;
}

.notification-content {
  font-size: 12px;
}
</style>
