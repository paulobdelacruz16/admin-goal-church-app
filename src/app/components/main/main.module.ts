import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../../../app/components/home/home.component'
import { NewsComponent } from '../../components/news/news.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { DonateComponent } from '../../components/donate/donate.component';
import { SermonsComponent } from '../../components/sermons/sermons.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AnimateDirective } from '../../directive/animation-on-view.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextCarouselComponent } from '../../components/partials/text-carousel/text-carousel.component';
import { BoxItemListComponent  } from '../../components/partials/box-item-list/box-item-list.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { VideoCarouselComponent } from '../../components/partials/video-carousel/video-carousel.component';
import { BoxListVideoComponent } from '../../components/partials/box-list-video/box-list-video.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalView01Component } from '../../components/partials/modal-view-01/modal-view01.component';
import { AboutComponent } from '../../components/about/about.component';
import { SafeHtmlPipe } from '../../pipe/safe-html.pipe';
import { ModalView02Component } from '../../components/partials/modal-view-02/modal-view02.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
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
    ModalView02Component,
    SafeHtmlPipe,
  ],
  exports: [
    MainComponent,
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
    ModalView02Component,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    MainRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: []
})
export class MainModule { }
