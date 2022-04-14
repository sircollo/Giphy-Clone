import { Injectable } from '@angular/core';
// import { images } from '../trending-gifs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gifs =new BehaviorSubject<any>([])
  gifNumber: number = 12;
  constructor(private http: HttpClient){}

  getTrendingGifs(gifNumber:any){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=L5QeIMh6hYy1AV3zLvPEMtz8twlE3jbt&limit=25&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getGifs(){
    return this.gifs.asObservable()
  }
  searchGifs(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=L5QeIMh6hYy1AV3zLvPEMtz8twlE3jbt&q=laugh&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })

  }
  
}

