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

  topicid
  commentid
  content
  commentInfo
  ngOnInit() {
    this.commentInfo = this.data['commentInfo'];
    this.topicid = this.commentInfo.postid;
    this.commentid = this.commentInfo._id;
    this.topicService.getEditComment(this.topicid, this.commentid).subscribe(response => {
      this.content = response['content'];
    })
  }


  submit(){
    this.topicService.editComment(this.topicid, this.commentid, this.content).subscribe(response => {
      this.snackBar.open('success', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    },
    err => {
      console.log(err);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
