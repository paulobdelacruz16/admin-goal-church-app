import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminContentComponent implements OnInit {
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}
  section3: any;
  category:any;
  action:any;
  cta:any;

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')?.toLowerCase();
    this.cta = `${this.category}`;
    this.action = 'post';
    this.configService.getAllSection({ url: this.category }).subscribe((data: any) => {
      this.section3 = data;
      console.log('this.section', this.section3);
    });
  }
}
