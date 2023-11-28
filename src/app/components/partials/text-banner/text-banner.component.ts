import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: [ './text-banner.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class TextBannerComponent implements OnInit {
  constructor(private _sanitizer: DomSanitizer) {}
  safeURL: any;
  selectedVideoURL:any;
  pageUrl:any;

  @Input() itemListData:any;
  ngOnInit(): void {
    this.pageUrl = "/images/"
  }
  
}
