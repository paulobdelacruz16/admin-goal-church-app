import { Component, Input } from '@angular/core';

interface StaffMember {
  name: string;
  role: string;
  image: string;
}

interface StaffCategory {
  title: string;
  members: StaffMember[];
}

@Component({
  selector: 'app-about-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  @Input() goalContent: any;
}
