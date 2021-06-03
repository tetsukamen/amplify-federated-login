import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Picture } from '../API.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public createForm: FormGroup;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      'bucket': ['', Validators.required],
      'key': ['', Validators.required],
      'region': ['', Validators.required]
    });
  }

  onCreate(picture: Picture): void {
    console.log(picture);
  }

}
