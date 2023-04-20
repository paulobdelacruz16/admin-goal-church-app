import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView02Component } from '../partials/modal-view-02/modal-view02.component';
import { ModalView01Component } from '../partials/modal-view-01/modal-view01.component';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { ModalView01CopyComponent } from '../partials/modal-view-01-copy/modal-view01-copy.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router
  ) {
    this.createForm();
    let isAuthenticated = sessionStorage.getItem('login');
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  myInterval = 150000000;

  group1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
  });
  navigation: any;
  itemListData1: any;
  section1: any;
  pageUrl: any;
  selectedNavId: any;
  ngOnInit(): void {
    this.navigation = [
      {
        name: 'Goal Church Data',
        url: '/admin',
        id: 1,
      },
      {
        name: 'User',
        url: '/admin/user',
        id: 2,
      },
      {
        name: 'Server Images',
        url: '/admin/serverimages',
        id: 3,
      },
    ];
    this.selectedNavId = this.navigation?.[0].id;
    console.log(' this.selectedNavId', this.selectedNavId);
  }

  openModal(item: any) {
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const pageUrl = `/images/`;
      const dataModel = [
        { label: 'Title', type: 'text', name: 'name' },
        { label: 'Description', type: 'text', name: 'description' },
        { label: 'Image', type: 'image', name: 'image' },
        { label: 'Url', type: 'text', name: 'url' },
      ];
      const requestForm = {
        'urlUpdate': 'api/putSection1',
        'urlDelete': 'api/putSection1',
      }

      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: item,
          apiImages: data,
          pageUrl,
          dataModel,
          requestForm
        },
      };
      this.modalRef = this.modalService.show(
        ModalView01CopyComponent,
        initialState
      );
    });
  }

  createForm() {
    this.group1 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]],
      url: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('this.group1', this.group1);
    console.log('submitted');
  }

  selectImage() {
    this.modalRef?.hide();
  }

  deleteImage() {
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const pageUrl = `/images/`;
      const initialState: ModalOptions = {
        initialState: {
          apiImages: data,
          pageUrl,
        },
      };
      this.modalRef = this.modalService.show(
        ModalView02Component,
        initialState
      );
    });
  }

  selectNavBar(id: any) {
    this.selectedNavId = id;
  }
}
