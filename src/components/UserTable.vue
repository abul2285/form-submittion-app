<template>
  <div class="jumbotron">
    <div class="container" id="userTable">
      <div class="row">
        <div class="col-sm-10 mx-auto text-center">
          <div class="table-responsive">
            <table class="table shadow">
              <caption>User List</caption>
              <thead class="bg-secondary text-white">
                <tr>
                  <th v-for="(header,i) in getHeader" :key="i">{{header.label}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(users,i) in getData" :key="i" class="bg-white">
                  <td v-for="userInfo in users" :key="userInfo.id">{{userInfo}}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      userInput: json.fields,
      user: []
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
      // let tempUsers = this.users.map(user => Object.values(user));
      let tempUsers = this.users.map(user => user);
      let users = tempUsers.filter(user => {
        return user;
      });
      return users;
    }
  }
};
</script>

<style></style>
