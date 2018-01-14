import { Component, OnInit } from '@angular/core';
import { Comments } from '../../models/comments';
import { CommentsService } from '../../comments.service';
import '../images/a.jpg'



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[]
  imagepath='../images/a.jpg'

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.getcomments()
  }
  getcomments() {
    this.commentService.getcomments()
      .subscribe(comments => {
        this.comments = comments;
      });
  }
  addComment(value) {
    this.commentService.addcomment(value).subscribe(() => {
      this.getcomments();
    })
  }
}
