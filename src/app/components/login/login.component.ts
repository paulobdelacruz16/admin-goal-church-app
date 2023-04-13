import {
  Component,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ModalView02Component  } from "../partials/modal-view-02/modal-view02.component"
import { ModalView01Component  } from "../partials/modal-view-01/modal-view01.component"

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  modalRef?: BsModalRef;
  loginGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }




  ngOnInit(): void {
    console.log('loginpage');
  }

  createForm() {
    this.loginGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit(){
    console.log('submitted');
    if(this.loginGroup.status === 'VALID'){
      console.log('valid');
      

    }
  }
}
