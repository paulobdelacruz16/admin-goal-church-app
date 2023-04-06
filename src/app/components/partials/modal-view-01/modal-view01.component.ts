import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
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
    private configService: ConfigService

  ) {
    this.createForm();
  }

  myInterval = 150000000;
  imageLabel = "Empty";

  group1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
  });
  itemListData1:any;
  selectedMainData: any;
  apiImages:any;
  hostname:any;
  pageUrl:any;
  ngOnInit(): void {
    console.log('selectedDataMain', this.selectedMainData);
    // console.log('apiImages', this.apiImages);
    // console.log('document', window.location.hostname);
    this.modalRef?.setClass('modal-lg');
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

  closeImage(){
    
  }

  savechanges(){
    if(this.group1.status === 'VALID'){
      console.log('this.group1', this.group1.value);
      console.log('submitted');
    };
  }

  deletechanges(){
    console.log('delete');
  }

  selectImage(item:any){
    console.log('image selected', item);
    this.childModal?.hide();
    this.selectedMainData.image = item;
    this.group1.controls['image'].setValue(item);
  }
}