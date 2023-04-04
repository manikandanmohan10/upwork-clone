import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  radioSelected = false;
  buttonValue = 'Create Account';

  public handleRadioInputChange(inputId: string): void {
    if (inputId == 'client'){
      this.buttonValue = 'Join as a Client'
    }
    else if (inputId == 'freelancer'){
      this.buttonValue = 'Apply as a Freelancer'
    }
  }
}
