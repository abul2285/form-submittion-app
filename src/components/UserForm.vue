<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div class="col1 form-wrapper">
            <form @submit.prevent class="form">
              <div class v-for="(field, i) in userInput" :key="i">
                <div
                  class="text-center text-capitalize"
                  v-if="field.type === 'info_html'"
                  v-html="field.content"
                >{{ field.content }}</div>

                <!-- Name field start -->
                <div class v-if="field.type === 'text'">
                  <div class="form-group user-name">
                    <label :for="field.name">{{ field.label }}</label>
                    <input
                      :type="field.type"
                      v-model="name"
                      :id="field.name"
                      :name="field.name"
                      :placeholder="field.placeholder"
                      class="form-control"
                      :required="field.required"
                      :class="{
                        'is-invalid': submitted && $v.user.name.$error
                      }"
                    />

                    <!-- Name Field validation -->
                    <div
                      v-if="submitted && !$v.user.name.required"
                      class="invalid-feedback"
                    >{{ field.validation_message }}</div>
                  </div>
                </div>
                <!-- Name field end -->

                <!-- Email field start -->
                <div class v-if="field.type === 'email'">
                  <div class="form-group user-email">
                    <label :for="field.name">{{ field.label }}</label>
                    <input
                      :type="field.type"
                      v-model="email"
                      :id="field.name"
                      :name="field.name"
                      :placeholder="field.placeholder"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error
                      }"
                      :required="field.required"
                    />

                    <!-- Email Field validation -->
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                      <span v-if="!$v.user.email.required">
                        {{
                        field.validation_message
                        }}
                      </span>
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                  </div>
                </div>
                <!-- Email field end -->

                <!-- Ocupation field start -->
                <div class v-if="field.type === 'multi-select'">
                  <div class="form-group user-ocupation">
                    <label :for="field.name">{{ field.label }}</label>
                    <select
                      :name="field.name"
                      :id="field.name"
                      multiple
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.ocupation.$error
                      }"
                      v-model.trim="ocupation"
                      :required="field.required"
                    >
                      <option
                        v-for="(option, i) in getOcupationOption"
                        :key="i"
                        :value="option"
                      >{{ option }}</option>
                    </select>

                    <!-- Ocupation Field validation -->
                    <div
                      v-if="submitted && !$v.user.ocupation.required"
                      class="invalid-feedback"
                    >{{ field.validation_message }}</div>
                  </div>
                </div>
                <!-- Ocupation field end -->

                <!-- Status field start -->
                <div class v-if="field.type === 'radio'">
                  <label for="field.name">{{ field.label }}</label>
                  <br />
                  <div
                    class="form-check form-check-inline"
                    v-for="(option, i) in getInternalStatusOption"
                    :key="i"
                  >
                    <label class="form-check-label" :for="option">
                      {{
                      option
                      }}
                    </label>
                    <input
                      class="form-check-input"
                      :class="{
                        'is-invalid': submitted && $v.user.status.$error
                      }"
                      :type="field.type"
                      :name="field.name"
                      :value="option"
                      :id="option"
                      v-model="status"
                      required="field.required"
                    />

                    <!-- Status Field validation -->
                    <div
                      v-if="submitted && !$v.user.status.required"
                      class="invalid-feedback"
                    >{{ field.validation_message }}</div>
                  </div>
                </div>
                <!-- Status field end -->

                <!-- Internal Status field start -->
                <div class="user-internal-status mt-3" v-if="field.type === 'select' ">
                  <label :for="field.name">{{ field.label }}</label>
                  <select
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.internal_status.$error
                    }"
                    :name="field.name"
                    :id="field.name"
                    v-model.trim="internal_status"
                    :required="field.required"
                  >
                    <option
                      v-for="(option, i) in getInternalStatusOption"
                      :key="i"
                      :value="option"
                    >{{ option }}</option>
                  </select>

                  <!-- Internal Status Field validation -->
                  <div
                    v-if="submitted && !$v.user.internal_status.required"
                    class="invalid-feedback"
                  >{{ field.validation_message }}</div>
                </div>
                <!-- Internal Staus field end -->
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-block mt-3"
                  type="submit"
                  @click="handleSubmit(user)"
                >Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import json from "../store/data.json";
export default {
  name: "UserForm",

  data() {
    return {
      errors: [],
      userInput: json.fields,
      submitted: false
    };
  },

  validations: {
    user: {
      name: { required },
      email: { required, email },
      ocupation: { required },
      status: { required },
      internal_status: { required }
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
    ]),

    getOcupationOption() {
      let tempOption = this.userInput.filter(
        user => user.type === "multi-select"
      );
      let option = tempOption[0].options[0];
      return option;
    },

    getInternalStatusOption() {
      let tempOption = this.userInput.filter(user => user.type === "select");
      let option = tempOption[0].options[0];
      return option;
    },

    getStatusOption() {
      let tempOption = this.userInput.filter(user => user.type === "select");
      let option = tempOption[0].options[0];
      return option;
    }
  },

  methods: {
    handleSubmit(user) {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$emit("addUser", user);
      alert("SUCCESS!! :-)");
      this.addUser;
    }
  }
};
</script>

<style></style>
