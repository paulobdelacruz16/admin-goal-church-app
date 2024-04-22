import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalView01Component } from '../../partials/modal-view-01/modal-view01.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminEventComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
  ) {}

  section1:any;
  mainCategory:any = ['lifeclass','sol']
  ngOnInit(): void {
    console.log('hey pau');
    // this.configService
    //   .getAllSection({ url: 'section1' })
    //   .subscribe((data: any) => {
    //     this.section1 = data;
    //   });
    // this.mainCategory = 
    // const category = this.route.snapshot.paramMap.get('event')?.toLowerCase();
    // console.log('category', category);

    // this.configService.getDynamicPageContent({ url:category })
    // .subscribe((data: any) => {
    //  console.log('homepage - goalContent',  data.data);
    // });
  }

  // api - get all unique page_name
  // admin events page - map the list inside html
}
