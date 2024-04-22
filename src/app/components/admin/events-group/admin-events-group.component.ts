import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalView01Component } from '../../partials/modal-view-01/modal-view01.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-events-group',
  templateUrl: './admin-events-group.component.html',
  styleUrls: ['./admin-events-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminEventsGroupComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
  ) {}

  section1:any;
  mainCategory:any = ['lifeclass','sol'];
  category:any;
  groupData:any;
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')?.toLowerCase();

    // this.configService
    //   .getAllSection({ url: 'section1' })
    //   .subscribe((data: any) => {
    //     this.section1 = data;
    //   });
    // this.mainCategory = 
    // const category = this.route.snapshot.paramMap.get('event')?.toLowerCase();
    // console.log('category', category);

    this.configService.getDynamicPageContent({ url:this.category })
    .subscribe((data: any) => {
     console.log('homepage - goalContent',  data.data);
     this.groupData = data;
    });
  }
}
