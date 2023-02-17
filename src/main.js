import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus/dist/index.css'
import { createStore } from 'vuex'
// import router from './router'


// Create a new store instance.
const store = createStore({
    state () {
      return {
      
        taskComplete:false,
        // todos:[],

        todoList:[{
            id:1,
            heading:"Buy Food",
            title:'Today at 9:30 am',
            istaskComplete:false
        },
        {
            id:2,
            heading:"Denner with fried",
            title:'Today at 10:30 am',
            istaskComplete:true
        },
        {
            id:3,
            heading:"watch viedo",
            title:'Today at 3:10 am',
            istaskComplete:false
        }]
      }
    },
    mutations: {
      setTodo (state,data) {
        console.log('inside mutations ')
        //state.todoList=[...state.todoList,data]
        state.todoList.push(data)
        console.log(todoList)
      },
    },
   
     actions : {

      updateTodo(context,data) {
        console.log('inside action ')
        console.log(data);
        context.commit('setTodo',data)
      },
    }


  })

  

const app = createApp(App)
// app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
