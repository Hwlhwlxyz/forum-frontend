import { TopicService } from './../../../service/topic.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatChipInputEvent, MatSnackBar } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-createtopic-dialog',
  templateUrl: './createtopic-dialog.component.html',
  styleUrls: ['./createtopic-dialog.component.css']
})
export class CreatetopicDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatetopicDialogComponent>,
    public topicService: TopicService,
    private snackBar: MatSnackBar) { }
  tags = []
  imagelink = ''
  images = []
  title
  content

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  ngOnInit() {
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  submit(){
    this.topicService.createTopic(this.title, this.content, this.tags, this.images).subscribe(
      response => {
        console.log('succeed',response)
        this.snackBar.open('success', '', {
          duration: 2000,
        });
        this.dialogRef.close();
    },
    err => {
      console.log(err)
    }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addImagesLink(){
    this.images.push(this.imagelink);
    this.imagelink = '';
  }


  invalidImagelink(){
    return (this.imagelink.match(/\.(jpeg|jpg|gif|png)$/) == null);
  }



}
