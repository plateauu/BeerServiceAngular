import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import { BeerListComponent } from './beer-list/beer-list.component';
import {BeerService} from './beer/beer.service';
import {GiphyService} from './shared/giphy/giphy.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BeerService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
