import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  template: `
    <form (ngSubmit)="doSomething()">
    Enter your name: <input type= "text" name="name" [(ngModel)]= name /> <br />
    Enter your DOB: <input type= "date" name="dob" [(ngModel)]= dob /><br />
    Enter your email: <input type= "email" name="email" [(ngModel)]= email /><br />
    <button type="submit">submit</button>
    </form>
    <div>
    name of the user is: {{name}} DOB of the user is: {{dob}} email of the user is: {{email}}
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent{

  name: String; //whatever user enters in above text field store here
  dob: Date;
  email: String;
  check: boolean
  doSomething(){
    //alert(this.name+" was born on "+this.dob+" and his mail id is "+this.email);
    //this.check= true;
    this.name= this.name.toUpperCase();
  }
}
