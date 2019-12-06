import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoURL =  environment.apiBaseURL+"/info";
  adminInfoURL = environment.apiBaseURL+"/adminInfo";
  userid
  constructor(public http: HttpClient, public accountService: AccountService) {}

  getUserInfo() {
    this.userid = this.accountService.getUserId();
    return this.http.get(this.infoURL + '/' + this.userid);
  }

  updateUser(password, description) {
    let infodata = {
      password: password,
      description: description
    };
    this.userid = this.accountService.getUserId();
    return this.http.put(this.infoURL + '/' + this.userid, infodata);
  }

  getUserPosts() {
    this.userid = this.accountService.getUserId();
    return this.http.get(this.infoURL + '/' + this.userid + '/posts');
  }

  getUserComments() {
    this.userid = this.accountService.getUserId();
    return this.http.get(this.infoURL + '/' + this.userid + '/comments');
  }

  adminSearchUser(username) {
    this.userid = this.accountService.getUserId();
    return this.http.get(this.adminInfoURL + '/' + this.userid + '/' + username + '/posts');
  }

  dailyActiveness(timestamp) {
    this.userid = this.accountService.getUserId();
    console.log(this.userid);
    return this.http.get(this.adminInfoURL + '/' + this.userid + '/search/' + timestamp);
  }
}
