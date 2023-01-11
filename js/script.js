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
                text: this.newTask
            }
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskObject);
            this.newTask = '';
        }
    }
});

app.mount('#root');