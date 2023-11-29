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
import { AdminContentComponent } from './content/admin-content.component';
import { PageCategorytComponent } from './page-category/page-category.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent,
    AdminContentComponent,
    PageCategorytComponent
  ],
  exports: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent,
    AdminContentComponent,
    PageCategorytComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: []
})
export class AdminModule { }
