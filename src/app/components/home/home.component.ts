import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  goalContent:any;

  constructor(
    private configService: ConfigService
    ) {}

  ngOnInit(): void {
    this.configService
    .getAllSection({ url: 'home' })
    .subscribe((data: any) => {
     this.goalContent = data.data;
     console.log('homepage - goalContent',  this.goalContent );
    });
  }
}
