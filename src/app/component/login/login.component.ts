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
  selectedIdentity = "user";
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  login() {
    if (this.selectedIdentity==="user"){
      let r = this.accountService.login(this.username, this.password);
      console.log(r);
      return r;
    }
    if(this.selectedIdentity==="admin"){
      console.log('admin')
    }
   
  }


}
