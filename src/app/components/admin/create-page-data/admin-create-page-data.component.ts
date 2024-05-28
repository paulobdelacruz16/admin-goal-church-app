import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-admin-create-page-data',
  templateUrl: './admin-create-page-data.component.html',
  styleUrls: ['./admin-create-page-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCreatePageDataComponent implements OnInit {
  constructor(
    private configService: ConfigService,
  ) {}

  mainCategory:any;
  ngOnInit(): void {
    this.configService
      .getAllSection({ url: 'getAllUniquePageName' })
      .subscribe((data: any) => {
        this.mainCategory = data.data;
      });
  }

}
