import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'bye',
    template: '<h1>Bye See You Again {{title}} </h1>',
    styles: [
        `h1{
            color: Green;
        }`
    ]
})
export class ByeComponent{
    title= 'Rituraj';
}