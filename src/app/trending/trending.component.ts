import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending-service/trending.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  // trending!:Trending

  subscription:Subscription = new Subscription;
  gifs:any;





  constructor(private trendingService:TrendingService){}
  
  viewMore(){
    this.trendingService.getMoreTrendingGifs()
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
    })
  }
  ngOnInit(){
    this.trendingService.getTrendingGifs(10)
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
    })
    
  }

}

