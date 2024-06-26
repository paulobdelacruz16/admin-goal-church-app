import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-admin-dynamic-content',
  templateUrl: './admin-dynamic-content.component.html',
  styleUrls: ['./admin-dynamic-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminDynamicContentComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  myFormBuilder: any;
  myMainFormBuilder: any;
  newData: any;
  pageUrl: any;
  dataModel: any;
  selectedformBuilder: any;
  cardCounter: boolean = true;
  cardForm:any;
  // uiDataModel: any = {}
  uiDataModel: { [key: string]: any[] } = {};
  @Input() mainData: any;
  @Input() category: any;
  @Input() cta: any;
  @Input() action: any;

  // ngOnInit(): void {
  //   this.myFormBuilder = this.formBuilder.group({});
  //   this.myMainFormBuilder = this.formBuilder.group({});
  //   console.log('mainData', this.mainData.data);
  //     for (var sections in this.mainData.data) {
  //       if (sections !== '_id' && sections !== '__v') {
  //         this.addMainGroupCard(sections);
  //         this.uiDataModel[sections] = [];
  //         for (var key in this.mainData.data[sections]) {
  //           if (key !== '_id' && key !== '__v') {
  //             const dataModel: any = [
  //               { label: 'Title', type: 'text', name: 'title' },
  //               { label: 'Description', type: 'text', name: 'description' },
  //               { label: 'Paragraph', type: 'text-area', name: 'paragraph' },
  //               { label: 'Url', type: 'text', name: 'url' },
  //               { label: 'Image', type: 'text', name: 'image' },
  //               { label: 'Verse', type: 'text', name: 'verse' },
  //               { label: 'Card', type: 'array-text', name: 'card' },
  //               { label: 'Page Name', type: 'text', name: 'page_name' },
  //             ];
  //             const indexFound = dataModel.findIndex(
  //               (x: any) => x.name === key
  //             );

  //             dataModel[indexFound].value = this.mainData.data[sections][key];
  //             dataModel[indexFound].sections = sections;
  //             this.uiDataModel[sections].push(dataModel[indexFound]);

  //             if (Array.isArray(this.mainData.data[sections][key])) {
  //               for (var index in this.mainData.data[sections][key]) {
  //                 this.cardForm = this.formBuilder.group({});
  //                 this.addGroupCard(sections, key);
  //                 for (var key2 in this.mainData.data[sections][key][index]) {
  //                   if (key2 !== '_id' && key2 !== '__v') {
  //                     this.addCard(key2);
  //                     this.myMainFormBuilder.controls[sections].controls[
  //                       key
  //                     ].controls[index].controls[key2].setValue(
  //                       this.mainData.data[sections][key][index][key2]
  //                     );
  //                   }
  //                 }
  //               }
  //             } else {
  //               this.myMainFormBuilder.controls[sections].addControl(
  //                 key,
  //                 new FormControl('', Validators.required)
  //               );
  //               this.myMainFormBuilder.controls[sections].controls[
  //                 key
  //               ].setValue(this.mainData.data[sections][key]);
  //             }
  //           }
  //         }
  //       }
  //     }

  // }

  ngOnInit(): void {
    this.myFormBuilder = this.formBuilder.group({});
    this.cardForm = this.formBuilder.array([]);

    // this.myMainFormBuilder = this.formBuilder.group({});
    this.myMainFormBuilder = this.formBuilder.group({
      pageName: ['', [Validators.required, Validators.minLength(1)]],
      arrayData: this.formBuilder.array([]),
    });
    console.log('mainData', this.mainData.data);

    for (let i = 0; i < this.mainData.data.arrayData.length; i++) {
      this.myFormBuilder = this.formBuilder.group({});
      if (this.mainData.data.arrayData[i].type === 'card') {
        if(this.mainData.data.arrayData[i].value.length === 0){
          this.myMainFormBuilder.controls['arrayData'].push(
            this.formBuilder.group({})
          );
          this.myMainFormBuilder.controls['arrayData'].controls[i].addControl('cardGroup', this.formBuilder.array([]));
        }else{
          this.myMainFormBuilder.controls['arrayData'].controls[i].addControl('cardGroup', this.formBuilder.array([]));
        }
        for (
          let i2 = 0;
          i2 < this.mainData.data.arrayData[i].value.length;
          i2++
        ) {
          this.cardForm = this.formBuilder.group({});
          this.cardForm.addControl(
            'value',
            new FormControl('', Validators.required)
          );
          this.myMainFormBuilder.controls['arrayData'].controls[i].controls['cardGroup'].push(this.cardForm);
        }
      }else{
        this.myFormBuilder.addControl(
          'value',
          new FormControl('', Validators.required)
        );
        this.myMainFormBuilder.controls['arrayData'].push(
          this.myFormBuilder
        );
      }

      console.log('myMainFormBuilder', this.myMainFormBuilder);

  
    }
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
    if (this.action === 'post') {
      this.configService
        .dynamicAddApi({
          body: this.myMainFormBuilder.value,
          url: 'api/' + this.cta,
        })
        .subscribe((data: any) => {
          console.log('success', data);
          this.modalRef?.hide();
        });
    } else {
      this.configService
        .dynamicUpdateApi({
          body: this.myMainFormBuilder.value,
          url: 'api/' + this.cta,
          id: this.category,
        })
        .subscribe((data: any) => {
          console.log('success', data);
          this.modalRef?.hide();
        });
    }
  }

  isArray(value: any) {
    return Array.isArray(value);
  }

  toArray(answers: any) {
    return Object.keys(answers).map((key) => answers[key]);
  }

  onAddCard(sections: string, index: number) {
    // this.cardForm = this.formBuilder.group({});
    // const key = 'card';
    // for (var key2 in this.mainData.data[sections][key][0]) {
    //   if (key2 === '_id' || key2 === '__v') {
    //   } else {
    //     this.addCard(key2);
    //   }
    // }
    // this.myMainFormBuilder.controls[sections].controls['card'].push(
    //   this.cardForm
    // );
    // this.uiDataModel[sections][i].value =
    //   this.myMainFormBuilder.controls[sections].controls[key].value;

    this.cardForm = this.formBuilder.group({});
    this.cardForm.addControl(
      'value',
      new FormControl('', Validators.required)
    );
    this.myMainFormBuilder.controls['arrayData'].controls[index].controls['cardGroup'].push(this.cardForm);
    console.log('this.myMainFormBuilder', this.myMainFormBuilder);

    // this.mainData.data.arrayData[index].value.push()

    // pag add ng card dapat nakakapag lagay din tayo ng object inside sa card sa pag create pa lang ng value


  }

  onRemoveCard(sections: string, i: number) {
    const key = 'card';
    const removeIndex = this.uiDataModel[sections][i].value.length - 1;
    this.myMainFormBuilder.controls[sections].controls[key].removeAt(
      removeIndex
    );
    this.uiDataModel[sections][i].value =
      this.myMainFormBuilder.controls[sections].controls[key].value;
  }

  onUpdateImage(section: any, key: string, field: any, i: any) {
    this.pageUrl = `/images/`;
    this.configService.getAllImages().subscribe((dataImages: any) => {
      const initialState: ModalOptions = {
        initialState: {
          apiImages: dataImages,
          pageUrl: this.pageUrl,
        },
      };
      this.modalRef = this.modalService.show(
        ModalView03Component,
        initialState
      );
      this.modalRef.content.messageEvent.subscribe((data: any) => {
        this.myMainFormBuilder.controls['arrayData'].controls[section].controls['value'].setValue(data);
      });
    });
  }
}
