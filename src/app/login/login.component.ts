import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      Enter the Username: <input type= "text" name="t1" [(ngModel)]= username /><br>
      Enter the Password: <input type= "password" name= "t2" [(ngModel)]= password /><br>
      <button type= "submit">Login</button>
    </form>
    <div *ngIf='check==1'>
      <h3>Welcome back {{username}}</h3>
    </div>
    <div *ngIf='check==2'>
      <h3>Invalid User</h3>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent{

  username: String;
  password: String;
  check: number= 0;
  login(){
    if(this.username =="Rituraj" && this.password== 'Ritu123'){
      this.check= 1;
    }
    else{
      this.check= 2
    }
  }
}
