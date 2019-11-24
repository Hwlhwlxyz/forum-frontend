import { AccountService } from 'src/app/service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  userinfo;
  ngOnInit() {
    this.userinfo = this.accountService.getUserinfo();
  }

  

}
