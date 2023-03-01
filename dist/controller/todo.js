"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
//const TODOS: Todo[] = [];
const createTodo = async (req, res, next) => {
    try {
        const data = req.body;
        console.log('Data', data);
        let todos = await todo_1.default.create(data);
        return res
            .status(200)
            .json({ message: 'Todo created sucessfully', data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    try {
        let todos = await todo_1.default.find({});
        return res.status(200).json({ message: 'All todos', data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.getTodos = getTodos;
const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        let todos = await todo_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res
            .status(200)
            .json({ message: 'Todo updated succesfully', data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.updateTodo = updateTodo;
// add deleteTodo method
