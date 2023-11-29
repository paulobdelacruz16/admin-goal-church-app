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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminContentComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  section3: any;
  myFormBuilder: any;
  myMainFormBuilder: any;
  newData: any;
  pageUrl: any;
  dataModel: any;
  selectedformBuilder: any;
  cardCounter: boolean = true;
  cardForm = this.formBuilder.group({});
  // uiDataModel: any = {}
  uiDataModel: { [key: string]: any[] } = {};
  category:any;

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')?.toLowerCase();
    this.myFormBuilder = this.formBuilder.group({});
    this.myMainFormBuilder = this.formBuilder.group({});
    console.log('category', this.category);
    this.configService.getAllSection({ url: this.category }).subscribe((data: any) => {
      this.section3 = data;
      console.log('  this.section3', this.section3);

      for (var sections in this.section3.data) {
        if (sections === '_id' || sections === '__v') {
        } else {
          this.addMainGroupCard(sections);
          this.uiDataModel[sections] = [];

          for (var key in this.section3.data[sections]) {
            if (key === '_id' || key === '__v') {
            } else {
              const dataModel: any = [
                { label: 'Title', type: 'text', name: 'title' },
                { label: 'Description', type: 'text', name: 'description' },
                { label: 'Url', type: 'text', name: 'url' },
                { label: 'Image', type: 'text', name: 'image' },
                { label: 'Verse', type: 'text', name: 'verse' },
                { label: 'Card', type: 'array-text', name: 'card' },
              ];
              const indexFound = dataModel.findIndex(
                (x: any) => x.name === key
              );

              dataModel[indexFound].value = this.section3.data[sections][key];
              dataModel[indexFound].sections = sections;
              this.uiDataModel[sections].push(dataModel[indexFound]);

              if (Array.isArray(this.section3.data[sections][key])) {
                for (var index in this.section3.data[sections][key]) {
                  this.cardForm = this.formBuilder.group({});
                  this.addGroupCard(sections, key);
                  for (var key2 in this.section3.data[sections][key][index]) {
                    if (key2 === '_id' || key2 === '__v') {
                    } else {
                      this.addCard(key2);
                      this.myMainFormBuilder.controls[sections].controls[
                        key
                      ].controls[index].controls[key2].setValue(
                        this.section3.data[sections][key][index][key2]
                      );
                    }
                  }
                }
              } else {
                this.myMainFormBuilder.controls[sections].addControl(
                  key,
                  new FormControl('', Validators.required)
                );
                this.myMainFormBuilder.controls[sections].controls[
                  key
                ].setValue(this.section3.data[sections][key]);
              }
            }
          }
        }
      }
    });
  }

  addCard(key2: string) {
    this.cardForm.addControl(key2, new FormControl('', Validators.required));
  }

  get cards() {
    if (this.cardCounter) {
      this.cardCounter = false;
      this.myFormBuilder.addControl('card', this.formBuilder.array([]));
    }

    return this.myFormBuilder.controls['card'] as FormArray;
  }

  addGroupCard(section: string, key: string) {
    this.myMainFormBuilder.controls[section].addControl(
      'card',
      this.formBuilder.array([])
    );
    this.myMainFormBuilder.controls[section].controls['card'].push(
      this.cardForm
    );
  }

  get sections() {
    return this.myMainFormBuilder.controls['card'] as FormArray;
  }

  addMainGroupCard(section: string) {
    this.myMainFormBuilder.addControl(section, this.formBuilder.group({}));
    // this.sections.push(this.myFormBuilder);
  }

  onSubmit() {
    console.log('myMainFormBuilder', this.myMainFormBuilder);
    this.configService
      .dynamicAddApi({
        body: this.myMainFormBuilder.value,
        url: 'api/' + this.category,
      })
      .subscribe((data: any) => {
        console.log('success', data);
        this.modalRef?.hide();
      });
  }

  isArray(value: any) {
    return Array.isArray(value);
  }

  toArray(answers: any) {
    return Object.keys(answers).map((key) => answers[key]);
  }

  onAddCard(sections: string, i: number) {
    this.cardForm = this.formBuilder.group({});
    const key = 'card';
    for (var key2 in this.section3.data[sections][key][0]) {
      if (key2 === '_id' || key2 === '__v') {
      } else {
        this.addCard(key2);
      }
    }
    this.myMainFormBuilder.controls[sections].controls['card'].push(
      this.cardForm
    );
    this.uiDataModel[sections][i].value = this.myMainFormBuilder.controls[sections].controls[key].value;
  }

  onRemoveCard(sections: string, i:number) {
    const key = 'card';
    const removeIndex = this.uiDataModel[sections][i].value.length - 1;
    this.myMainFormBuilder.controls[sections].controls[key].removeAt(removeIndex ); 
    this.uiDataModel[sections][i].value = this.myMainFormBuilder.controls[sections].controls[key].value;
  }
  
  onUpdateImage(section:string, key:string,field:any, i:number){
    this.pageUrl = `/images/`;
    this.configService.getAllImages().subscribe((dataImages: any) => {
      const initialState: ModalOptions = {
        initialState: {
          apiImages: dataImages,
          pageUrl: this.pageUrl
        },
      };
      this.modalRef = this.modalService.show(
        ModalView03Component,
        initialState
      );
      
      this.modalRef.content.messageEvent.subscribe((data: any) => {
        this.myMainFormBuilder.controls[section].controls[key].controls[i].controls[field].setValue(data);
      });
    });
  }
}
