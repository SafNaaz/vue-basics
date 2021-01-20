const app = Vue.createApp({
    data(){
        return{
            title : 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeAge(){
            this.age++
        }
    }
})

app.mount('#app')