import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {StatsService} from '../stats.service';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutModalComponent } from '../about-modal/about-modal.component';


@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.css']
})
export class ApiKeyFormComponent implements OnInit {

  form: FormGroup;
  jsonContent: any;
  loaded = false;
  error = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  showPassword = false;
  iconToShow = faEyeSlash;
  inputType = 'password';

  constructor(public fb: FormBuilder, private statsService: StatsService, private modalService: NgbModal) {
    this.form = fb.group({
      apiKey: ['']
    });
  }

  ngOnInit(): void {
  }

  showPass(): void {
    console.log('button');
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.iconToShow = faEye;
      this.inputType = 'text';
    } else {
      this.iconToShow = faEyeSlash;
      this.inputType = 'password';
    }
  }

  getStats(): void {
    this.loaded = false;
    this.error = false;
    const key = this.form.get('apiKey')?.value;
    const reply = this.statsService.getStats(key).subscribe(
      (response) => {
        this.jsonContent = response;
        this.loaded = true;
        this.error = false;
      },
      (error) => {
        this.loaded = false;
        this.error = true;
      }
    );
  }

  open(): void {
    this.modalService.open(AboutModalComponent);
  }

}
