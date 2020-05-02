const Todo = require('../modules/todo')

const users = [
    {name: 'Igor', age: 33, email: 'igor@gmail.com'},
    {name: 'Ann', age: 28, email: 'elena@gmail.com'}
];

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({min, max, count}) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min;
            arr.push(random);
        }
        return arr;
    },
    addTestUser({user: {name, email}}) {
        const user = {
            name,
            email,
            age: Math.ceil(Math.random() * 30)
        };
        users.push(user);
        return user;
    },
    async getTodos(){
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Fetch todos is not available')
        }
    }
};