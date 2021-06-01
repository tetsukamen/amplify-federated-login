import { Component, OnInit } from '@angular/core';
import { FormFieldTypes, onAuthUIStateChange } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'federated-lgoin';
  signUpFormFields: FormFieldTypes;


  ngOnInit() {
    this.signUpFormFields = [
      { type: "username" },
      { type: "email" },
      { type: "password" },
    ];

    onAuthUIStateChange((authState, authData) => {
      console.log(authState, authData);
    })
  }
}
