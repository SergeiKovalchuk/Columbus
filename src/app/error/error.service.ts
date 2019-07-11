export class ErrorService {

    errorCode = 'Unknown Error occured please contact the development team.';

    setErrorCode(code: string) {
        this.errorCode = code;
    }

    getErrorCode() {
        return this.errorCode;
    }
}
