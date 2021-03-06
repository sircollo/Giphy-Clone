import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailsComponent } from './gif-details/gif-details.component';
import { GiphyMainComponent } from './giphy-main/giphy-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RandomComponent } from './random/random.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'trending',component: GiphyMainComponent},
  {path: 'random', component: RandomComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component:GiphyMainComponent},
  { path: 'gif/:id',component: GiphyMainComponent},
  {path: 'details/:id', component:GifDetailsComponent},

  {path: '', redirectTo:"/trending",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
