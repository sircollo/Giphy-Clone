import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyMainComponent } from './giphy-main/giphy-main.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {path: 'trending',component: GiphyMainComponent},
  {path: 'random', component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
