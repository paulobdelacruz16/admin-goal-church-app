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
import { AdminEventComponent } from './events/admin-event.component';
import { AdminEventsGroupComponent } from './events-group/admin-events-group.component';
import { AdminDynamicContentComponent } from './admin-dynamic-content/admin-dynamic-content.component';
import { PageCategorytComponent } from './page-category/page-category.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminCreatePageDataComponent } from './create-page-data/admin-create-page-data.component';
@NgModule({
  declarations: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent,
    AdminContentComponent,
    PageCategorytComponent,
    AdminEventComponent,
    AdminEventsGroupComponent,
    AdminDynamicContentComponent,
    AdminCreatePageDataComponent
  ],
  exports: [
    AdminComponent,
    UploadImageComponent,
    AdminMainComponent,
    AdminUserComponent,
    AdminImagesComponent,
    AdminContentComponent,
    PageCategorytComponent,
    AdminEventComponent,
    AdminEventsGroupComponent,
    AdminDynamicContentComponent,
    AdminCreatePageDataComponent
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
