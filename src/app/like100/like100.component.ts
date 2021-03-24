import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like100',
  template: `
  <button (click)="like()" [ngClass]="{'like-button':true, 'liked':counter1}">Like |<span>{{likes}}
  </span></button>
  <button (click)="dislike()" [ngClass]="{'dislike-button':true, 'disliked':counter2}">DisLike |<span>{{dislikes}}
  </span></button>
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
export class Like100Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  likes: number=100;
  dislikes: number=25;
  counter1: boolean=false;
  counter2: boolean=false;
  like(){
    if(this.counter1== false){
      this.likes++;
      this.counter1=true;
      if(this.counter2== true){
        this.dislikes--;
        this.counter2= false;
      }
    }
    else{
      this.likes--;
      this.counter1=false;
    }
  }
  dislike(){
    if(this.counter2== false){
      this.dislikes++;
      this.counter2=true;
      if(this.counter1== true){
        this.likes--;
        this.counter1= false;
      }
    }
    else{
      this.dislikes--;
      this.counter2= false;
    }
  }
  /*dislike(){
    if(this.counter2== false){
      this.dislikes++;
      this.counter2=true;
      if(this.counter1== true){
        this.likes--;
        this.counter1= false;
      }
    }
    else{
      this.dislikes--;
      this.counter2=false;
    }
  }*/
}
