import { AccountService } from 'src/app/service/account.service';
import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private accountService: AccountService, private infoService: InfoService) { }
  userinfo;
  ngOnInit() {
    this.infoService.getUserInfo().subscribe(response => {
      this.userinfo = response;
    });
  }

  

}
