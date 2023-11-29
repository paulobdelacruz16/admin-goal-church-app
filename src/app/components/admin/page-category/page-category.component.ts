import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalView03Component } from '../../partials/modal-view-03/modal-view03.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageCategorytComponent implements OnInit {
  modalRef?: BsModalRef;

  mainCategory:string[] = ['Home', 'Sermon', 'Events'];
  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log('page category');
  }

  onClickCategory(item:string) {
    console.log('myMainFormBuilder', item);
  }

}
