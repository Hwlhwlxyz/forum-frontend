import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-edittopic-dialog',
  templateUrl: './edittopic-dialog.component.html',
  styleUrls: ['./edittopic-dialog.component.css']
})
export class EdittopicDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EdittopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public topicService: TopicService,
    private snackBar: MatSnackBar) { }
  
  topicId
  title 
  content 
  ngOnInit() {
    this.topicId = this.data['topicId'];
    this.topicService.getEditTopic(this.topicId).subscribe(response => {
      this.title = response['title'];
      this.content = response['content'];
    });
  }

  submit() {
    this.topicService.editTopic(this.topicId, this.title, this.content).subscribe(response => {
      this.snackBar.open('success', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    },
    err => {
      console.log(err);
    }) 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
