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
import { Router } from '@angular/router';

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
    private configService: ConfigService,
    private router: Router
  ) {
    this.createForm();
  }




  ngOnInit(): void {
  }

  createForm() {
    this.loginGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit(){
    if(this.loginGroup.status === 'VALID'){

      this.configService.findLoginCredential(this.loginGroup.value).subscribe((data: any) => {
        sessionStorage.setItem("login", 'true');
        this.router.navigate(['/admin'])
      });
    }
  }
}
