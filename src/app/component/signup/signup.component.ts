import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  signup(username, password, birth, description) {
    console.log(username, password, birth, description)
    if (username == "" || password == "" || birth == "" || description == "")
      return;
    this.accountService.createUser(username, password, birth, description).subscribe(
      response => {
        this.router.navigate(["/topics"]);
    },
    err => {
      this.snackBar.open('username exists', '', {
        duration: 2000,
      });
    }
    );
  }
}
