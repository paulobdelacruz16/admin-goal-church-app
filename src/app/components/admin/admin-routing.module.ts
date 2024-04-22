import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './main/admin-main.component'
import { AdminUserComponent } from './user/admin-user.component';
import { AdminImagesComponent } from './admin-images/admin-images.component';
import { AdminContentComponent } from './content/admin-content.component';
import { PageCategorytComponent } from './page-category/page-category.component';
import { AdminEventComponent } from './events/admin-event.component';
import { AdminEventsGroupComponent  } from './events-group/admin-events-group.component';



const routes: Routes = [
  { path: '', component: PageCategorytComponent, pathMatch: 'full'},
  { path: 'user', component: AdminUserComponent },
  { path: 'serverimages', component: AdminImagesComponent },
  { path: 'content/:id', component: AdminContentComponent },
  { path: 'category', component: AdminMainComponent },
  { path: 'events', component: AdminEventComponent },
  { path: 'events/:id', component: AdminEventsGroupComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
