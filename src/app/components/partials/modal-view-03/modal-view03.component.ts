import { TypeofExpr } from '@angular/compiler';
import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Injector,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-modal-view03',
  templateUrl: './modal-view03.component.html',
  styleUrls: ['./modal-view03.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalView03Component implements OnInit {
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef,
    private configService: ConfigService,
    private injector: Injector
  ) {
    
  }

  myInterval = 150000000;
  imageLabel = 'Empty';


  group1: any;
  @Output() messageEvent = new EventEmitter<string>();

  itemListData1: any;
  selectedMainData: any;
  apiImages: any;
  hostname: any;
  pageUrl: any;
  myFormBuilder: any;
  dataModel:any
  requestForm:any;
  newData:any;
  actions:any;
  ngOnInit(): void {
    this.modalRef?.setClass('modal-lg');
  }


  onSubmit() {
    console.log('this.group1', this.group1);
    console.log('submitted');
  }

  selectImage(item: any) {
    this.messageEvent.emit(item);
    this.modalRef?.hide();
  }

}
