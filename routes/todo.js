const {Router} = require('express');
const Todo = require('../modules/todo');
const router = Router();

// Получение списка задач
router.get('/', (req, res) => {

});

// Создание новой задачи
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        });
        res.status(201).json({todo})
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }

});

// Измение задачи
router.put('/:id', (req, res) => {

});

// Удаление задачи
router.delete(':id', (req, res) => {

});

module.exports = router;