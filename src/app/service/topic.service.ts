import { AccountService } from 'src/app/service/account.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  apiBaseURL = environment.apiBaseURL;
  topicsURL =  environment.apiBaseURL+"/posts";
  constructor(private http: HttpClient,
   public accountService: AccountService) { }

  getAllTopics(){
    return this.http.get(this.topicsURL)
  }

  createTopic(title, content, tags, images){
    let topicdata = {
      authorid: this.accountService.getUserId(),
      title: title,
      content: content,
      tags: tags,
      images: images
    }
    return this.http.post(this.topicsURL, topicdata);
  }

  getTopicById(topicid){
    return this.http.get(this.topicsURL+'/'+topicid);
  }

  getTopicsByTag(tag){
    return this.http.get(this.topicsURL+'/')
  }

  createComment(postid, content ){
    let commentdata = {
      content: content,
    }
    return this.http.post(this.topicsURL+"/"+postid+"/newComment", commentdata)
  }
}
