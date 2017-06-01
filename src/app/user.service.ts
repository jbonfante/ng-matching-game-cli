import { Injectable } from '@angular/core';

class User {
  public name: string = 'Test User';
}

@Injectable()
export class UserService {
  user: User;

  constructor() { }
  public isLoggedIn(): boolean {
    return true;
  }

}
