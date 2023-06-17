import { Component,TemplateRef, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: [ './video-carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class VideoCarouselComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private _sanitizer: DomSanitizer,private modalService: BsModalService) {}
  safeURL: any;
  selectedVideoURL:any;
  pageUrl:any;

  @Input() itemListData:any;
  ngOnInit(): void {
    this.pageUrl = "/images/"

  }

  openModal(template: TemplateRef<any>, item:any) {
    this.selectedVideoURL = item.url;
    this.modalRef = this.modalService.show(template);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.selectedVideoURL);
  }



  
}
