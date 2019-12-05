import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent implements OnInit {

  constructor() { }

  searchUserValue = ''

  ngOnInit() {
  }


  searchUser(value: string) {
    this.searchUserValue = value.trim();
  }

}
