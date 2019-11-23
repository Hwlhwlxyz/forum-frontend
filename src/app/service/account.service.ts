import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private token: string;

  getToken() {
    return this.token;
  }

  login(username, password) {
    const loginData: LoginData = {username: username, password: password};
    this.http.post<{token: string}>("http://localhost:3000/loginSignup/login", loginData).subscribe(response => {
      const token = response.token;
      this.token = token;
    })
  }

  createUser(username, password, birth, description) {
    const userData: UserData = {username: username, password: password, postNumber: 1, birth: birth, description: description};
    this.http.post("http://localhost:3000/loginSignup/signup", userData).subscribe(response => {

    });
  }
  constructor(public http: HttpClient) { }
}

export class UserData {
  username: string;
  password: string;
  postNumber: number;
  birth: Date;
  description: string;
}

export class LoginData {
  username: string;
  password: string;
}
