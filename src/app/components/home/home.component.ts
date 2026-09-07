import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  goalContent: any;

  constructor(
    private configService: ConfigService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.start();
    this.configService
      .getAllSection({ url: 'home' })
      .subscribe((data: any) => {
        this.goalContent = data?.data?.data;
        this.loaderService.stop();
      });
  }
}
