import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestapisService {

  api1 = "https://jsonplaceholder.typicode.com/posts";
  api2 = "https://jsonplaceholder.typicode.com/comments";
  api3 = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }

  /*getPosts()
  {
    return this.http.get(this.api1);
  }*/

  api_urls ={
    posts: this.http.get(this.api1),
    comments: this.http.get(this.api2),
    photos: this.http.get(this.api3),
  }
}
