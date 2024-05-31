import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
  CdkDragExit,
  CdkDragEnter,
} from '@angular/cdk/drag-drop';
import {
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-admin-create-page-data',
  templateUrl: './admin-create-page-data.component.html',
  styleUrls: ['./admin-create-page-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCreatePageDataComponent implements OnInit {
  profileForm: any;
  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      favoriteBooks: this.formBuilder.array([this.formBuilder.control({})]),
    });
  }
  mainCategory: any;
  myFormBuilder: any;
  myMainFormBuilder: any;
  ngOnInit(): void {
    this.myFormBuilder = this.formBuilder.group({});
    // this.myMainFormBuilder = this.formBuilder.group({});
    this.myMainFormBuilder = this.formBuilder.group({
      arrayData: this.formBuilder.array([]),
    });
  }

  dataType: Array<any> = [
    { label: 'Text', type: 'text', id: 1 },
    { label: 'Paragraph', type: 'paragraph', id: 2 },
    { label: 'Image', type: 'image', id: 3 },
    { label: 'Card', type: 'card', id: 4 },
  ];
  table: Array<any> = [];
  newTable: any;
  drop(event: any) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.addBook(event.item.data);
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.previousContainer.data) {
      this.dataType = this.dataType.filter((f) => !f.temp);
    }
  }

  noReturnPredicate() {
    return false;
  }

  onSourceListExited(event: CdkDragExit<any>) {
    const currentIdx = event.container.data.findIndex(
      (f: any) => f.id === event.item.data.id
    );
    this.dataType.splice(currentIdx + 1, 0, {
      ...event.item.data,
      temp: true,
    });
  }

  onSourceListEntered() {
    this.dataType = this.dataType.filter((f) => !f.temp);
  }

  onSubmit() {
    console.log('myMainFormBuilder', this.myMainFormBuilder);
  }

  addBook(event: any) {
    this.myFormBuilder = this.formBuilder.group({});
    this.myFormBuilder.addControl(
      'type',
      new FormControl('', Validators.required)
    );
    this.myFormBuilder.addControl(
      'value',
      new FormControl('', Validators.required)
    );
    this.myFormBuilder.controls['type'].setValue(event.type);
    this.myFormBuilder.controls['value'].setValue('');
    this.myMainFormBuilder.controls['arrayData'].push(this.myFormBuilder);
    this.newTable = this.table;
  }
}
