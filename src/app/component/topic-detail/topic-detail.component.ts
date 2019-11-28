import { ActivatedRoute } from '@angular/router';
import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { CreatecommentDialogComponent } from '../dialog/createcomment-dialog/createcomment-dialog.component';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  constructor(private topicService: TopicService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  columnsToDisplay = ['author', 'info'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  comments = []
  topicId

  topicInfo = {}


  author
  authorid

  content
  images
  likes
  tags
  timestamp
  title
  _id

  ngOnInit() {

    this.topicId = this.activatedRoute.snapshot.params['topicid']
    console.log(this.topicId)
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //this.dataSource.data = []


    this.getTopicInfo();
  }

 


  getTopicInfo(){
    this.topicService.getTopicById(this.topicId).subscribe(
      (response)=>{
       
        console.log(response) 
        this.comments = response['comments']
        console.log(this.comments)
        this.dataSource.data = this.comments;
      }
    )
  }

  open_createCommentDialog(){
    const dialogRef = this.dialog.open(CreatecommentDialogComponent, {
      width: '600px',
      data:{topicId:this.topicId}
    });
  }

}
