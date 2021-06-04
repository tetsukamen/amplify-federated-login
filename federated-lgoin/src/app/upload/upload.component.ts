import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Picture } from '../API.service';
import { Auth, Hub, Storage } from 'aws-amplify';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public createForm: FormGroup;
  username: string;
  level: string = "protected";
  key: string;
  fileObj: File;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
  ) { }

  async ngOnInit() {
    Hub.listen("storage", data => console.log(data));
    this.username = await Auth.currentAuthenticatedUser().then(e => e.username);
  }

  async onCreate() {
    const result = await Storage.put(this.key, this.fileObj, {
      level: this.level,
    })
    this.api.CreatePicture({ type: 'picture', id: null, key: result["key"], level: this.level, author: this.username })
      .then(_ => console.log("upload success"))
      .catch(err => console.log('error occured in uploading'))
  }

  onImageSelected(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0]);
      const timestamp = Math.floor(Date.now() / 1000);
      this.key = `${this.username}${timestamp}.jpeg`;
      this.fileObj = event.target.files[0];
    }
  }
}
