import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: [ './sermons.component.scss' ]
})
export class SermonsComponent implements OnInit {
  constructor(  private configService: ConfigService, private loaderService: LoaderService) {}

  goalContent:any;
  ngOnInit(): void {
    this.loaderService.start();
    this.configService.getAllSection({ url: 'sermon' }).subscribe((data: any) => {
     this.goalContent = data.data;
      this.loaderService.stop();
    });
  }
}
