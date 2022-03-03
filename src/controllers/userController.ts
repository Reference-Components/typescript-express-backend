import express, { Request, Response } from 'express';
import { getUsers } from '../services/userService';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  const users = getUsers();
  res.json({ users })
});

export default router;
