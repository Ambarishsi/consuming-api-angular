import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseURL} from '../shared/baseURL';
@Injectable({
  providedIn: 'root'
})
export class TestapisService {
  //`${baseURL}restaurant/api/v1/merchant/restaurants`
  api1 = `${baseURL.url1}posts`;
  api2 = `${baseURL.url2}products`;
  api3 = `${baseURL.url3}employees`;
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
