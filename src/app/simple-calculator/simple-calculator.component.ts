import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  template: `
    enter the first number: <input type= "number" name="num1" [(ngModel)]= num1 /><br />
    enter the second number: <input type= "number" name="num2" [(ngModel)]= num2 /><br />
    <button (click)="add()">Add</button>
    <button (click)="sub()">Sub</button>
    <button (click)="mul()">mul</button>
    <button (click)="div()">div</button>
    <div *ngIf='check==1'>
      Addition of two number is {{num3}}
    </div>
    <div *ngIf='check==2'>
      Substraction of two number is {{num3}}
    </div>
    <div *ngIf="check==3">
      Multiplication of two number is {{num3}}
    </div>
    <div *ngIf="check==4">
      Division of two number is {{num3}}
    </div>
  `,
  styles: [
  ]
})
export class SimpleCalculatorComponent {

  num1: number;
  num2: number;
  num3: number;
  check: number=0;
  add(){
    this.num3=this.num1+this.num2;
    this.check= 1;
  }
  sub(){
    this.num3=this.num1-this.num2;
    this.check=2;
  }
  mul(){
    this.num3=this.num1*this.num2;
    this.check=3;
  }
  div(){
    this.num3=this.num1/this.num2;
    this.check=4;
  }
}
