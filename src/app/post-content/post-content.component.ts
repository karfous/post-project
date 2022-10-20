import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { PostContentModel } from './post-content.model';
import * as fetchedData from '../app.prepareModels';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css'],
})
export class PostContentComponent implements OnInit {
  // @Input() postContentModel: PostContentModel;
  post: {
    title: string;
    user: string;
    id: number;
    body: string;
    bodyShort: string;
    comments: string[];
  };
  constructor(
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.post = fetchedData.prepareModels.find((post)=>{return post.id === id})
  }
}
