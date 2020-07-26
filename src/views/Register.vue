<template>
  <div class="container">
    <h1>Register</h1>
    <br />
    <br />
    <div class="row justify-content-md-center">
      <div class="col-md-3">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="fullname" required placeholder="Full Name" />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              required
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
              placeholder="Password"
            />
            <div
              v-if="password.length > 1 && password.length < 6"
              class="text-danger"
            >Password length should be greater then 6</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reenterpassword"
              required
              v-model="reenterpassword"
              placeholder="Re-enter Password"
            />
            <div v-if="password!=reenterpassword" class="text-danger">Password Didn't matched</div>
          </div>
          <br />
          <button type="submit" class="btn-lg btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterpassword: ""
    };
  },
  mounted: function(){
    if(firebase.auth().currentUser)
      this.$router.replace("dashboard");
  },
  methods: {
    register: function() {
      console.log("Email: " + this.mail);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user)=>{
          console.log(user.user);
        })
        .catch(function(error) {
          alert("Unable to register user: "+error.message);
        });
    }
  }
};
</script>

<style scoped>
</style>