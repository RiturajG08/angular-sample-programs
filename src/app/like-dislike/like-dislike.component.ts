import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-dislike',
  template: `
  <div>
    Like/Dislike component
  </div>
  <button class="like-button" (click)='likeClicked()' [ngClass]="likebtnclicked ? 'liked' : ''"> 
    Like | <span class ="likes-counter">{{likes}}</span> </button>

  <button class="dislike-button" (click)='dislikeClicked()'[ngClass]="dislikebtnclicked ? 'disliked' : ''"> 
    Dislike | <span class ="dislikes-counter">{{dislikes}}</span> </button>
  `,
  styles: [`
  .like-button, .dislike-button {
      font-size: 1rem;
      padding: 5px 10px;
      color:   #585858;
  }

  .liked, .disliked {
      font-weight: bold;
      color: #1565c0;
  }
  `]
})
export class LikeDislikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  likes:number = 100;
  dislikes:number = 25;
  likebtnclicked:boolean = false;
  dislikebtnclicked:boolean = false;
 
  likeClicked() {
    if(this.likebtnclicked) {
     this.likes--;
     this.likebtnclicked = false;
    }else{
      this.likebtnclicked = true;
      this.likes++;
      if(this.dislikebtnclicked) {
        this.dislikes--;
        this.dislikebtnclicked = false;
      }
    }
 
  }
 
   dislikeClicked() {
 
    if(this.dislikebtnclicked) {
     this.dislikes--;
     this.dislikebtnclicked = false;
    }else{
      this.dislikebtnclicked = true;
      this.dislikes++;
      if(this.likebtnclicked) {
        this.likes--;
        this.likebtnclicked = false;
      }
    }
     
   }
}
