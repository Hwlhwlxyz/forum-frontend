import { Router } from '@angular/router';
import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CreatetopicDialogComponent } from '../dialog/createtopic-dialog/createtopic-dialog.component';

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
  
  constructor(private topicService: TopicService,
    public dialog: MatDialog,
    private router:Router) { }

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
    this.router.navigate(["/topicdetail",data['_id']])
    console.log(data)
  }

  open_createtopicDialog(){
    let dialogRef = this.dialog.open(CreatetopicDialogComponent,{
      height: '400px',
      width: '800px',
    });
  }
}
