import { Request, Response } from "express";
import MailService from "../services/MailService";

export default {
    async login(req: Request, res: Response) {
        res.send(201).json({ message: 'Login com sucesso' })
    },

    async register(req: Request, res: Response) {
        console.log('cadastrou');
        const mailService = new MailService();
        mailService.sendEmail({
            to: { 
                email: 'viniciussvl@hotmail.com',
                name: 'Vinicius Aquino',
            }, 
            message: {
                subject: 'Conta cadastrada',
                body: '<p>conteudo da msg</p>'
            }
        });

        res.send(201).json({ message: 'Conta criada' })
    }
}