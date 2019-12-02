import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router) { }

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
      console.log(err)
    }
    );
  }
}
