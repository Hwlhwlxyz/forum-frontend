import { AccountService } from './../../../service/account.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-createcomment-dialog',
  templateUrl: './createcomment-dialog.component.html',
  styleUrls: ['./createcomment-dialog.component.css']
})
export class CreatecommentDialogComponent implements OnInit {


  topicId
  content
  images = []
  imagelink

  constructor(public dialogRef: MatDialogRef<CreatecommentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public topicService: TopicService,
              private snackBar: MatSnackBar,
              private accountService:AccountService,
              ) { }

  ngOnInit() {
    console.log(this.data)
    this.topicId = this.data['topicId'];
    this.accountService.getUserinfo();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(){
    this.topicService.createComment(this.topicId, this.content).subscribe((response)=>{
      this.snackBar.open('success', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    },
    err => {
      console.log(err)
    })
  }







}
