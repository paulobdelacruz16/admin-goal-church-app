import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: [ './text-carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class TextCarouselComponent implements OnInit {

  ItemsList:any;
  @Input() itemListData:any;
  ngOnInit(): void {
  }
}
