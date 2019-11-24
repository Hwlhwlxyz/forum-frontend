import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  columnsToDisplay = ['title', 'author', 'time'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  topics;
  
  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.topicService.getAllTopics().subscribe(response=>
      {
        this.topics = response;
        this.dataSource.data = this.topics;
      })
    
  }

  toTopicDetail(data){
    console.log(data)
  }
}
