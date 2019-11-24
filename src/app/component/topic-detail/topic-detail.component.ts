import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  constructor(private topicService: TopicService) { }

  columnsToDisplay = ['title', 'author', 'time'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  comments
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.comments = this.topicService.getAllComments(1);
    this.dataSource.data = this.comments;
  }

 


}
