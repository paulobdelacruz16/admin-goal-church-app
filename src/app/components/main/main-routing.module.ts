import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { DonateComponent } from '../../components/donate/donate.component';
import { EventsComponent } from '../../components/events/events.component';
import { HomeComponent } from '../../components/home/home.component';
import { NewsComponent } from '../../components/news/news.component';
import { SermonsComponent } from '../../components/sermons/sermons.component';
import { PageContainerComponent } from '../partials/page-container/page-container.component';


const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:event', component: PageContainerComponent },
  { path: 'sermons', component: SermonsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
