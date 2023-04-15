import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalView02Component  } from "../../partials/modal-view-02/modal-view02.component"

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadImageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private modalService: BsModalService,

  ) {
    this.createForm();
  }
  modalRef?: BsModalRef;
  uploadFormGroup = new FormGroup({
    files: new FormControl(),
  });

  selectedFile: any;
  ngOnInit(): void {
  }

  onSubmitUpload() {
    console.log('this.uploadFormGroup', this.uploadFormGroup);
    if(this.uploadFormGroup.status === "VALID"){
      const formData = new FormData();
      for (let i = 0; i < this.selectedFile.length; i++) {
        formData.append('files', this.selectedFile[i], this.selectedFile[i].name);
      }
      this.configService.uploadImages(formData).subscribe((data: any) => {
        console.log('success uploading image');
      });
    }
  }

  createForm() {
    this.uploadFormGroup = this.formBuilder.group({
      files: ['', [Validators.required]],
    });
  }

  processFile(event: any) {
    this.selectedFile = event.target.files;
  }

  viewFiles(){
    this.configService.getAllImages().subscribe((data: any) => {
      console.log('success', data);
      const pageUrl = `/images/`;
      const initialState: ModalOptions = {
        initialState: {
          apiImages: data,
          pageUrl
        }
      };
      this.modalRef = this.modalService.show(ModalView02Component, initialState);
    });
  }
}
