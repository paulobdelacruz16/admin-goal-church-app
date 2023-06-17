import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  TemplateRef,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,
    private configService: ConfigService
    ) {
      this.configService.getAllSection1().subscribe((content: any) => {
        this.section1 = content
        this.itemListData1 = {
          title: 'Services',
          description: 'Come, let us worship and bow down, Let us kneel before the Lord our Maker',
          data: content.data,
        };
      });

      this.configService
      .getAllSection({ url: 'section2' })
      .subscribe((data: any) => {
        console.log('data', data);
       this.itemListData4 = data.data;
      });


    }
  myInterval = 1000;
  section1:any
  section2:any;
  itemListData1: any;
  itemListData2: any;
  videoListData: any;
  itemListData3: any;
  itemListData4: any;
  ngOnInit(): void {
    console.log('homepage');


 
    this.itemListData2 = {
      title: 'Events',
      description: 'Sample Description123',
      data: [
        {
          name: 'Encouter',
          description:
            'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
          url: '#',
        },
        {
          name: 'Trainings',
          description:
            'Training in righteousness, so that the servant of God may be thoroughly equipped for every good work.',
          url: '#',
        },
        {
          name: 'Sunday Cell Celebration',
          description:
            'Look to the Lord and his strength; seek his face always.',
          url: '#',
        },
      ],
    };

    // this.itemListData4 = [
    //   {
    //     description: 'Whoever believes and is baptized will be saved',
    //     image:'https://drive.google.com/uc?id=1m-5i93zen40JhfLSNem8AFf4XwSdBO1F',
    //     url: 'https://www.youtube.com/embed/B504jjM-fmk',
    //   },
    //   {
    //     description: 'Go and Make Disciples',
    //     image:'https://drive.google.com/uc?id=1dbkcVRxS6C-phSVmaDMqS4WhKjchx6v-',
    //     url: 'https://www.youtube.com/embed/B504jjM-fmk',
    //   },
    //   {
    //     description: 'Train up a child in the way he should go.',
    //     image:'https://drive.google.com/uc?id=1tJBUg2aG2gMpvOahWH054fOw7OgQ9WgV',
    //     url: 'https://www.youtube.com/embed/B504jjM-fmk',
    //   },
    // ];

    this.videoListData = {
      title: 'Sermons',
      description: 'My sheep hear my voice, and I know them, and they follow me. I give them eternal life, and they will never perish, and no one will snatch them out of my hand.',
      data: [
      {
        name: 'Victory Over the Battles',
        pastor: 'Sis. Malou Barles',
        image:
          'https://drive.google.com/uc?id=1zGMw_SK67c2Op1jFSWOyBZ66mnBrfBMS',
        url: 'https://www.youtube.com/embed/4oW0S9MO0yE',
      },
      {
        name: "God's Love for the One and Expectations from the 99",
        pastor: 'Pstr. Jay Dela Cruz',
        image:
          'https://drive.google.com/uc?id=1qY1MY3Lmu2pdGuWjWnCWozuwp7NNAHdA',
        url: 'https://www.youtube.com/embed/AKajaSXlOxg',
      },
      {
        name: 'He Knows My Name',
        pastor: 'Pstr. Jay Dela Cruz',
        image:
          'https://drive.google.com/uc?id=1ygK4AjN_A8fvZ48MR_VRc5xw8ZQ5J4ZV',
        url: 'https://www.youtube.com/embed/gDT1ZR9ejzM',
      },
    ]
  };
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
