import { Component, OnInit } from '@angular/core';
import { Trending } from '../trending';
import { TrendingService } from '../trending-service/trending.service';
@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {

  constructor(public trendingService:TrendingService) { 
  this.trendingService.getDetails().subscribe((response:any) => {
    
  });
  }
  ngOnInit(): void {

  }

}
