import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView01Component  } from "../partials/modal-view-01/modal-view01.component"
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
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
  ngOnInit(): void {
    console.log('homepage');
    this.itemListData1 = {
      title: 'Services',
      description: 'Come, let us worship and bow down, Let us kneel before the Lord our Maker',
      data: [
      {
        name: 'Worship Service',
        description:
          'Worship the LORD with gladness; come before him with joyful songs.',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
        url: '#sampleurl-test01',
      },
      {
        name: 'Prayer Meeting',
        description:
          'Devote yourselves to prayer, being watchful and thankful.',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
        url: '#sampleurl-test02',
      },
      {
        name: 'Helping Children',
        description:
          'Train up a child in the way he should go; even when he is old he will not depart from it.',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
        url: '#sampleurl-test03',
      }],
    };
  }

  openModal(item:any) {
    const initialState: ModalOptions = {
      initialState: {
        selectedMainData: item,
      }
    };
    this.modalRef = this.modalService.show(ModalView01Component, initialState);
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

  }
}
