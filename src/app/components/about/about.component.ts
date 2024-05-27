import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  @Input() itemListData:any;
  @Input() numberofItem:any;
  pageUrl:any
  category:any;
  goalContent:any;
  card:any;
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService

  ) {}
  ngOnInit(): void {
    this.pageUrl = "/images/"
    this.configService.getDynamicPageContent({ url:'about' })
    .subscribe((data: any) => {
     this.goalContent = data.data;
      this.card = {card: this.goalContent?.section1.card};
    });
  }
}
