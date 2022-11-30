import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
    state:{
        baseurl:'http://127.0.0.1:8000/api',
        user:{},
        islogged:false,
        token:localStorage.getItem('token') || '',
        
    },
    mutations:{
        login(state,user){
            state.token = user.token
            state.user = user.user
        },
        logout(state){
            state.user=''
            state.token=''
            localStorage.removeItem('token')

        },
        initialize(state){
            if(localStorage.getItem('user')){
                state.user=localStorage.getItem('user')
            }
            
            else{
                    this.commit("logout");
            }
            
            
        }
    
        
    },
    actions:{
         login({commit},user){
             axios.post(`${this.state.baseurl}/login`,user)
            .then(resp=>{
                const user=resp.data.data
                const token=resp.data.token
                localStorage.setItem('token', token)
                localStorage.setItem('user',user)
                axios.defaults.headers.common['Authorization'] = token
                commit('login',{token:token,user: user })

            })
        },
        logout({commit}){
            commit('logout')
       // localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        },

        
    },
    getters:{
        user:state=>state.user
      

    },

})