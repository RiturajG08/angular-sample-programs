import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ByeComponent } from './bye.component';
import { HelloComponent } from './hello.component';
import { LuckyNumberComponent } from './lucky-number.component';
import { SimpleComponent } from './simple/simple.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Registerv2Component } from './registerv2/registerv2.component';
import { CalcComponent } from './calc/calc.component';
import { NumberLuckyComponent } from './number-lucky/number-lucky.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { Like100Component } from './like100/like100.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    LuckyNumberComponent,
    SimpleComponent,
    SimpleFormComponent,
    SimpleCalculatorComponent,
    LoginComponent,
    RegisterComponent,
    Registerv2Component,
    CalcComponent,
    NumberLuckyComponent,
    LikeDislikeComponent,
    Like100Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
