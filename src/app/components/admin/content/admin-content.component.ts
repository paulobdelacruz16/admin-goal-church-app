import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalView01Component } from '../../partials/modal-view-01/modal-view01.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {}
  section3: any;
  myFormBuilder: any;

  newData: any;
  pageUrl: any;
  dataModel: any;
  selectedformBuilder: any;
  ngOnInit(): void {
    this.myFormBuilder = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      card: this.formBuilder.array([]),
    });

    const dataModel:any = [
      { label: 'Title', type: 'text', name: 'title' },
      { label: 'Description', type: 'text', name: 'description' },
      { label: 'Card', type: 'text', name: 'card' },
    ];

    this.configService
      .getAllSection({ url: 'section3' })
      .subscribe((data: any) => {
        this.section3 = data;
        console.log('this.', this.section3);
        const mainData = this.section3.data[1];

        for (var key in mainData) {
          if (key === '_id' || key === '__v') {
          } else {
            const indexFound = dataModel.findIndex(
              (x: any) => x.name === key
            );
            dataModel[indexFound].value = mainData[key];
            if (Array.isArray(mainData[key])) {
              for (var index in mainData[key]) {
                this.addCard();
                for (var key2 in mainData[key][index]) {
                  if (key2 === '_id' || key2 === '__v') {
                  } else {
                    this.myFormBuilder.controls[key].controls[index].controls[
                      key2
                    ].setValue(mainData[key][index][key2]);
                  }
                }
              }
            } else {
              this.myFormBuilder.controls[key].setValue(mainData[key]);
            }
          }
        }
        console.log('formbuilder', this.myFormBuilder);
        this.dataModel = dataModel;
      });
  }

  get cards() {
    return this.myFormBuilder.controls['card'] as FormArray;
  }

  addCard() {
    const cardForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.cards.push(cardForm);
  }

  onSubmit() {}

  isArray(value: any) {
    return Array.isArray(value);
  }

  toArray(answers: any) {
    return Object.keys(answers).map((key) => answers[key]);
  }
}
