<template>
    <div class="main">
        <div>
           
            <router-link to="" @click="logout">Logout</router-link>|
            <router-link to="">Etablissement</router-link>
                
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
        this.$store.commit('logout')
        
      },
      

    }
}
</script>