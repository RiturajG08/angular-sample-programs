import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    Enter first number: <input type="number" #no1/><br />
    Enter Second Number: <input type="number" #no2/><br />
    <button (click)="calculate('*', no1.value, no2.value)">Add</button>
    <button (click)="calculate('-', no1.value, no2.value)">Sub</button> <br />
    {{result}}

  `,
  styles: [
  ]
})
export class CalcComponent{
  result: number;
  calculate(op:String, no1: number, no2:number){
    if(op=='*'){
      this.result= Number(no1)* Number(no2);
    }
    else{
      this.result=Number(no1)-Number(no2);
    }
  }

}
