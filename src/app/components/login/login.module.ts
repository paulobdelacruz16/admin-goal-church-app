import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: []
})
export class LoginModule { }
