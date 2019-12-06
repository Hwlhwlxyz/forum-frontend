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
    return this.http.get(this.infoURL + '/' + this.userid + '/posts');
  }

  getUserComments() {
    return this.http.get(this.infoURL + '/' + this.userid + '/comments');
  }

  adminSearchUser(username) {
    return this.http.get(this.adminInfoURL + '/' + this.userid + '/' + username + '/posts');
  }

  dailyActiveness(timestamp) {
    return this.http.get(this.adminInfoURL + '/search/' + timestamp);
  }
}
