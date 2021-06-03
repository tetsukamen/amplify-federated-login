import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormFieldTypes, onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'federated-lgoin';
  signUpFormFields: FormFieldTypes;
  authState: AuthState;
  user: CognitoUserInterface;


  ngOnInit() {
    this.signUpFormFields = [
      { type: "username" },
      { type: "email" },
      { type: "password" },
      { type: "custom:userType" },
    ];

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;

      console.log("authState", authState);
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
