import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView02Component  } from "../../partials/modal-view-02/modal-view02.component"
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
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
  styleUrls: ['./admin-images.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminImagesComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router
  ) {
    this.createForm();
  }

  myInterval = 150000000;

  group1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
  });
  itemListData1:any;
  section1:any;
  pageUrl:any;
  navigation:any;
  ngOnInit(): void {
    console.log('homepage', window.location.host);

    this.configService.getAllSection1().subscribe((data: any) => {
      console.log('success123', data);
      this.section1 = data
    });
    this.navigation = [{
      name: 'Goal Church Data'
    },{
      name: 'User'
    },{
      name: 'Server Images'
    },
  ]
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

  createForm() {
    this.group1 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]],
      url: ['', Validators.required],
    });
  }
  onSubmit(){
    console.log('this.group1', this.group1);
    console.log('submitted');
  }

  selectImage(){
    this.modalRef?.hide();
  }

  deleteImage(){
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const pageUrl = `/images/`;
      const initialState: ModalOptions = {
        initialState: {
          apiImages: data,
          pageUrl
        }
      };
      this.modalRef = this.modalService.show(ModalView02Component, initialState);
    });
  }






}
