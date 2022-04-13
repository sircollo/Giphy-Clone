import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GiphyMainComponent } from './giphy-main/giphy-main.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GiphyMainComponent,
    SearchComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
