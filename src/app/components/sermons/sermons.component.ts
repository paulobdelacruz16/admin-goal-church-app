import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: [ './sermons.component.scss' ]
})
export class SermonsComponent implements OnInit {
  constructor(  private configService: ConfigService) {}

  goalContent:any;
  ngOnInit(): void {
    this.configService
    .getAllSection({ url: 'sermon' })
    .subscribe((data: any) => {
     this.goalContent = data.data;
     console.log('homepage - goalContent',   this.goalContent );
    });
  }
}
