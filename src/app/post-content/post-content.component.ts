import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostContentModel } from './post-content.model';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  // @Input() postContentModel: PostContentModel; 
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
