import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-lucky',
  template: `
  <div class="{{style}}">Welcome to the Future</div>
  <button (click)="generate()">click Here to know your lucky number</button>
  <h2 *ngIf="numberLucky">your lucky number is {{ numberLucky }}</h2>
  `,
  styles: [
    `h2{
      color: green;
    }`,
    `.info{
      font-size: 30px; font-weight: bold; color:red;
    }`,
    `.info2{
      font-size:30px; font-weight:bold; text-shadow: 5px 5px 5px yellow;
    }`
  ]
})
export class NumberLuckyComponent{
  numberLucky: number;
  style: string="info";
  generate(){
    this.numberLucky= Math.ceil(Math.random()*10);
    this.style=" info info2"
  }

}

