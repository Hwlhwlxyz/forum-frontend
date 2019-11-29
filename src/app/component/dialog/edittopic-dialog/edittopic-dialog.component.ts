import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-edittopic-dialog',
  templateUrl: './edittopic-dialog.component.html',
  styleUrls: ['./edittopic-dialog.component.css']
})
export class EdittopicDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EdittopicDialogComponent>,
    public topicService: TopicService,
    private sncackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
