import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalView01Component } from '../../partials/modal-view-01/modal-view01.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
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
    private formBuilder: FormBuilder
  ) {}
  section1: any;
  section2: any;
  section3: any;
  section4: any;
  myFormBuilder: any;
  myFormBuilder2: any;

  requestForm: any;
  newData: any;
  pageUrl: any;
  dataModel: any;
  selectedformBuilder: any;
  ngOnInit(): void {
    this.configService
      .getAllSection({ url: 'section1' })
      .subscribe((data: any) => {
        this.section1 = data;
      });
    this.configService
      .getAllSection({ url: 'section2' })
      .subscribe((data: any) => {
        this.section2 = data;
      });

    this.myFormBuilder = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });

    this.myFormBuilder2 = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }
  
  openModal(item: any, data: any) {
    this.configService.getAllImages().subscribe((data: any) => {
      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: item,
          apiImages: data,
          myFormBuilder: this.selectedformBuilder,
          pageUrl: this.pageUrl,
          dataModel: this.dataModel,
          requestForm: this.requestForm,
        },
      };
      this.buildModal(data, initialState);
    });
  }

  addNewData(data: any) {
    this.configService.getAllImages().subscribe((dataImages: any) => {
      const initialState: ModalOptions = {
        initialState: {
          selectedMainData: null,
          apiImages: dataImages,
          myFormBuilder: this.selectedformBuilder,
          pageUrl: this.pageUrl,
          dataModel: this.dataModel,
          requestForm: this.requestForm,
          newData: this.newData,
        },
      };
      this.buildModal(data, initialState);
    });
  }

  buildModal(data: any, initialState:any) {
    if (data === 'section1') {
      this.selectedformBuilder = this.myFormBuilder;
      this.dataModel = [
        { label: 'Title', type: 'text', name: 'name' },
        { label: 'Description', type: 'text', name: 'description' },
        { label: 'Image', type: 'image', name: 'image' },
        { label: 'Url', type: 'text', name: 'url' },
      ];
    } else if (data === 'section2') {
      this.selectedformBuilder = this.myFormBuilder2;
      this.dataModel = [
        { label: 'Description', type: 'text', name: 'description' },
        { label: 'Image', type: 'image', name: 'image' },
        { label: 'Url', type: 'text', name: 'url' },
      ];
    }

    this.requestForm = {
      urlUpdate: `api/${data}`,
      urlDelete: `api/${data}`,
    };
    this.newData = true;
    this.pageUrl = `/images/`;

    this.modalRef = this.modalService.show(
      ModalView01Component,
      initialState
    );

  }
}
