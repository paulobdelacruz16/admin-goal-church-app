import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../app/components/home/home.component'
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AnimateDirective } from './directive/animation-on-view.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextCarouselComponent } from './components/partials/text-carousel/text-carousel.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoxItemListComponent  } from './components/partials/box-item-list/box-item-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoCarouselComponent } from './components/partials/video-carousel/video-carousel.component';
import { BoxListVideoComponent } from './components/partials/box-list-video/box-list-video.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    DonateComponent,
    SermonsComponent,
    AnimateDirective,
    TextCarouselComponent,
    BoxItemListComponent,
    FooterComponent,
    HeaderComponent,
    VideoCarouselComponent,
    BoxListVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ModalModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
