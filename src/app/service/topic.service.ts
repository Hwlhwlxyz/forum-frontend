import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  apiBaseURL = environment.apiBaseURL;
  topicsURL =  environment.apiBaseURL+"/posts";
  constructor(private http: HttpClient) { }

  getAllTopics(){
    return this.http.get(this.topicsURL)
  }

  getAllComments(topicid){
    //return this.http.get<any>(this.apiBaseURL);
    return [];
  }
}
