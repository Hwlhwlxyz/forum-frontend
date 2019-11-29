import { ActivatedRoute } from '@angular/router';
import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { CreatecommentDialogComponent } from '../dialog/createcomment-dialog/createcomment-dialog.component';
import { Subscription } from 'rxjs';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  userIsAuth = false;
  private statusListenerSubs: Subscription;
  
  constructor(private topicService: TopicService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private accountService: AccountService) { }

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


  author: string;
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
    this.userIsAuth = this.accountService.getIsAuth();
    if (this.userIsAuth)
      this.authorid = this.accountService.getUserId();
    this.statusListenerSubs = this.accountService.getStatusListener().subscribe(isAuthenticated => {
      this.userIsAuth = isAuthenticated;
    });
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

  ngOnDestroy() {
    this.statusListenerSubs.unsubscribe();
  }
}
