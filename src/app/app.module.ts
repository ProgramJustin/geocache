import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EditGeocacheComponent } from './edit-geocache/edit-geocache.component';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    EditGeocacheComponent,
    GeocacheDetailComponent,
    GeocacheListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
