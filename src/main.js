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
            heading:"Dinner with fried",
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

      updateTaskStatus(state,id)
      {
        console.log("we are inside mutaion update task")

        let new_updated=state.todoList.map((item)=>{
          if(item.id==id)
          {
            return {
              ...state.todoList,istaskComplete:true
            };
          }

          return state.todoList;
        })

        console.log("testttttt");
        console.log(new_updated);
        state.todoList=new_updated;

        console.log(" the value of state is ");
        console.log(state.todoList)
      }
    },
   
     actions : {

      updateTodo(context,data) {
        // console.log('inside action ')
        // console.log(data);
        context.commit('setTodo',data)

      },

      setasCompeletedTask(context,id){
        console.log('inside action passing id ')
        console.log(id);
        context.commit('updateTaskStatus',id)

      }
    }


  })

  

const app = createApp(App)
// app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
