import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router
  ) {
    let isAuthenticated = sessionStorage.getItem('login');
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  myInterval = 150000000;

  group1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
  });
  navigation: any;
  itemListData1: any;
  section1: any;
  pageUrl: any;
  selectedNavId: any;
  ngOnInit(): void {
    this.navigation = [
      {
        name: 'Goal Church Data',
        url: '/admin',
        id: 1,
      },
      {
        name: 'Goal Church Content',
        url: '/admin/content',
        id: 2,
      },
      {
        name: 'User',
        url: '/admin/user',
        id: 3,
      },
      {
        name: 'Server Images',
        url: '/admin/serverimages',
        id: 4,
      },
    ];
    this.selectedNavId = this.navigation?.[0].id;
    console.log(' this.selectedNavId', this.selectedNavId);
  }


  selectNavBar(id: any) {
    this.selectedNavId = id;
  }
}
