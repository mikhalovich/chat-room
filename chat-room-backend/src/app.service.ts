import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  registrateUser(body): any {
    if (credentials.length) {
      console.log('credentials is not empty');
      let isExist = false;
      credentials.forEach((user) => {
        if (user.login === body.login) {
          console.log('the same login is already exist');
          isExist = true;
        }
      });
      if (isExist) return 'exists';
      credentials.push(body);
      return 'created';
    }
    console.log('credentials is empty');

    credentials.push(body);
    return 'created';
  }
  loginUser(body): any {
    if (credentials.length) {
      let isSuccess = false;
      credentials.forEach((user) => {
        if (user.login === body.login && user.password === body.password) {
          isSuccess = true;
        }
      });
      return isSuccess ? 'success' : 'error';
    }
  }
}

const credentials = [];
