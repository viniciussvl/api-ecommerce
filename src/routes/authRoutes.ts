import { Request, Response, Router } from 'express';
import LoginController from '../controllers/LoginController';
import RegisterController from '../controllers/RegisterController';
import registerValidator from '../middlewares/validators/registerValidator';
import loginValidator from '../middlewares/validators/loginValidator';

const authRoutes = Router();

authRoutes.post('/login', [loginValidator], (req: Request, res: Response) => { LoginController.execute(req, res) });
authRoutes.post('/register', [registerValidator], (req: Request, res: Response) => { RegisterController.execute(req, res) });

export default authRoutes;