import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, } from '@angular/material';
import { InfoService } from 'src/app/service/info.service';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent implements OnInit {

  constructor(private infoService: InfoService, private router: Router, private topicService: TopicService) { }

  columnsToDisplay = ['title', 'content' , 'tags', 'author', 'timestamp', 'delete'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  searchUserValue = ''
  topics
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUserPosts(this.searchUserValue);
  }

  searchUser(value: string) {
    this.searchUserValue = value.trim();
    this.getUserPosts(this.searchUserValue);
  }

  toTopicDetail(data){
    this.router.navigate(["/topicdetail",data['_id']])
  }

  deleteTopic(postid) {
    this.topicService.topicDelete(postid).subscribe(response => {
      this.searchUser(this.searchUserValue);
    });
  }

  getUserPosts(username) {
    if (username == "")
      return;
    console.log(username);
    this.infoService.adminSearchUser(username).subscribe((response:[]) => {
      this.topics = response;
      this.dataSource.data = this.topics;
      console.log(this.dataSource.data);
    });
  }

}
