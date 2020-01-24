<template>
  <div class="container">
    <div class="col-4 mx-auto p-3">
      <button
        class="user-button btn btn-success btn-block mx-auto"
        v-if="!showForm"
        @click="showUserForm"
      >Add a new User</button>
    </div>
    <UserForm v-if="showForm" @addUser="addUser" />
    <UserTable />
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserTable from "@/components/UserTable.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    UserForm,
    UserTable
  },
  data() {
    return {
      showForm: false
    };
  },
  methods: {
    ...mapActions({
      add: "addUser",
      clear: "clearUser"
    }),
    addUser(user) {
      this.add(user);
      this.clear();
      this.showForm = false;
    },
    showUserForm() {
      this.showForm = true;
    }
  }
};
</script>

<style></style>
