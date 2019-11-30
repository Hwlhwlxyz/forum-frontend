import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-editcomment-dialog',
  templateUrl: './editcomment-dialog.component.html',
  styleUrls: ['./editcomment-dialog.component.css']
})
export class EditcommentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditcommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public topicService: TopicService,
    private snackBar: MatSnackBar) { }

  commentId 
  content 

  ngOnInit() {
    this.commentId = this.data["commentId"];
    
  }

}
