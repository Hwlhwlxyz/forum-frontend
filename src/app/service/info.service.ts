import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoURL =  environment.apiBaseURL+"/info";
  userid
  constructor(public http: HttpClient, public accountService: AccountService) {}

  getUserInfo() {
    this.userid = this.accountService.getUserId();
    return this.http.get(this.infoURL + '/' + this.userid);
  }
}
