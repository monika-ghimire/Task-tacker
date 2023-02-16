import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus/dist/index.css'
import { createStore } from 'vuex'
// import router from './router'


// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
        
        todoList:[{
            id:1,
            heading:"Buy Food",
            title:'Today at 9:30 am'
        },
        {
            id:2,
            heading:"Denner with fried",
            title:'Today at 10:30 am'
        },
        {
            id:3,
            heading:"watch viedo",
            title:'Today at 3:10 am'
        }]
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

const app = createApp(App)
// app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
