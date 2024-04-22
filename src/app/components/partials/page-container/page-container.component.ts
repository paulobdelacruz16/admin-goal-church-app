import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: [ './page-container.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class PageContainerComponent implements OnInit {
  @Input() itemListData:any;
  @Input() numberofItem:any;
  pageUrl:any
  category:any;
  goalContent:any;
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService

  ) {}
  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('event')?.toLowerCase();
    this.pageUrl = "/images/"
    console.log('category', category);
    this.configService.getDynamicPageContent({ url:category })
    .subscribe((data: any) => {
     this.goalContent = data.data;
     console.log('homepagegg - goalContent',  this.goalContent);
    });
  }
}
