<template>
  <div class="container">
    <h1>Login</h1>
    <br />
    <br />
    <div class="row justify-content-md-center">
      <div class="col-md-3">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
              placeholder="Password"
            />
            <div
              v-if="password.length > 1 && password.length < 6"
              class="text-danger"
            >Password length should be greater then 6</div>
          </div>
          <button @click="login" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted: function(){
    if(firebase.auth().currentUser)
      this.$router.replace("dashboard");
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user)=>{
          console.log(user.user)
        })
        .catch(function(error) {
          // Handle Errors here.
          alert("Unable to login: " + error.message);
          // ...
        });
    }
  }
};
</script>

<style scoped>
</style>