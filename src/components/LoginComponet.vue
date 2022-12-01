<template>
    <nav class="login_navbar">
    </nav>
    <!-- Login Form -->
    <div class="login-form">
        
        <form @submit.prevent="submit">
            <div class="login-error">{{errormessage}}</div>
            <label for="">Email:</label>
            <input type="text" required v-model="email">
            <label for="">password:</label>
              <input type="password" required v-model="password">
          <div class="submit">
            <button @click="login">Login</button>
            
          </div>
        </form>

    </div>

</template>

<script>
import axios from "axios"

export default{
    name:'LoginComponet',
    data(){
        return{
                email: "",
                password: "",
                errormessage:""
            
        }

    },
   methods:{
    login:function()
       {
        let email=this.email
        let password=this.password
    
       
        axios.post(this.$store.state.baseurl + "/login",{email:email,password:password}).then( (response) =>{
        this.$store.commit("login", JSON.stringify(response.data.data))
        const token=response.data.token
        axios.defaults.headers.common['Authorization'] = token
        this.$router.push({name:'Dashboard'}) 
            })
          
          .catch(err => {
            console.log(err)
            this.errormessage=err.message
          }
          
          

          )
      },
      
   },
  

 
 

}
</script>

<style scoped>
form{
    max-width: 420px;
    margin: 30px auto;
    text-align: left;
    background-color: white;
    
    padding: 40px;
    border-radius: 10px;
}
label{
    display: inline-block;
    color: crimson;
    background-color: white;
    margin: 25px 0 15px;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 10px;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    background-color:white;
    border-bottom: 1px solid #ddd;
}
</style>