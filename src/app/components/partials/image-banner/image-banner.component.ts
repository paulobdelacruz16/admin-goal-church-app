import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  templateUrl: './image-banner.component.html',
  styleUrls: [ './image-banner.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class ImageBannerComponent implements OnInit {
  myInterval = 150000000;
  @Input() goalContent:any;
  pageUrl:any
  ngOnInit(): void {
    console.log('bannerImage', this.goalContent);
    this.pageUrl = "/images/";
  }
}
