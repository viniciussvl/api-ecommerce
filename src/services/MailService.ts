interface IMailTo {
    email: string,
    name: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: Array<string>
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IMailService {
    sendEmail(request: IMessageDTO): void
}

class MailService implements IMailService {
    async sendEmail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.email}: ${message.body}`);
    }
}

export default MailService;