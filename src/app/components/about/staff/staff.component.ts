import { Component } from '@angular/core';

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
  private existingStaffImages = [
    'https://newhopehk.org/wp-content/uploads/2024/07/0002_Pat-McFall-Lead-Pastor.jpg',
    'https://newhopehk.org/wp-content/uploads/2024/07/0006_Carl-Higashi-Associate-Pastor-Community.jpg',
    'https://newhopehk.org/wp-content/uploads/2024/07/0000_Thomas-Costello-Executive-Pastor.jpg',
    'https://newhopehk.org/wp-content/uploads/2024/07/0005_Daniel-Correa-Youth-Pastor.jpg',
    'https://newhopehk.org/wp-content/uploads/2024/07/0004_Fran-Higashi-Church-Administrator.jpg',
    'https://newhopehk.org/wp-content/uploads/2024/07/0001_Ross-Yamamoto-Worship-Pastor.jpg',
    'https://newhopehk.org/wp-content/uploads/2026/05/web-Mari-1.png',
    'https://newhopehk.org/wp-content/uploads/2026/05/web-Kristina.jpg',
    'https://newhopehk.org/wp-content/uploads/2026/05/web-OliviaPUREZA.jpg',
    'https://newhopehk.org/wp-content/uploads/2026/05/web-Lehua.jpg'
  ];

  staffCategories: StaffCategory[] = [
    {
      title: 'Senior Pastor',
      members: [
        { name: 'Pat McFall', role: 'Senior Pastor', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0002_Pat-McFall-Lead-Pastor.jpg' }
      ]
    },
    {
      title: 'Pastoral Staff',
      members: [
        { name: 'Carl Higashi', role: 'Community Pastor', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0006_Carl-Higashi-Associate-Pastor-Community.jpg' },
        { name: 'Thomas Costello', role: 'Executive Pastor', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0000_Thomas-Costello-Executive-Pastor.jpg' }
      ]
    },
    {
      title: 'P12 Men',
      members: this.createP12Members('Men')
    },
    {
      title: 'P12 Women',
      members: this.createP12Members('Women')
    },
    {
      title: 'Ministry Heads',
      members: [
        { name: 'Daniel Correa', role: 'Youth Pastor', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0005_Daniel-Correa-Youth-Pastor.jpg' },
        { name: 'Ross Yamamoto', role: 'Worship Pastor', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0001_Ross-Yamamoto-Worship-Pastor.jpg' },
        { name: 'Mari Aki', role: 'Service Director', image: 'https://newhopehk.org/wp-content/uploads/2026/05/web-Mari-1.png' },
        { name: 'Kristina Pang', role: "Children's Director", image: 'https://newhopehk.org/wp-content/uploads/2026/05/web-Kristina.jpg' },
        { name: 'Fran Higashi', role: 'Financial Administrator', image: 'https://newhopehk.org/wp-content/uploads/2024/07/0004_Fran-Higashi-Church-Administrator.jpg' },
        { name: 'Olivia Pureza', role: 'Office Administrator', image: 'https://newhopehk.org/wp-content/uploads/2026/05/web-OliviaPUREZA.jpg' },
        { name: 'Lehua Correa', role: 'Counselor', image: 'https://newhopehk.org/wp-content/uploads/2026/05/web-Lehua.jpg' }
      ]
    }
  ];

  private createP12Members(group: 'Men' | 'Women'): StaffMember[] {
    return Array.from({ length: 12 }, (_, index) => {
      const number = String(index + 1).padStart(2, '0');
      const label = `P12 ${group} ${number}`;

      return {
        name: label,
        role: `P12 ${group}`,
        image: this.existingStaffImages[index % this.existingStaffImages.length]
      };
    });
  }
}
