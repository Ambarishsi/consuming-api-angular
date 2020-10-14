import { Component, OnInit } from '@angular/core';
import {TestapisService} from '../testapis.service';
@Component({
  selector: 'app-consuming-api',
  templateUrl: './consuming-api.component.html',
  styleUrls: ['./consuming-api.component.css']
})
export class ConsumingApiComponent implements OnInit {

  ambarish: any;
  ambarish1: any;
  ambarish2: any;
  constructor(private apidata:TestapisService) { }

  ngOnInit(): void {
    this.apidata.api_urls.posts.subscribe((res) =>{
      this.ambarish = JSON.stringify(res);
    }),
    this.apidata.api_urls.comments.subscribe((res) =>{
      this.ambarish1 = JSON.stringify(res);
    }),
    this.apidata.api_urls.photos.subscribe((res) =>{
      this.ambarish2 = JSON.stringify(res);
    })
  }

}
