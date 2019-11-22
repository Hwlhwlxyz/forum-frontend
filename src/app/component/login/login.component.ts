import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  login(username, password) {
    
    this.accountService.login(username, password);
  }


}
