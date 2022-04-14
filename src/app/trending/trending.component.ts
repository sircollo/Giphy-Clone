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
  btnValue = "More Gifs"

  subscription:Subscription = new Subscription;
  gifs:any;





  constructor(private trendingService:TrendingService){}
  
  viewMore(){
    if(this.btnValue=== "More Gifs"){
    this.trendingService.getMoreTrendingGifs()
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
      this.btnValue = "Less Gifs"
    })
  }else if(this.btnValue ==="Less Gifs"){
    this.trendingService.getTrendingGifs(10)
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
    this.gifs = response;    
    this.btnValue = "More Gifs"
  })
  }
  }
  ngOnInit(){
    this.trendingService.getTrendingGifs(10)
    this.subscription = this.trendingService.getGifs().subscribe((response:any)=>{
      this.gifs = response;
    })
    
  }

}

