<template>
  <div class="user">
    <!-- <UserForm @addUser="addUser" /> -->
    <button class="user-button" v-if="!showForm" @click="showUserForm">Register as a New User</button>
    <UserForm2 v-if="showForm" @addUser="addUser" />
    <UserTable />
  </div>
</template>

<script>
// import UserForm from "@/components/UserForm.vue";
import UserForm2 from "@/components/UserForm2.vue";
import UserTable from "@/components/UserTable.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    // UserForm,
    UserForm2,
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
