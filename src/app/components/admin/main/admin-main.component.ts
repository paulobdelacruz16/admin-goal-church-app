import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView01Component  } from "../../partials/modal-view-01/modal-view01.component"
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminMainComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
  ) {
  }
  section1:any;
  pageUrl:any;
  ngOnInit(): void {
    this.configService.getAllSection1().subscribe((data: any) => {
      console.log('success123', data);
      this.section1 = data
    });

  }
  openModal(item:any) {
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const pageUrl = `/images/`;
      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: item,
          apiImages: data,
          pageUrl
        }
      };
      this.modalRef = this.modalService.show(ModalView01Component, initialState);
    });
  }
}
