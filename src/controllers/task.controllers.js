const { Tarea, User } = require('../db/models')
const taskControllers = {}

const getTasks = async (_, res) => {
    const tasks = await Tarea.findAll()
    res.status(200).json(tasks)
}

const getTaskById = async (req,res) => {
    const id = req.params.id;
    
    const task = await Tarea.findByPk(id);
    res.status(200).json(task)
}

const updateTask = async (req,res) => {
    const { id } = req.params;
    const task = await Tarea.findByPk(id);

    task.update(req.body);
    res.status(200).json(task)
}


taskControllers.getTasks = getTasks
taskControllers.getTaskById = getTaskById
taskControllers.updateTask = updateTask

module.exports = { taskControllers }