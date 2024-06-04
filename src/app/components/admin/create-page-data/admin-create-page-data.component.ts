import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import {
  CdkDropList,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
  CdkDragExit,
} from '@angular/cdk/drag-drop';
import {
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';


import { ViewChildren } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-admin-create-page-data',
  templateUrl: './admin-create-page-data.component.html',
  styleUrls: ['./admin-create-page-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCreatePageDataComponent implements OnInit {
  @ViewChildren(CdkDropList)
  private dlq: any;
  public dls: CdkDropList[] = [];
  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder
  ) {}
  mainCategory: any;
  myFormBuilder: any;
  myMainFormBuilder: any;
  ctr = true;
  ngOnInit(): void {
    this.myFormBuilder = this.formBuilder.group({});
    this.myMainFormBuilder = this.formBuilder.group({
      pageName: ['', [Validators.required, Validators.minLength(1)]],
      arrayData: this.formBuilder.array([]),
    });
  }

  dataType: Array<any> = [
    { label: 'Text', type: 'text', id: 0 },
    { label: 'Paragraph', type: 'paragraph', id: 1 },
    { label: 'Image', type: 'image', id: 2 },
    { label: 'Card', type: 'card', id: 3 },
  ];
  table: Array<any> = [];
  table1: Array<any> = [];

  newTable: any;
  newTable1: any;

  drop(event: any) {
    const id = event.item.element.nativeElement.id;
    const parentId = parseInt(id.split('-')[0]);
    if (
      event.previousContainer !== event.container &&
      event.previousContainer.id === 'cdk-drop-list-0'
    ) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.addBook(event.item.data, event.currentIndex);
    } else if (
      event.previousContainer !== event.container &&
      event.previousContainer.id !== 'cdk-drop-list-0'
    ) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.myFormBuilder =
        this.myMainFormBuilder.controls['arrayData'].controls[
          parentId
        ].controls['cardGroup'].controls[event.previousIndex];
      this.myMainFormBuilder.controls['arrayData'].controls[parentId].controls[
        'cardGroup'
      ].removeAt(event.previousIndex);
      this.myMainFormBuilder.controls['arrayData'].insert(
        event.currentIndex,
        this.myFormBuilder
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.myFormBuilder = this.formBuilder.group({});
      this.myFormBuilder =
        this.myMainFormBuilder.controls['arrayData'].controls[
          event.previousIndex
        ];
      this.myMainFormBuilder.controls['arrayData'].removeAt(
        event.previousIndex
      );
      this.myMainFormBuilder.controls['arrayData'].insert(
        event.currentIndex,
        this.myFormBuilder
      );
    }
    if (event.previousContainer.data) {
      this.dataType = this.dataType.filter((f) => !f.temp);
    }
  }

  drop1(event: any, parentIndex: any) {
    if (
      event.previousContainer !== event.container &&
      event.previousContainer.id === 'cdk-drop-list-0'
    ) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.addBook1(event.item.data, parentIndex, event.currentIndex);
    } else if (
      event.previousContainer !== event.container &&
      event.previousContainer.id !== 'cdk-drop-list-0'
    ) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.myFormBuilder =
        this.myMainFormBuilder.controls['arrayData'].controls[
          event.previousIndex
        ];
      this.myMainFormBuilder.controls['arrayData'].removeAt(
        event.previousIndex
      );
      this.myMainFormBuilder.controls['arrayData'].controls[
        event.previousIndex
      ].controls['cardGroup'].insert(event.currentIndex, this.myFormBuilder);
      this.newTable1 = this.table1;
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
    if (this.myMainFormBuilder.valid) {
      this.configService
        .dynamicAddApi({
          body: this.myMainFormBuilder.value,
          url: 'api/dynamicPageContent',
        })
        .subscribe((data: any) => {
          console.log('success', data);
        });
    }
  }

  addBook(event: any, index: any) {
    this.myFormBuilder = null;
    if (event.type === 'card') {
      this.ctr = false;
      this.myFormBuilder = this.formBuilder.group({
        cardGroup: this.formBuilder.array([]),
      });
      this.myMainFormBuilder.controls['arrayData'].insert(
        index,
        this.myFormBuilder
      );
    } else {
      this.myFormBuilder = this.formBuilder.group({});
      this.myFormBuilder.addControl(
        'type',
        new FormControl('', Validators.required)
      );
      this.myFormBuilder.addControl(
        'name',
        new FormControl('', Validators.required)
      );
      this.myFormBuilder.addControl('value', new FormControl(''));
      this.myFormBuilder.controls['type'].setValue(event.type);
      this.myFormBuilder.controls['name'].setValue('');
      this.myFormBuilder.controls['value'].setValue('');
      this.myMainFormBuilder.controls['arrayData'].insert(
        index,
        this.myFormBuilder
      );
    }
    this.newTable = this.table;
    setTimeout(() => {
      let ldls: CdkDropList[] = [];
      this.dlq.forEach((dl: CdkDropList<any>) => {
        ldls.push(dl);
      });
      ldls = ldls.reverse();
      this.dls = ldls;
      this.ctr = true;
      console.log('ldls', ldls);
    }, 1000);
  }

  addBook1(event: any, parentIndex: any, currentIndex: any) {
    if (event.type !== 'card') {
      this.myFormBuilder = this.formBuilder.group({});
      this.myFormBuilder.addControl(
        'type',
        new FormControl('', Validators.required)
      );
      this.myFormBuilder.addControl(
        'name',
        new FormControl('', Validators.required)
      );
      this.myFormBuilder.addControl('value', new FormControl(''));
      this.myFormBuilder.controls['type'].setValue(event.type);
      this.myFormBuilder.controls['name'].setValue('');
      this.myFormBuilder.controls['value'].setValue('');
      this.myMainFormBuilder.controls['arrayData'].controls[
        parentIndex
      ].controls['cardGroup'].push(this.myFormBuilder);
      this.newTable1 = this.table1;
    }
  }

  ngAfterViewInit() {
    let ldls: CdkDropList[] = [];
    this.dlq.forEach((dl: CdkDropList<any>) => {
      ldls.push(dl);
    });
    ldls = ldls.reverse();
    asapScheduler.schedule(() => {
      this.dls = ldls;
    });
  }
}
