import { Component } from "@angular/core";

@Component({
    selector: 'lucky-number',
    template: `
        <div class="{{ style }}">Welcome to Bhavisyavani.com</div>
        <button (click)='generate()'>click here</button>to know your lucky number<br>
        <h1 *ngIf='luckyNumber'>Your lucky number is {{ luckyNumber }}</h1>
    `,
    styles:[
        `h1 {color: red }`,
        `.info{ font-weight: bold; font-size: 30px; color:green ;}`,
        `.info2 { text-shadow: 5px 5px 5px red;}`
    ]
})
export class LuckyNumberComponent{
    luckyNumber: number;
    style: String="info"
    generate(){
        this.luckyNumber= Math.ceil(Math.random()*10);
        this.style= "info info2"
    }
}