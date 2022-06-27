import { Request, Response } from "express";

export default {
    async login(req: Request, res: Response) {
        res.send(201).json({ message: 'Login com sucesso' })
    },

    async register(req: Request, res: Response) {
        res.send(201).json({ message: 'Login com sucesso' })
    }
}