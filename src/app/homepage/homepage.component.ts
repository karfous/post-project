import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post/post.model';
import * as prepareModels from '../app.prepareModels';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  fetched = false;
  fetchedPostModels: PostModel[] = [ // just for fun :)
    
    
  ];

  prepareData() {
    Promise.allSettled([prepareModels.posts, prepareModels.users, prepareModels.comments]).then(()=>{
      // once fetching is done - create angular models
      // TODO I suppose all models are created  
      prepareModels.prepareModels.forEach((model) => this.fetchedPostModels.push(new PostModel(model)) );
      this.fetched = true; // hide loading bar
    })
  }

  getModel(id: number){
    return this.fetchedPostModels.find((post)=>{return post.id === id})
  }

  constructor() {this.prepareData(); }  //fetch data and create models 

  ngOnInit(): void {
  }

}
