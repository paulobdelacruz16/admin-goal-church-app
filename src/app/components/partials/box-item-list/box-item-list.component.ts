import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-box-item-list',
  templateUrl: './box-item-list.component.html',
  styleUrls: [ './box-item-list.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class BoxItemListComponent implements OnInit {
  myInterval = 150000000;
  @Input() itemListData:any;
  @Input() numberofItem:any;
  ngOnInit(): void {
  }
}
