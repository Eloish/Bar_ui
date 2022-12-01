<template>
  
  <DashbordViewVue v-if="isLoggedIn"/>
  <LoginView v-else/>
  
</template>

<script>
import LoginView from './views/LoginView.vue';
import DashbordViewVue from './views/DashbordView.vue';
import '../axios'

export default {
  name: 'App',
  components:{LoginView,DashbordViewVue},
  data(){
    return{
     
    }
  },
  computed: {
      isLoggedIn: function() { return this.$store.getters.user}
    },
 mounted(){
  this.$store.commit("initialize")
 },

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
