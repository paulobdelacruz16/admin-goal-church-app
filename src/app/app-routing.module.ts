import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./components/main/main.module')
      .then(mod => mod.MainModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./components/admin/admin.module')
      .then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
