import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView01Component  } from "../../partials/modal-view-01/modal-view01.component"
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import { ModalView01CopyComponent } from '../../partials/modal-view-01-copy/modal-view01-copy.component';
import { FormBuilder, Validators } from '@angular/forms';


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
    private formBuilder: FormBuilder,

  ) {
  }
  section1:any;
  pageUrl:any;
  myFormBuilder:any;
  ngOnInit(): void {
    this.configService.getAllSection1().subscribe((data: any) => {
      this.section1 = data
    });

    this.myFormBuilder = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }
  openModal(item:any) {
    this.configService.getAllImages().subscribe((data: any) => {
      const pageUrl = `/images/`;
      const dataModel = [
        { label: 'Title', type: 'text', name: 'name' },
        { label: 'Description', type: 'text', name: 'description' },
        { label: 'Image', type: 'image', name: 'image' },
        { label: 'Url', type: 'text', name: 'url' },
      ];
      const requestForm = {
        'urlUpdate': 'api/section1',
        'urlDelete': 'api/section1',
      }
      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: item,
          apiImages: data,
          myFormBuilder: this.myFormBuilder,
          pageUrl,
          dataModel,
          requestForm
        }
      };
      this.modalRef = this.modalService.show(ModalView01CopyComponent, initialState);
    });
  }
}
