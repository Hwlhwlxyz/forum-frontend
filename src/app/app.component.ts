import { Component } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forum-frontend-a';
  constructor(private accountSerivce: AccountService) {}

  ngOnInit() {
    this.accountSerivce.autoAuth();
  }
}
