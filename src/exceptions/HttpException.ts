/** This class is an exception that inherits the Error interface 
 * to insert an additional parameter into the exception's return object.
 * 
 * @param {number} status a status code
 * @param {message} string exception message
 * @returns 
 * Include status code in Error Exception
 */

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