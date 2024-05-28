import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admin-create-page-data',
  templateUrl: './admin-create-page-data.component.html',
  styleUrls: ['./admin-create-page-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})

export class AdminCreatePageDataComponent implements OnInit {
  constructor(
    private configService: ConfigService,
  ) {}

  mainCategory:any;
  ngOnInit(): void {
  }

  menu: Array<any> = [
    { title: 'Text', price: 12, id: 1 },
    { title: 'Paragraph', price: 12, id: 2 },
    { title: 'Image', price: 12, id: 3 },
    { title: 'Card', price: 12, id: 4 },
  ];
  table: Array<any> = [];

  drop(event: any) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.previousContainer.data) {
      this.menu = this.menu.filter((f) => !f.temp);
    }
  }

  exited(event: any) {
    const currentIdx = event.container.data.findIndex(
      (f:any) => f.id === event.item.data.id
    );
    this.menu.splice(currentIdx + 1, 0, {
      ...event.item.data,
      temp: true,
    });
  }
  entered() {
    this.menu = this.menu.filter((f) => !f.temp);
  }

}
