import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadImageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService
  ) {
    this.createForm();
  }

  uploadFormGroup = new FormGroup({
    files: new FormControl(),
  });

  selectedFile: any;
  ngOnInit(): void {
  }

  onSubmitUpload() {
    const formData = new FormData();
    for (let i = 0; i < this.selectedFile.length; i++) {
      formData.append('files', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.configService.uploadImages(formData).subscribe((data: any) => {
      console.log('success uploading image');
    });
  }

  createForm() {
    this.uploadFormGroup = this.formBuilder.group({
      files: ['', [Validators.required]],
    });
  }

  processFile(event: any) {
    this.selectedFile = event.target.files;
  }
}
