import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-flexbox-side',
  templateUrl: './flexbox-side.component.html',
  styleUrls: [ './flexbox-side.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class FlexboxSideComponent implements OnInit {
  myInterval = 150000000;
  @Input() itemListData:any;
  @Input() numberofItem:any;
  pageUrl:any
  ngOnInit(): void {
    this.pageUrl = "/images/"
  }
}
