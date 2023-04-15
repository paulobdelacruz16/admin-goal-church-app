import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { UploadImageComponent } from '../../components/partials/upload-image/upload-image.component';
import { AdminMainComponent } from './main/admin-main.component';
import { AdminUserComponent } from './user/admin-user.component';
import { AdminImagesComponent } from './admin-images/admin-images.component';


@NgModule({
  declarations: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent
  ],
  exports: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: []
})
export class AdminModule { }
