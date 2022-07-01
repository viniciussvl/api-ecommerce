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

    /** The LoginController is single-action and has only one public method, execute(). 
     * Where it verifies the existence of the 
     * user and authenticates the user, signing a jwt token.
     * 
     * @param {Request} req Request express
     * @param {Response} res Response express
     * @returns 
     * Returns a 200 status and JWT token on success.
     */
    
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

            res.status(200).json({ 
                message: 'Authenticated successfully', 
                user: { 
                    email: user.email, 
                    _id: user.id, 
                    firstName: user.firstName, 
                    lastName: user.lastName 
                }, 
                token: token 
            });

        } catch (error: any) {
            console.log(error);

            res.status(error.status).json({ error: error.message })
        }
    }

    /** This private method has the responsibility of 
     * comparing and validating a hash with the plain text password.
     * 
     * @param {string} password plain text password
     * @param {string} hash bcrypt hash
     * @returns 
     * Include status code in Error Exception
     */
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