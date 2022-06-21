class HttpException extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        super(message);

        this.status = status;
        this.message = message;
    }

    getErrorMessage() {
        return 'Error: ' + this.message;
    }
}

export default HttpException