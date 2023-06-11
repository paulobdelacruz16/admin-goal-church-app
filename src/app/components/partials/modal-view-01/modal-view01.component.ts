import { TypeofExpr } from '@angular/compiler';
import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Injector,
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
  selector: 'app-modal-view01',
  templateUrl: './modal-view01.component.html',
  styleUrls: ['./modal-view01.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalView01Component implements OnInit {
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
    this.createForm();
  }
  createForm() {
    console.log('myFormBuilder',this.myFormBuilder);
    console.log('selectedDataMain', this.selectedMainData);
    this.group1 = this.myFormBuilder;
    this.group1.reset();

    if (this.selectedMainData) {
      for (var key in this.selectedMainData) {
        if (this.selectedMainData.hasOwnProperty(key)) {
          if(key === '_id' || key === '__v'){
          }else{
            this.group1.controls[key].setValue(this.selectedMainData[key]);
          }
        }
      }
    }
  }

  onSubmit() {
    console.log('this.group1', this.group1);
    console.log('submitted');
  }

  closeImage() {}

  savechanges() {
    if (this.group1.status === 'VALID') {
      console.log('submitted');
      this.configService.dynamicUpdateApi({ 
        body: this.group1.value,
        url: this.requestForm.urlUpdate,
        id: this.selectedMainData._id
      })
      .subscribe((data: any) => {
        console.log('success', data);
        this.modalRef?.hide();
      });
    }
  }

  deletechanges() {
    console.log('delete');
    this.configService.dynamicDeleteApi({ 
      url: this.requestForm.urlDelete,
      id: this.selectedMainData._id
    })
    .subscribe((data: any) => {
      console.log('success', data);
      this.modalRef?.hide();
    });
  }

  selectImage(item: any) {
    console.log('image selected', item);
    console.log('image selected222', this.selectedMainData);
    this.childModal?.hide();
    this.group1.controls['image'].setValue(item);
  }
  
  addNew(){
    if (this.group1.status === 'VALID') {
      console.log('this.group1', this.group1);

      this.configService.dynamicAddApi({ 
        body: this.group1.value,
        url: this.requestForm.urlUpdate
      })
      .subscribe((data: any) => {
        console.log('success', data);
        this.modalRef?.hide();
      });
    }
  }
}
