import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'goal-church-app';
  constructor(private meta: Meta) {}
  navlist: any
  selectedNavId: any
  modalRef?: BsModalRef;
  ngOnInit(): void {
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

    this.meta.addTags([
      { property: 'og:title', content: 'Goal Church' },
      { property: 'og:description', content: 'Welcome to Goal Church Website!' },
      { property: 'og:image', content: 'https://www.goalchurch.com/assets/images//goalchurch_logo.png'},
      { property: 'og:url', content: 'https://www.goalchurch.com'},
    ]); 
  }

  clickNavigation(value: number){
    this.selectedNavId = value;
  }
}
