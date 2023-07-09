import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  prompt: string = "";

  onSubmit() {
    if (this.username === ""){
      this.prompt = "Username is empty !"
    }
    else if (this.password.length <= 8){
      this.prompt = "Password should atleast be 8 chars"
      this.password = ""
    }
    else {
      this.prompt = "Logged in successfully !"
    }

    console.log('Submitted data:');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  // ngModel() {
  // }

}