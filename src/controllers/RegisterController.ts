import { Request, Response } from "express";
import { RegisterUserDto } from "../dto/RegisterUserDto";
import UserService from "../services/UserService";

class RegisterController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async execute(req: Request, res: Response) {
        const data = req.body as RegisterUserDto;
        
        try {
            this.userService.create(data);
            res.status(200).json({ message: 'Account successfully registered' });

        } catch (error: any) {
            res.status(error.status).json({ error: error.message })
        }
    }
}

export default new RegisterController();