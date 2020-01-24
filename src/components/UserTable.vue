<template>
  <div class="container" id="userTable">
    <div class="row">
      <div class="col-sm-10 mx-auto text-center">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Ocupation</th>
                <th>Status</th>
                <th>Internal Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.ocupation.toString() }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.internal_status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserTable",
  computed: {
    ...mapGetters(["users"])
  }
};
</script>

<style></style>
