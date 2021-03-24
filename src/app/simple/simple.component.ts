import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <label>Enter first number</label>
    <input type="number" name="no1" [(ngModel)]="no1" /><br />
    <label>Enter Second Number</label>
    <input type="number" name="no2" [(ngModel)]="no2" /><br />
    <button (click)="add()">Add</button>
    <button (click)="sub()">Sub</button>
    <div *ngIf="check==1">Addition of {{no1}} and {{no2}} is {{no3}}</div>
    <div *ngIf="check==2">Substraction of {{no1}} and {{no2}} is {{no3}}</div>
  `,
  styles: [
  ]
})
export class SimpleComponent{
  no1: number;
  no2: number;
  no3: number;
  check: number=0;
  add(){
    this.no3=this.no1+this.no2;
    this.check=1;
  }
  sub(){
    this.no3=this.no1-this.no2;
    this.check=2;
  }
}
