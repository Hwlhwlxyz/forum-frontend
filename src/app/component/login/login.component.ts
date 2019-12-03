import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: String;
  password: String;
  selectedIdentity = "user";
  authStatusSub: Subscription;
  constructor(public accountService: AccountService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authStatusSub = this.accountService.getStatusListener().subscribe(authStatus => {
      if (!authStatus) {
        this.snackBar.open('incorrect username or password', '', {
          duration: 2000,
        });
      }
    });
  }

  login() {
    if (this.selectedIdentity==="user"){
      this.accountService.login(this.username, this.password);
    }
    if(this.selectedIdentity==="admin"){
      this.accountService.adminLogin(this.username, this.password);
    }
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
