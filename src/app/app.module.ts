import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostContentComponent } from './post-content/post-content.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'post', component: HomepageComponent},
  {path: 'post/:id', component: PostContentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostContentComponent,
    LoadingBarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
