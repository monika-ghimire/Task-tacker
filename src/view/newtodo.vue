<template>
  <div class="content-new-todo">
    <div class="todo p-10 pt-2 pl-0 relative" v-for="i in todos" :key="i.id">
      <h5
        class="heading font-semibold text-2xl tab"
        
        @click="markAsComplete(i.id)"
      >
        {{ i.heading }}
      </h5>
      <p class="title text-slate-400" >{{ i.title }}</p>
    </div>

    <div class="flex input-for-add-todo">
      <input
        placeholder="add todo.."
        v-model="text"
        class="add-todo-input mt-5 p-2 rounded w-full"
      />
      <button class="checkBtn" @click="newtodoAdd(text)">✅</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      workDone: false,
      tab: 0,

      sendtodo: [
        {
          heading: "",
          istaskComplete: false,
         
        },
       
      ],
      setAsCompleteTask : [
            {
                id:null
            }
        ]
    };
  },
  computed: mapState({
    todos: (state) => state.todoList,

  }),

  
  mounted() {
 
  },
  methods: {
    ...mapActions(["updateTodo",'setasCompeletedTask']),

    markAsComplete(id) {
      this.workDone = true;
      this.setAsCompleteTask.id=id
      console.log(" skjdhsakdhaksjdhas");
      console.log(id);
      this.setasCompeletedTask(id)
  

    },

    newtodoAdd(text) {
      this.sendtodo.heading = text;
      this.updateTodo(this.sendtodo);

      console.log("data send from componet");
      console.log(this.sendtodo);
    },
  },
};
</script>

<style scoped>
.content-new-todo {
  background: white;
  margin-top: 3%;
  padding: 3%;
  padding-top: 1%;
  border-radius: 3%;
  height: 290px;
  overflow-y: scroll;
}

.input-for-add-todo {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 0px;
}
.checkBtn {
  cursor: pointer;
  position: absolute;
  margin-top: 28px;
  right: 20px;
}
.add-todo-input {
  width: 502px;
  background: linear-gradient(
    8deg,
    rgb(249, 205, 236) 0%,
    rgb(245, 212, 242) 20%,
    rgb(214, 214, 250) 68%
  );
}

.classActive {
  color: rgb(117, 181, 20);
}

h1 {
  color: #9333ea;
}
p {
  color: rgb(51, 50, 50);
}
::placeholder {
  color: rgb(65, 63, 63);
  opacity: 1; /* Firefox */
}
.todo-nav {
  color: #9333ea;
}
.todo:hover {
  color: white;
  border-radius: 10px;
  padding-left: 2%;

  background: linear-gradient(
    8deg,
    rgb(255, 184, 234) 0%,
    rgb(245, 180, 241) 20%,
    rgb(180, 180, 249) 68%
  );
}
.todo:hover .title {
  color: #9333ea;
}
.todo:hover .icon-three-dot {
  right: 4%;
  top: 35px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    148deg,
    hsla(317, 90%, 88%, 1) 0%,
    hsla(304, 60%, 81%, 1) 20%,
    hsla(240, 100%, 89%, 1) 68%
  );
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    148deg,
    rgb(248, 160, 223) 0%,
    rgb(232, 157, 227) 20%,
    rgb(166, 166, 246) 68%
  );
}

@media only screen and (max-width: 600px) {
  .content-new-todo {
    width: 320px;
  }
}
</style>
