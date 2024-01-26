<template>
  <div class="container">
    <div class="alert alert-success" v-show="response">{{ response }}</div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Indirizzo</label>
        <input
          v-model="address"
          type="text"
          class="form-control"
          id="address"
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea v-model="message" class="form-control" id="message" rows="5">
        </textarea>
      </div>
      <button type="reset" class="btn btn-secondary me-3">Reset</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ContactForm",
  data() {
    return {
      store,
      name: "",
      email: "",
      address: "",
      message: "",
      response: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post(store.apiUrl + "contacts", {
          name: this.name,
          email: this.email,
          address: this.address,
          message: this.message,
        })
        .then((response) => {
          console.log(response.data);
          this.name = "";
          this.email = "";
          this.address = "";
          this.message = "";
          this.response = response.data.message;
        });
    },
  },
};
</script>

<style lang="sass" scoped></style>
