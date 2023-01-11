//tasks aray
const tasks = [
    {
        text: 'fare la spesa',
        done: false
    },
    {
        text: 'aggiornare il PC',
        done: true
    },
    {
        text: 'comprare biglietto treno',
        done: false
    },
    {
        text: 'fare la valigia',
        done: false
    }
];
//vue 
const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks
           
        }
    },
    computed:{
        taskObject(){
            return{
                text: this.newTask,
                done: false
            }
        }
    },
    methods:{
        addTask(){
            if(this.newTask){
                this.tasks.push(this.taskObject);
                this.newTask = '';

            }
        },
        taskDone(task){
            task.done = !task.done
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        allTasksDone(){
            for(let task of this.tasks) {
                task.done = true;
            }
        }
    }
});

app.mount('#root');