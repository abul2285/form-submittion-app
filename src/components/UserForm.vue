<template>
  <div id="userForm">
    <section>
      <div class="col1">
        <form @submit="checkForm">
           <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
          <label for="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            id="first_name"
            v-model.trim="name"
            required
          />

          <br />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            v-model.trim="email"
            required
          />

          <br />
          <label for="ocupation">Ocupation</label>
          <select
            name="ocupation"
            id="ocupation"
            multiple
            aria-placeholder="Select Ocupation"
            v-model.trim="ocupation"
            required
          >
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>

          <br />
          <label for="status">Status</label>
          <input
            type="radio"
            name="status"
            value="valid"
            required
            v-model="status"
          />Valid
          <input
            type="radio"
            name="status"
            value="Invalid"
            v-model="status"
            required
          />Invalid

          <br />
          <label for="internal_status">Internal Status</label>
          <select
            name="internal_status"
            id="internal_status"
            v-model="internal_status"
            required
          >
            <option value="valid">Valid</option>
            <option value="invalid">Invalid</option>
          </select>
          <button type="submit" @click="addUser(user)">
            add bookmark</button
          >{{ users }}
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";
export default {
  name: "UserForm",
  data(){
    return {
      errors:[]
    }
  },
  computed: {
    ...mapGetters(["users", "user"]),
    ...mapFields([
      "form.name",
      "form.email",
      "form.ocupation",
      "form.status",
      "form.internal_status"
    ])
  },
  methods: {
    addUser(user) {
      this.$emit("addUser", user);
    },
       checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.user.name) {
        this.errors.push('Name required.');
      }
      if (!this.user.email) {
        this.errors.push('email required.');
      }

      e.preventDefault();
    }
  }
};
</script>

<style></style>
