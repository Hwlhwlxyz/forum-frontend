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
  username;
  password;
  birth;
  description;
  ngOnInit() {
    this.infoService.getUserInfo().subscribe(response => {
      this.username = response["username"];
      this.password = response["password"];
      this.birth = response["birth"];
      this.description = response["description"];
    });
  }

  updateUserInfo() {
    if (this.password == "")
      return;
    this.infoService.updateUser(this.password, this.description).subscribe(response => {
      this.password = response["password"];
      this.description = response["description"];
    },
    err => {
      console.log(err);
    });
  }
}
