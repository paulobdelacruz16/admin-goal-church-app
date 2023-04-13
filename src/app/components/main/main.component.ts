import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Meta } from '@angular/platform-browser';  
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'goal-church-app';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object, private meta: Meta, private router: Router) {
  }

  navlist: any
  selectedNavId: any
  modalRef?: BsModalRef;
  browser:any;
  ngOnInit(): void {
    console.log('router', this.router.url);
    this.meta.addTags([
      { property: 'og:title', content: 'Goal Church' },
      { property: 'og:description', content: 'Welcome to Goal Church Website!' },
      { property: 'og:image', content: 'https://www.goalchurch.com/assets/images//goalchurch_logo.png'},
      { property: 'og:url', content: 'https://www.goalchurch.com'},
    ]); 

    if (isPlatformBrowser(this.platformId)) {
      this.browser = true;
    const navMain = document.getElementById('navbarCollapse');
    console.log('test123', window.location.href);

    console.log('2222',navMain);

     this.navlist = [
      { name: 'Home', src: "home" },
      { name: 'Sermons',  src: "sermons" },
      { name: 'News', src: "news" },
      { name: 'Events', src: "events" },
      { name: 'About', src: "about" },
      { name: 'Contact', src: "contact" },
      { name: 'Donate', src: "donate" }
    ];
    this.selectedNavId = 0;
    console.log('win',);
    if(window.location.pathname){
      
    }
  }


}

  clickNavigation(value: number){
    this.selectedNavId = value;
  }
}
