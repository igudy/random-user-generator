const app = Vue.createApp({
    data(){
        return {
            firstName: 'Goodness',
            lastName: 'Igunma',
            email: 'Goodnessigunma1@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser(){
            this.firstName = 'Grace',
            this.lastName = 'John',
            this.email = 'Gracejohn@gmail.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg',
        }
    }
})

app.mount('#app')