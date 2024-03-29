import { Component,TemplateRef, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-box-list-video',
  templateUrl: './box-list-video.component.html',
  styleUrls: [ './box-list-video.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class BoxListVideoComponent implements OnInit {
  modalRef?: BsModalRef;
  safeURL: any;
  selectedVideoURL:any;

  constructor(private _sanitizer: DomSanitizer, private modalService: BsModalService){}
  pageUrl:any = "http://localhost:4200/images/";
  @Input() itemListData:any;
  ngOnInit(): void {
    console.log('itemListData', this.itemListData);
    console.log('itemListData', this.pageUrl);
    
  }

  openModal(template: TemplateRef<any>, item:any) {
    this.selectedVideoURL = item.url;
    this.modalRef = this.modalService.show(template);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.selectedVideoURL);
  }
}
