import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';
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
    private configService: ConfigService,
    private loaderService: LoaderService

  ) {}
  ngOnInit(): void {
    this.pageUrl = "/images/"
    this.loaderService.start();
    this.configService.getDynamicPageContent({ url:'about' })
    .subscribe((data: any) => {
     this.goalContent = data.data;
      this.card = {card: this.goalContent?.section1.card};
      this.loaderService.stop();
    });
  }
}
