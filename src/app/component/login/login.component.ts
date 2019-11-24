import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  login() {
    
    let r = this.accountService.login(this.username, this.password);
    console.log(r);
    return r;
  }


}
