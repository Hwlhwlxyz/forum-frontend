import { Router } from '@angular/router';
import { TopicService } from './../../service/topic.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatChipInputEvent } from '@angular/material';
import { CreatetopicDialogComponent } from '../dialog/createtopic-dialog/createtopic-dialog.component';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/service/account.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnDestroy {

  userIsAuth = false;
  userIsAdmin = false;
  private statusListenerSubs: Subscription;
  columnsToDisplay = ['title', 'content' , 'tags', 'author', 'timestamp'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  topics;
  selectedTag: string;
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(private topicService: TopicService,
    public dialog: MatDialog,
    private router:Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.userIsAuth = this.accountService.getIsAuth();
    if (this.userIsAuth)
      this.userIsAdmin = this.accountService.getIsAdmin();
    this.statusListenerSubs = this.accountService.getStatusListener().subscribe(isAuthenticated => {
      this.userIsAuth = isAuthenticated;
      this.userIsAdmin = this.accountService.getIsAdmin();
    });

    this.getAllTopics();
    
  }

  getAllTopics(){
    this.topicService.getAllTopics().subscribe(response=>
      {
        this.topics = response;
        this.dataSource.data = this.topics;
        console.log(this.topics)
      })
  }

  toTopicDetail(data){
    this.router.navigate(["/topicdetail",data['_id']])
    console.log(data)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open_createtopicDialog(){
    let dialogRef = this.dialog.open(CreatetopicDialogComponent,{
      height: '400px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(response=>{
      this.getAllTopics();
    })
  }

  ngOnDestroy() {
    this.statusListenerSubs.unsubscribe();
  }

  clickTag(tag){
    console.log(tag)
    this.selectedTag = tag;
    this.getTopicsByTag(tag)
  }

  getTopicsByTag(tag){
    this.topicService.getTopicsByTag(tag).subscribe((response:[])=>{
      this.topics = response;
      this.dataSource.data = this.topics;
      console.log(this.topics)
    })
  }



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.selectedTag= value.trim();
      this.getTopicsByTag(this.selectedTag);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    this.selectedTag = null;
    this.getAllTopics();
  }
}
