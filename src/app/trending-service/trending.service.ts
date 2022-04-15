import { Injectable } from '@angular/core';
// import { images } from '../trending-gifs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { GifDetailsComponent } from '../gif-details/gif-details.component';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gifs =new BehaviorSubject<any>([])
  gifNumber: number = 12;
  constructor(private http: HttpClient){}
  trendingAP = environment.trendingAPI
  getTrendingGifs(gifNumber:any){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.trendingAPI}&limit=12&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
    // %$[environment.trendingAPI]
  }
  getMoreTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.trendingAPI}&limit=100&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getRandomGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${environment.trendingAPI}&limit=100&tag=sports&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getMoreRandomGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${environment.trendingAPI}&tag=sports&rating=g`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }
  getGifs(){
    return this.gifs.asObservable()
  }
  searchGifs(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.trendingAPI}&q=laugh&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    },err=>{
      this.gifs = new BehaviorSubject<any>("Try another Search Item")
      alert("Try sometimes later")
    })

  }
  // public getDetails():Observable<GifDetailsComponent>{
  //   const url = `https://api.giphy.com/v1/gifs/aM3tvChhsf7iw?api_key=${environment.trendingAPI}`
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("gifs",1);
 
  //   return this.http.get<GifDetailsComponent>(url,{params:queryParams});
  // }
}

