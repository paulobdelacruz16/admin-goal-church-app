import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  title = 'goal-church-app';
  constructor(private modalService: BsModalService, private router: Router) {}
  navlist: any;
  selectedNavId: any;
  modalRef?: BsModalRef;
  public href: string = '';

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router);
    this.navlist = [
      { name: 'Home', src: '/home', url: 'home'},
      { name: 'Sermons', src: '/sermons', url: 'home'},
      { name: 'News', src: '/news', url: 'home'},
      { name: 'Events', src: '/events', url: 'home'},
      { name: 'About', src: '/about', url: 'home'},
      { name: 'Contact', src: '/contact', url: 'home'},
      { name: 'Donate', src: '/donate', url: 'home'},
    ];
  
    const aa = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.selectedNavId = this.navlist.findIndex((e:any) => e.src === event.url);
      }
    });
  }

  clickNavigation(value: number) {
    this.selectedNavId = value;
  }

  openModal(template: TemplateRef<any>) {
    console.log('test');
    this.modalRef = this.modalService.show(template);
  }
}
