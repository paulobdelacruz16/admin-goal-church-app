import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Meta } from '@angular/platform-browser';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'goal-church-app';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta
  ) {}

  navlist: any;
  selectedNavId: any;
  modalRef?: BsModalRef;
  browser: any;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.browser = true;
    }
  }
}
