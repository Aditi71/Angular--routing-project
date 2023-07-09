import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string ='';
  username: string='';
  password: string='';
  email: string='';

  onSubmit(){
    console.log('Signup Submitted Data');
    console.log('Name: ', this.name);
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    console.log('Email: ', this.email);
  }
  }
  
  


