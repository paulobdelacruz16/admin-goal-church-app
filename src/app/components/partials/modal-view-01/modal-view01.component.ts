import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-modal-view01',
  templateUrl: './modal-view01.component.html',
  styleUrls: ['./modal-view01.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalView01Component implements OnInit {

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
  ngOnInit(): void {
    console.log('selectedDataMain', this.selectedMainData);
    this.modalRef?.setClass('modal-lg');
    this.itemListData1 = {
      title: 'Services',
      description: 'Come, let us worship and bow down, Let us kneel before the Lord our Maker',
      data: [
      {
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      },{
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      },{
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      },{
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      },{
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      },{
        name: 'Worship Service',
        image:
          'https://drive.google.com/uc?id=1cOCMOSO2MxneXphQz-dX7SYxqHTvUbuY',
      },
      {
        name: 'Prayer Meeting',
        image:
          'https://drive.google.com/uc?id=1KwJcJ7Mu1I3TpMWkFkI_BlXutGGHLzzQ',
      },
      {
        name: 'Helping Children',
        image:
          'https://drive.google.com/uc?id=1rV865wuvjhn19TwaJdMHGQeUs-6i8GuS',
      }
    ],

    
    };
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
    console.log('save');
    this.configService.getImages(this.selectedMainData).subscribe((data: any) => {
      
      console.log('success', data);
    });
    
  }

  deletechanges(){
    console.log('delete');
  }

  selectImage(item:any){
    this.selectedMainData.image = item.name;
  }

}
