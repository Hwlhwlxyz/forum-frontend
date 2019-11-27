import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit, OnDestroy {
  userIsAuth = false;
  private statusListenerSubs: Subscription;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.userIsAuth = this.accountService.getIsAuth();
    this.statusListenerSubs = this.accountService.getStatusListener().subscribe(isAuthenticated => {
      this.userIsAuth = isAuthenticated;
    });
  }

  logout() {
    this.accountService.logout();
  }

  ngOnDestroy() {
    this.statusListenerSubs.unsubscribe();
  }
}
