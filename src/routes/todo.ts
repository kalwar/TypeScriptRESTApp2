import { Router } from 'express';
import { createTodo, getTodos } from '../controller/todo';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id');
router.delete('/:id');

export default router;
