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
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalView01Component } from './components/partials/modal-view-01/modal-view01.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    SermonsComponent,
    AnimateDirective,
    TextCarouselComponent,
    BoxItemListComponent,
    FooterComponent,
    HeaderComponent,
    VideoCarouselComponent,
    BoxListVideoComponent,
    ModalView01Component,
    SafeHtmlPipe
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
