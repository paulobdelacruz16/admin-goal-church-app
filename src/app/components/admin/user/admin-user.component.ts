import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView01Component  } from "../../partials/modal-view-01/modal-view01.component"
import {Router} from "@angular/router"

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminUserComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
    private formBuilder: FormBuilder,

  ) {
  }

  allcredential:any;
  pageUrl:any;
  myFormBuilder:any;
  ngOnInit(): void {
    this.configService.getAlloginCredential().subscribe((data: any) => {
      console.log('success123', data);
      this.allcredential = data
    });

  this.myFormBuilder = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  
  openModal(item:any) {
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const dataModel = [
        { label: 'username', type: 'text', name: 'username' },
        { label: 'password', type: 'text', name: 'password' },
      ];
      const requestForm = {
        'urlUpdate': 'api/putSection1',
        'urlDelete': 'api/putSection1',
      }
      const actions = true;
      const pageUrl = `/images/`;
      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: item,
          apiImages: data,
          myFormBuilder: this.myFormBuilder,
          pageUrl,
          dataModel,
          requestForm,
          actions
        }
      };
      this.modalRef = this.modalService.show(ModalView01Component, initialState);
    });


  }

}
