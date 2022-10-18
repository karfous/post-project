import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postModel: PostModel; //fill the model after fetching with *ngFor 

  constructor() { }

  ngOnInit(): void {
  }

}
