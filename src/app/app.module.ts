import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';



import { AppComponent } from './app.component';

import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from '../comments.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
