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
  adminTopicsURL = environment.apiBaseURL+"/adminPosts";
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

  getEditTopic(topicid) {
    return this.http.get(this.topicsURL + '/' + topicid + '/edit');
  }

  editTopic(topicid, title, content) {
    let topicdata = {
      title: title,
      content: content
    }
    return this.http.put(this.topicsURL + '/' + topicid + '/edit', topicdata);
  }

  getEditComment(topicid, commentid) {
    console.log(this.topicsURL + "/" + topicid + "/" + commentid + "/edit")
    return this.http.get(this.topicsURL + "/" + topicid + "/" + commentid + "/edit");
  }

  editComment(topicid, commentid, content) {
    console.log(content)
    let topicdata = {
      content: content
    }
    return this.http.put(this.topicsURL + "/" + topicid + "/" + commentid + "/edit", topicdata);
  }

  getTopicById(topicid){
    return this.http.get(this.topicsURL+'/'+topicid);
  }

  getTopicsByTag(tag){
    return this.http.get(this.topicsURL+'/search/'+tag)
  }

  createComment(postid, content ){
    let commentdata = {
      content: content
    }
    return this.http.post(this.topicsURL+"/"+postid+"/newComment", commentdata)
  }

  topicLike(topicid) {
    let topicdata = {
      topicid: topicid
    }
    return this.http.put(this.topicsURL+'/'+topicid+"/like", topicdata);
  }

  commentLike(topicid, commentid) {
    let topicdata = {
      topicid: topicid,
      commentid: commentid
    }
    return this.http.put(this.topicsURL+"/"+topicid+"/"+commentid+"/like", topicdata);
  }

  topicDelete(postid) {
    return this.http.delete(this.adminTopicsURL+"/"+postid+"/delete");
  }

  commentDelete(adminid, commentid) {
    return this.http.delete(this.adminTopicsURL+"/"+adminid+"/"+commentid+"/delete");
  }
}
