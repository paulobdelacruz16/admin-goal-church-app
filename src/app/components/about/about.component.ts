import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  goalContent: any;

  constructor(
    private configService: ConfigService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.start();
    this.configService
      .getAllSection({ url: 'about' })
      .subscribe((data: any) => {
        this.goalContent = data?.data?.data;
        console.log('goalContent', this.goalContent);
        this.loaderService.stop();
      });
  }
}
