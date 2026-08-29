import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private loaderService: LoaderService
  ) {}
  goalContent:any;
  category:any;
  ngOnInit(): void {
    this.loaderService.start();
    this.category = this.route.snapshot.paramMap.get('event')?.toLowerCase();
    console.log('Events page', this.category);
    this.configService
    .getAllSection({ url: 'events' })
    .subscribe((data: any) => {
      this.goalContent = data.data;
      this.loaderService.stop();
    });
  }
}
