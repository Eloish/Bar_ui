
import { createStore } from 'vuex'

import router from '../router'

export default createStore({
    state:{
        baseurl:'http://127.0.0.1:8000/api',
        status:'',
        token: localStorage.getItem('token') || '',
        user: [],
        Etablissements:[],
        
    },
    mutations:{
        login(state, user) {
            state.user = user;
        localStorage.setItem('user', state.user);
       
          },
        logout(state){
            state.user=''
            localStorage.removeItem('user')
            router.push('/login')

        },
        initialize(state){
            if(localStorage.getItem('user')){
                state.user=localStorage.getItem('user')
            }
            
            else{
                    this.commit("logout");
            }
            
            
        },
        
        
    
        
    },
    actions:{
    
        


        
    },
    getters:{
        user:state=>state.user,
        //isLoggedIn: state => !!state.token,
       

    },

})