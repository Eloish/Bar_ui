<template>
    <div class="main">
        <div>
            <router_link to="/">Dashbord</router_link>|
            <router_link to="">Etablissement</router_link>|
            <router_link to="">Ventes</router_link>|
            <router_link to="">Produits</router_link>|
            <router_link to="" @click="logout">Logout</router_link>|
            
        </div>
        <div>
            
        </div>

    </div>
</template>
<script>

export default{
    name:'hader_sidebar',
    methods:{
        logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      

    }
}
</script>