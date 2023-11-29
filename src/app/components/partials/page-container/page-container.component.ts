import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: [ './page-container.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class PageContainerComponent implements OnInit {
  myInterval = 150000000;
  @Input() itemListData:any;
  @Input() numberofItem:any;
  pageUrl:any
  ngOnInit(): void {
    this.pageUrl = "/images/"
  }
}
