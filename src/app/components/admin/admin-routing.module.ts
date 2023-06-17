import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './main/admin-main.component'
import { AdminUserComponent } from './user/admin-user.component';
import { AdminImagesComponent } from './admin-images/admin-images.component';
import { AdminContentComponent } from './content/admin-content.component';


const routes: Routes = [
  { path: '', component: AdminMainComponent },
  { path: 'user', component: AdminUserComponent },
  { path: 'serverimages', component: AdminImagesComponent },
  { path: 'content', component: AdminContentComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
