import express from 'express';
import controller from '../controllers/candidatura';
const _router = express.Router();

_router.post('/candidatura', controller.candidatura);
//_router.post('/login', controller.login);
export const router = _router;