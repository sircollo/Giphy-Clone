import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending-service/trending.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  subscription:Subscription = new Subscription;
  gifs:any;


  constructor(private trendingService:TrendingService){}
  
  viewMoreRandom(){
    this.trendingService.getMoreRandomGifs()
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
    })
  }
  ngOnInit(){
    this.trendingService.getRandomGifs()
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
    })
    
  }

}
