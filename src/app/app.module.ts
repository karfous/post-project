import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostContentComponent } from './post-content/post-content.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostContentComponent,
    LoadingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
