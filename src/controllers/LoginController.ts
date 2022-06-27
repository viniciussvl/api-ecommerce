import { Request, Response } from "express";
import UserService from "../services/UserService";
import bcrypt from 'bcrypt';
import HttpException from "../exceptions/HttpException";
import jwt from 'jsonwebtoken';

class LoginController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async execute(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user: any = await this.userService.findByEmail(email);
            const correctPassword = await this.comparePasswordWithHash(password, user.password);
            if(!correctPassword) {
                throw new HttpException(422, 'Invalid password');
            }

            const secret: any = process.env.JWT_SECRET;
            const token = jwt.sign({ userId: user._id }, secret);

            res.status(200).json({ token: token, message: 'Authenticated successfully' });
            
        } catch (error: any) {
            console.log(error);

            res.status(error.status).json({ error: error.message })
        }
    }

    private async comparePasswordWithHash(password: string, hash: string): Promise<Boolean> {
        try {
            const compare = await bcrypt.compare(password, hash);
            if(!compare) {
                return false;
            }

            return true;

        } catch (error) {
            console.log(error);
            throw new HttpException(500, 'Internal Server Error');
        }
    }
}

export default new LoginController();