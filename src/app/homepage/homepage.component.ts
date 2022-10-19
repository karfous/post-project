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
    new PostModel({
      id: '101',
      title: 'Ono to žije!',
      user: 'Jakub Kareš',
      body: 'Dalo to práci a musel jsem to trochu ohýbat, ale nakonec to funguje. Uf :)',
      bodyShort: 'Dalo to práci a musel jsem to trochu ohýbat, ale nakonec to funguje. Uf :)',
      comments: ['Omlouvám se všem skutečným programátorům za toto dílo.'],
    }),
    
  ];

  prepareData() {
    Promise.allSettled([prepareModels.posts, prepareModels.users, prepareModels.comments]).then(()=>{
      // once fetching is done - create angular models
      // TODO I suppose all models are created  
      prepareModels.prepareModels.forEach((model) => this.fetchedPostModels.push(new PostModel(model)) );
      this.fetched = true; // hide loading bar
    })
  }

  constructor() {this.prepareData(); }  //fetch data and create models 

  ngOnInit(): void {
  }

}
