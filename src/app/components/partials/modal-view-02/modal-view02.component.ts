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
  templateUrl: './modal-view02.component.html',
  styleUrls: ['./modal-view02.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalView02Component implements OnInit {
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef,
    private configService: ConfigService

  ) {}

  myInterval = 150000000;
  imageLabel = "Empty";

  group1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
  });
  itemListData1:any;
  selectedImage: any;
  apiImages:any;
  hostname:any;
  pageUrl:any;
  ngOnInit(): void {
    // console.log('apiImages', this.apiImages);
    // console.log('document', window.location.hostname);
    this.modalRef?.setClass('modal-lg');
  }

  onSubmit(){
    console.log('this.group1', this.group1);
    console.log('submitted');
  }

  closeImage(){
    
  }

  selectImage(item:any){
    console.log('image selected', item);
    this.selectedImage = item;
    this.group1.controls['image'].setValue(item);
  }


  deleteImage(){
    this.configService.deleteImage(this.selectedImage).subscribe((data: any) => {
      console.log('success', data);
      this.modalRef?.hide();
    });
  }
} 
