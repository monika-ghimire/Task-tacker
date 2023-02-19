
<template>
    <div class="content-compelet">
        <div class=" todo   p-10 pt-2 pl-0 relative" v-for="i in  todos" :key="i.id">

       
            <h5 class="heading font-semibold text-2xl  tab" v-if="i.istaskComplete===true">{{ i.heading }}</h5>
                    <p class="title text-slate-400 tab"  v-if="i.istaskComplete===true"  >{{ i.title }}</p>   
            </div>
            
               
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
   
data(){
    return{
        workDone:true,
        tab:0

    }
},
computed: mapState({
    todos:state=>state.todoList
}),
methods:{

   
}
}
</script>

<style scoped>
.content-compelet{
    background: white;
    margin-top:3%;
    padding:3%;
    padding-top: 1%;
    border-radius: 3%;

}




p{
    color: rgb(105, 105, 105);
}
.todo-nav{
  color: #9333ea;

}
.todo:hover{
    background: #dfc1fa;;
    color: white;
    border-radius: 10px;
    padding-left: 2%;


}
.todo:hover .title{
    color: green;
}
.todo:hover .icon-three-dot{
    right: 4%;
    top: 35px;
}
.icon-three-dot{
    position: absolute;
    right: 0px;
    top: 22px;
}
.heading{
    color: green;
}
.title{
    color: green;

}

@media only screen and (max-width: 600px) {
  *{color: red;}
  .content-compelet{
    width: 30px;
  }

}

</style>