<template>
  <div class="container" id="userTable">
    <div class="row">
      <div class="col-sm-10 mx-auto text-center">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th v-for="(header,i) in getHeader" :key="i">{{header.label}}</th>
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
import json from "../store/data.json";
export default {
  name: "UserTable",
  data() {
    return {
      userInput: json.fields
    };
  },
  computed: {
    ...mapGetters(["users"]),
    getHeader() {
      let tempHeader = this.userInput.filter(user => user.type !== "info_html");
      let header = tempHeader;
      return header;
    },
    getData() {
      return this.users;
    }
  }
};
</script>

<style></style>
