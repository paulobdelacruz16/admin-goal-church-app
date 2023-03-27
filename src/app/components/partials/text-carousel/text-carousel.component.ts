import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: [ './text-carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class TextCarouselComponent implements OnInit {

  ItemsList:any;
  ngOnInit(): void {
     this.ItemsList =  [
      {
        name:"Philippians 4:7",
        description:"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      },
      {
        name:"2 Corinthians 5:7",
        description:"For we live by faith, not by sight",
 
      },
      {
        name:"1 Timothy 6:12",
        description:"Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses.",

      },
    ];
  }
}
