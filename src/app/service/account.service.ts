import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private token: string;
  private tokenTimer: NodeJS.Timer;
  private isAuth = false;
  private statusListener = new Subject<boolean>();
  public apiBaseURL = environment.apiBaseURL;

  public httpOptions  = {
    headers: 
    new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

  getUserId(){
    return "5ddaf4b182f0af34ac2ef6d4"
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuth;
  }

  getStatusListener() {
    return this.statusListener.asObservable();
  }

  login(username, password) {
    const loginData: LoginData = {username: username, password: password};
    console.log('logindata',loginData)
    this.http.post<{token: string, expiresIn: number}>(this.apiBaseURL+"/loginSignup/login", loginData ).subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresDuration = response.expiresIn;
        this.setTimer(expiresDuration);
        this.isAuth = true;
        this.statusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresDuration * 1000);
        this.saveAccountData(token, expirationDate);
        this.router.navigate(['/topics']);
      }
      console.log(this.token)
    })
  }

  createUser(username, password, birth, description) {
    const userData: UserData = {username: username, password: password,  birth: birth, description: description};
    console.log(userData)
    return this.http.post(this.apiBaseURL+"/loginSignup/signup", userData, this.httpOptions)
  }


  autoAuth() {
    const accountInformation = this.getAccountData();
    if (!accountInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = accountInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = accountInformation.token;
      this.isAuth = true;
      this.setTimer(expiresIn / 1000);
      this.statusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuth = false;
    this.statusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAccountData();
    this.router.navigate(['/topics']);
  }

  private setTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAccountData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAccountData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAccountData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    };
  }

  getUserinfo(){
    return {name:"name"};
  }

  constructor(public http: HttpClient, private router: Router) { }
}

export class UserData {
  username: string;
  password: string;
  birth: Date;
  description: string;
}

export class LoginData {
  username: string;
  password: string;
}
