<template>
    <div class="section_container">
        <div class="signup_container">
              <div class="signup__logo">Logo</div>
              <div class="signup__content">Sign in to your account</div>
              <el-form>
                  <el-form-item
                  label="Email address"
                  prop="email"
                >
                  <el-input
                    id="form_input"
                    v-model="signInForm.email"
                    placeholder="Enter the email address"
                  />
                </el-form-item>
                <el-form-item
                  label="Password"
                  prop="password"
                >
                  <el-input
                    class="form_input"
                    v-model="signInForm.password"
                    placeholder="Enter the password here"
                  />
                </el-form-item>
                <el-button class="el-button__primary" @click="handleSignup">
                  Signin
                </el-button>
              </el-form>
              <p class="signup__bottom">Already a user &nbsp;&nbsp;<span class="link">
                <NuxtLink to="/login">Login</NuxtLink>
              </span></p>
        </div>
    </div>
</template>

<script setup>
const signInForm = reactive(
    {
        email : "",
        password : ""
    }
)
const handleSignup = () =>{
  if(!signInForm.email.length || !signInForm.password.length){
    ElNotification({
      type:"warning",
      message : "Please fill all the fields.",
      title:"warning",
      duration:3000
    })
  }
}
</script>





