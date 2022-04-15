import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending-service/trending.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm!: string;

  constructor(private trendingService:TrendingService) { }

  search(searchTerm : string){
    
    if(searchTerm !== ''){
      this.trendingService.searchGifs(searchTerm);
      console.log(searchTerm)
    }
    this.searchTerm == ''
  }

  ngOnInit(): void {
  }

}
