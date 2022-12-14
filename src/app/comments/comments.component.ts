import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment: CommentModel;
  constructor() { }

  ngOnInit(): void {
  }

}
