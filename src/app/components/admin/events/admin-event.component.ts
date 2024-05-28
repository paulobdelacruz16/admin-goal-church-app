import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminEventComponent implements OnInit {
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
