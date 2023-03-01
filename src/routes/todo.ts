import { Router } from 'express';
import { createTodo, getTodos, updateTodo } from '../controller/todo';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id');

export default router;
