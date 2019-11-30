import { EditcommentDialogComponent } from './../dialog/editcomment-dialog/editcomment-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { CreatecommentDialogComponent } from '../dialog/createcomment-dialog/createcomment-dialog.component';
import { Subscription } from 'rxjs';
import { AccountService } from '../../service/account.service';
import { EdittopicDialogComponent } from '../dialog/edittopic-dialog/edittopic-dialog.component';

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

  columnsToDisplay = ['author', 'info', 'likes'];
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
  currentid

  content
  images
  topiclikes
  commentlikes
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
      this.currentid = this.accountService.getUserId();
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
        this.comments = response['comments'];
        this.authorid = response['authorid'];
        this.author = response['author'];
        this.title = response['title'];
        this.content = response['content'];
        this.topiclikes = response['likes'];
        this.timestamp = response['timestamp'];
        this.tags = response['tags'];
        this.images = response['images'];

        console.log(this.comments)
        this.dataSource.data = this.comments;
        this.topicInfo = {
          authorid: this.authorid,
          author: this.author,
          title: this.title,
          content: this.content,
          timestamp: this.timestamp,
          tags: this.tags,
          images: this.images
        }
        console.log('topicinfo',this.topicInfo)
      }
    )
  }

  open_createCommentDialog(){
    const dialogRef = this.dialog.open(CreatecommentDialogComponent, {
      width: '600px',
      data:{topicId:this.topicId}
    });
  }

  open_editTopicDialog() {
    const dialogRef = this.dialog.open(EdittopicDialogComponent, {
      width: '600px',
      data:{topicId:this.topicId}
    })
  }

  open_editCommentDialog(commentInfo) {
    const dialogRef = this.dialog.open(EditcommentDialogComponent, {
      data: {commentInfo: commentInfo}
    })
  }

  addLikes() {
    this.topicService.topicLike(this.topicId).subscribe(response => {
      this.topiclikes = response['likes'];
    })
  }

  addCommentLikes(commentid) {
    this.topicService.commentLike(this.topicId, commentid).subscribe(response => {
      this.commentlikes = response['likes'];
    });
    this.getTopicInfo();
  }

  isCurrentUser(authorid){
    return this.currentid === authorid;
  }

  ngOnDestroy() {
    this.statusListenerSubs.unsubscribe();
  }
}
