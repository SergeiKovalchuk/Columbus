export class PrivService {
    allowView = false;
    // TODO: add verification to a priv array
    isAllowedView() {
        const promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
            resolve(this.allowView);
            }, 800);
        }
        );
        return promise;
    }
}
