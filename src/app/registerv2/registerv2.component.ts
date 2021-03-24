import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registerv2',
  template: `
    <form #regForm="ngForm" (ngSubmit)="register(regForm)">
      <div>Enter Name: 
      <input 
        type="text" 
        name="name" 
        required minlength="3"
        #name="ngModel" 
        [(ngModel)]=user.name />
      </div>
      <div>Enter Email: 
        <input type="email" 
        name="email" 
        required pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        #email="ngModel" 
        [(ngModel)]=user.email />
        <div *ngIf="regForm.submitted && email.invalid">
          <div *ngIf="email.errors.required">Email is required</div>
          <div *ngIf="email.errors.pattern">pattern should be of type john@example.com</div>
        </div>
      </div>
      <div>Enter Password:
       <input type="password" 
       name="password" 
       required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{​​​​​8,}​​​​​)"
       #password="ngModel" 
       [(ngModel)]=user.password />
       <div *ngIf="regForm.submitted && password.invalid">
          <div *ngIf="password.errors.required">Password is required</div>
          <div *ngIf="password.errors.pattern">pattern should be of type Rituraj@123</div>
        </div>
      </div>
      <div>Enter City:
       <input type="text" 
       name="city" 
       #city="ngModel" 
       [(ngModel)]=user.address.city />
      </div>
      <div>Enter Pincode:
       <input type="number" 
       name="pincode" 
       #pincode="ngModel" 
       [(ngModel)]=user.address.pincode />
      </div>
      <button type="submit">Register</button>
    </form>
  `,
  styles: [
  ]
})
export class Registerv2Component{
  user: User= new User();

  register(f: NgForm){
    if(f.valid)
      console.log(this.user)
    else
      alert("Please fix errors and then submit")
  }
}

export class User{
  name: String;
  email: String;
  password: String;
  address: Address= new Address();
}

export class Address{
  city: string;
  pincode: number;
}
