import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatChipInputEvent } from '@angular/material';
import { InfoService } from 'src/app/service/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertopics',
  templateUrl: './usertopics.component.html',
  styleUrls: ['./usertopics.component.css']
})
export class UsertopicsComponent implements OnInit {

  topics;
  columnsToDisplay = ['title', 'content' , 'tags', 'author', 'timestamp'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  constructor(private infoService: InfoService, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllTopics();
  }

  getAllTopics(){
    this.infoService.getUserPosts().subscribe(response=>
      {
        this.topics = response;
        this.dataSource.data = this.topics;
      })
  }

  toTopicDetail(data){
    this.router.navigate(["/topicdetail",data['_id']])
    console.log(data)
  }

}
