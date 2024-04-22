import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute) {}
  goalContent:any;
  category:any;
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('event')?.toLowerCase();
    console.log('Events page', this.category);
    this.configService
    .getAllSection({ url: 'events' })
    .subscribe((data: any) => {
     this.goalContent = data.data;
     console.log('homepage4444 - goalContent',   this.goalContent );
    });
  }
}
