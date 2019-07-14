import { LoginCredentials } from '../login/loginCredentials.model';

export class AuthService {
    private loginCredentials = new LoginCredentials('', '');
    private loggedIn = false;

    isAuthenticated() {
      const promise = new Promise(
        (resolve, reject) => {
            resolve(this.loggedIn);
        }
      );
      return promise;
    }
    // TODO: implement reaching out to http service
    Authenticate() {
      const promise = new Promise(
        (resolve, reject) => {
          setTimeout(() => { // setTimeout simulates a delay to the backend
          if ( this.loginCredentials.password === '123' ) {
            resolve(true);
          } else {
            resolve(false);
          }}, 700);
        }
      );
      return promise;
    }

    setLoginCredentials(login: LoginCredentials) {
        this.loginCredentials.user = login.user;
        this.loginCredentials.password = login.password;
    }

    getLoginCredentials() {
        return this.loginCredentials;
    }

    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
  }
