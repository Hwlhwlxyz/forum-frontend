import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private token: string;
  public apiBaseURL = environment.apiBaseURL;

  public httpOptions  = {
    headers: 
    new HttpHeaders({
      'Content-Type': 'application/json'
  })
};


  getToken() {
    return this.token;
  }

  login(username, password) {
    
    const loginData: LoginData = {username: username, password: password};
    console.log('logindata',loginData)
    this.http.post<{token: string}>(this.apiBaseURL+"/loginSignup/login", loginData ).subscribe(response => {
      const token = response.token;
      this.token = token;
      console.log(this.token)
    })
  }

  createUser(username, password, birth, description) {
    const userData: UserData = {username: username, password: password, postNumber: 1, birth: birth, description: description};
    return this.http.post(this.apiBaseURL+"/loginSignup/signup", userData)
  }


  getUserinfo(){
    return {name:"name"};
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
